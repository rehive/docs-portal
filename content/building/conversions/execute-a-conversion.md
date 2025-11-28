---
date: 2018-09-17T15:21:22+02:00
title: Execute a conversion
description: Basic overview of an example flow to execute a conversion via a custom integration.
weight: 3
---

This section will provide guidelines for triggering and executing transactions via a custom integration.

#### Requirements

To integrate custom conversion execution in the Conversion Extension, you will need to:

* Create custom integration service that can receive a `conversion.execute` webhook event. The details for this webhook event are laid out in the [Execute event](#execute-event) section of this guide.
* Add the service (if you have not already added one for the quote flow) as an integration in the [Rehive Admin Dashboard](https://dashboard.rehive.com/#/extensions/conversion/settings).
* Configure a `conversion.execute` webhook on the integration in the dashboard.
    - Ensure that you use a unique, random value as the `secret`.
* Associate the integration to any conversion pairs that should use your custom integration to fetch quotes [Rehive Conversion Extension](https://dashboard.rehive.com/#/extensions/conversion/pairs).

#### Steps

1. The user accepts a conversion quote. See [Generate a quote][/building/conversions/generate-a-quote/] for the steps prior to this.
2. The Conversion Extension creates a `pending` transaction collection on the Rehive Platform.
3. The conversion is transitioned to `pending` and the Conversion extension sends a `conversion.execute` webhook to the custom integration.
4. The custom integration verifies the secret sent in the headers and indicates the webhooks has been received.
5. The custom integration now has an opportunity to decide how to execute the conversion:
	- The conversion details can be retrieved and verified against an existing quote.
	- Or the details can be checked against other sources to ensure the conversion rates are within the expected margins.
	- It may also be necessary to execute 3rd party trades at this point depending on your use-case.
5. When ready, the custom integration can update the collection associated with the conversion to `failed` or `complete`.
	- [/admin/transaction-collections/{identifier}/](https://api.rehive.com/?api=rehive-platform-admin-api#tag/transaction-collections/PATCH/3/admin/transaction-collections/{identifier}/)
6. The Conversion Extension is notified about the above status change and will mark the conversion as complete.
7. If any post conversion functionality needs to occur, you can do so by listening for webhooks events related to the transaction collection:
	- [transaction.execute](/platform/utilities/events/#supported-events)

#### Execute event

To integrate with the Conversion Extension, the custom integration requires an endpoint that can receive `conversion.execute` events. This endpoint `url`, along with a `secret`, is configured when setting up webhooks on a conversion extension integration.

The `conversion.execute` event is sent after a user approves a quote and it provides an opportunity for your integration interrupt the normal handling and fail/complete the transactions based on your own rules.

**Request data**

The request data sent by the Conversion Extension in the `conversion.execute` event looks like:

```json
{
	"id": "<conversion_id>",
	"transaction_collection_id": "<collection_id>"
}
```

Name | Type | Description
---|---|---
id | string uuid | The conversion ID.
transaction_collection_id | string uuid | The collection ID that contains the transactions.

<aside class="notice">
    Always verify the <code>Authorization</code> header's secret on each webhook event in order to ensure the webhook is origination from the Conversion extension. The secret will be formatted as <code>Secret {secret}</code>.
</aside>

**Response data**

Once you have verified the incoming webhook's secret and performed any validation you should acknowledge the webhook with a `200` HTTP status. The response body is irrelevant for this webhook event.

You can perform any necessary execution handling async (after responding to the webhook).

If you previously handled a `conversion.quote` webhook you should have already had the opportunity to save the `id` and `transaction_collection_id` at the point the user received the quote. This will allow you to match a previously issued quote to an incoming `conversion.execute` event.

If you are not handling `conversion.quote` events in your integration, then this will be the first time you receive conversion data. In this situation, you can make one or both of the below API calls to retrieve information:

- Transaction details : [/admin/transaction-collections/{identifier}/](https://api.rehive.com/?api=rehive-platform-admin-api#tag/transaction-collections/GET/3/admin/transaction-collections/{identifier}/)
- Conversion details : [/api/admin/conversions/{identifier}/](https://conversion.services.rehive.com/#tag/admin/operation/admin_conversions_retrieve)

It is up to you to decide when/how to trigger the conversion execution. However, when you are ready, you simply have to `PATCH` the transaction collection with a `status` of `complete` or `failed` in order to trigger completion or failure of the associated conversion:

- [/admin/transaction-collections/{identifier}/](https://api.rehive.com/?api=rehive-platform-admin-api#tag/transaction-collections/PATCH/3/admin/transaction-collections/{identifier}/)