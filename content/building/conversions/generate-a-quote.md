---
date: 2018-09-17T15:21:22+02:00
title: Generate a quote
description: Basic overview of an example flow to request a conversion quote via a custom integration.
weight: 2
---

This section will provide guidelines for fetching and providing quotation information via a custom integration.

#### Requirements

To integrate custom quoting in the Conversion Extension, you will need to:

* Create custom integration services that can receive a `conversion.quote` webhook event. The details for this webhook event are laid out in the [Quote event](#quote-event) section of this guide.
* Add the service as an integration in the [Rehive Admin Dashboard](https://dashboard.rehive.com/#/extensions/conversion/settings).
* Configure a `conversion.quote` webhook on the integration in the dashboard.
    - Ensure that you use a unique, random value as the `secret`.
* Associate the integration to any conversion pairs that should use your custom integration to fetch quotes [Rehive Conversion Extension](https://dashboard.rehive.com/#/extensions/conversion/pairs).

#### Steps:

1. The user initiates a conversion transaction using the app.
2. The Rehive Conversion extension sends a `conversion.quote` webhook to the custom integration.
3. The custom integration verifies the secret sent in the headers and then:
    - Fetches applicable quote information (via the source of your choice).
    - If needed, perform any actions needed to ensure the funds/liquidity is available.
    - Return the quote to the Rehive conversion extension in the response.
4. The Conversion extension uses the webhook respponse data to construct a conversion that gets returned to the user for approval.
5. The user approves the quote and processing proceeds to [conversion execution](/building/conversions/execute-a-conversion/).

<img src="/images/conversion-extension-generate-quote.png" alt="Deposit via bank transfer diagram" width="80%">

#### Quote event

To integrate with our Conversion Extension, the custom integration requires an endpoint that can receive `conversion.quote` events. This endpoint `url`, along with a `secret`, is configured when setting up webhooks on a conversion extension integration.

The `conversion.quote` event is sent when a user requests a quote and it provides an opportunity for your integration to modify the quote to something suitable to your needs.

**Request data**

The request data sent by the Conversion Extension in the `conversion.quote` event looks like:


```json
{
    "from_currency": "<currency_code>",
    "to_currency": "<currency_code>",
    "from_amount": 1000,
    "to_amount": null,
    "transaction_collection_id": "<collection_id>",
    "debit_account": "<account_reference>",
    "credit_account": "<account_reference>",
    "user": "<user_id>",
    "id": "<conversion_id>",
    "metadata": null
}
```

Name | type | description
---|---|---
from_currency | string | The currency that will be sold by the conversion.
to_currency | string | The currency that wll be bought by the conversion.
from_amount | integer | Optional integer representation of the credited amount.
to_amount | integer | Optional integer representation of the credited amount.
transaction_collection_id | string uuid | The pre-generated collection ID that will be used if the quote is approved.
debit_account | string | A reference for the account where the from_currency will be debited.
credit_account | string | A reference for the account where the to_currency will be credited.
user | string uuid | The user requesting the conversion.
id | string uuid | The conversion ID.
metadata | object | An optional object containing JSON metadata about the conversion.

Either a `from_amount` or `to_amount` will be included. You will have to be prepared to generate quotes from either direction.

<aside class="notice">
    Always verify the <code>Authorization</code> header's secret on each webhook event in order to ensure the webhook is origination from the Conversion extension. The secret will be formatted as <code>Secret {secret}</code>.
</aside>

**Response data**

Once you have verified the incoming webhook's secret and performed any validation you can do anything else necessary to construct a quote that matches your business requirements.

Your response data should be formatted like:

```json
{
    "from_amount": 1000,
    "to_amount": 1000,
    "from_fee": null,
    "to_fee": null,
    "expires": null,
    "rate": 0.01
}
```

Name | type | description
---|---|---
from_amount | integer | Final integer representation of the `from_currency` debited amount.
to_amount | integer | Final integer representation of the `to_currency` credited amount.
from_fee | integer | An optional integer representation of a `from_currency` fee.
to_fee | integer | An optional integer representation of a `to_currency` fee.
expires | integer | An optional unix timestamp (UTC) when the quote should expire.
rate | float | A float percentage rate used to generate the `from_amount` and `to_amount`.

<aside class="notice">
    It is important that your webhook endpoint is able to process and return responses in a reasonable timeframe as webhook calls occurs within the same request->response cycle that the user requested the quote in.
</aside>
