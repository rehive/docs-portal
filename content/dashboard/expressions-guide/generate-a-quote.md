---
date: 2018-09-17T15:21:22+02:00
title: Generate a quote
description: Basic overview of an example flow to request a conversion quote from a third-party provider and provide it to Rehive to present to an end-user
weight: 2
---
This section will provide guidelines fetching and providing quotation information from a chosen third-party provider. 

#### Requirements

* To integrate with our Conversion Extension, the custom extension requires a quote endpoint. This endpoint is later added as the url for the Conversion Extension to call when getting quotes. The details for this endpoint are laid out in the [Quote endpoint guidelines](#quote-endpoint-guidelines) section of this guide.
* A conversion extension webhook must be configured to notify your custom extension with specific [event-type](https://docs.rehive.com/platform/usage/events/) `conversion.quote`. This can be done by adding your extension to the Rehive Conversion Extension in the [Rehive Admin Dashboard](https://dashboard.rehive.com/#/extensions/conversion/settings) or directly on the Rehive Conversion Service using the steps in the [Integrating with Rehive Conversion Service](/building/conversions/integrate-with-conversion-ext) section.
* Once built, the specific conversion pairs must be configured on the [Rehive Conversion Extension](https://dashboard.rehive.com/#/extensions/conversion/pairs) and associated with the custom extension in the form of a quote endpoint url added to the conversion pair.
* The custom extension must include a field  `collection_id`.


#### Steps:
1. The user initiates a conversion transaction using the app
2. The Rehive Conversion extension triggers a web call to the custom extension with a specific [event-type](https://docs.rehive.com/platform/usage/events/) `conversion.quote` including the aforementioned secret.
3. The custom extension verifies the secret and requests the quote from the third party if applicable. At this point, the extension must store the `collection_id`  included in the web call. This is later used in the [Execute a conversion](/building/conversions/execute-a-conversion/) flow. 
4. The custom extension returns the requested quotation: 
```json
{
    "from_amount": 1000,    # Either to or from should be specified
    "to_amount": 1000,
    "from_fee": 1000,       # Fee in the from_currency,
    "to_fee": 1000,         # Fee in the to_currency
    "expires": 100000,      # Unix timestamp for when the quote expires
    "rate": 0.01,           # Rate used for the quote
}

```

<img src="/images/conversion-extension-generate-quote.png" alt="Deposit via bank transfer diagram" width="80%">  

#### Quote endpoint guidelines

To integrate with our Conversion Extension, the custom extension requires a quote endpoint. This endpoint is later added as the `url` for the Conversion Extension to call when getting quotes. It should:

* Generate and store a secret to be used when authorizing quote calls:
* Generate a secret string and store it on the service
* Handle any calls made to either the `quote` endpoint or when receiving Rehive webhooks by checking for the secret in the header: `Authorization Secret {secret}`
* Handle a POST request with the following details:
```json
{
    "to_currency": "XLM",   # Rehive currency objects code
    "from_currency": "BTC", # Rehive currency objects code
    "from_amount": 1000,    # Either to or from should be specified. Both are in the base denomination.
    "to_amount": 1000,
    "collection_id": PRE_GENERATED_COLLECTION_ID,
    "debit_account": REHIVE_ACCOUNT_ID_TO_DEBIT, 
    "credit_account": REHIVE_ACCOUNT_ID_TO_CREDIT,
    "user": REHIVE_USER_ID,

}

```
