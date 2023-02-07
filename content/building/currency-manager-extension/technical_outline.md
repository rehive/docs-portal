---
date: 2018-09-17T15:21:22+02:00
title: Technical outline
description: Technical outline of a base Currency Manager Extension
weight: 4
---

This section serves as a guide on how to fulfill the API structure and functional requirements of a Currency Manager Extension. It assumes you have a grasp of the general concepts and flows discussed in the previous sections.

When starting we recommend using our example/template Django project which can be found here: https://github.com/rehive/service-framework/tree/currency-manager-example. This will include a fully working version of the technical implementation defined in this documentation. Further reading is only required if you are doing a completely custom setup.

### Structural Overview

For a complete list of required endpoints and stored objects see the example implementation at: https://github.com/rehive/service-framework/tree/currency-manager-example

##### Metadata structure
Generally, we recommend including extra information about a transaction within the extension specific metadata. To include extra fields that might be useful for an admin or user to see a metadata object can be included as `extension_your_currency_manager` and any number of key/value pairs included.

##### Error messages
Rehive supports a `/transactions/<code>/messages/` endpoint for appending messages to a transaction. When an error occurs a managed currency extension should:
Append a User error by creating a message with the `level=error` and the `section=user`.
If necessary, an admin-only message can also be appended by specifying the section as `admin`.

The User level error will be displayed to the end user within the Rehive application.

##### Subtypes
When the currency manager creates transactions it should always use a subtype. See Rehive subtype guide and standard subtype list for more information. Where required the extension can also use its own custom subtypes.

##### Rehive Webhook Handling

###### General webhook handling
A currency manager extension will handle quite a number of both Rehive and third party webhooks to sync information between the two. Here are a few best practises for handling webhooks in a sane manner:

- Store a copy of every webhook event received. Including the data.
- Process the webhook in an asynchronous task that is outside of the request cycle.
- Mark webhook events as successful or failed once processed. For certain events a retry system could be put in place to retry a set number of times on failure.
- Add a recurring task that cleans up old webhook data.

###### Transaction webhook
[See the Rehive transaction handling section.](/building/currency-manager-extension/transaction_flows/)

###### Currency webhook
Event: `currency.create`  
The currency manager extension should create a new Currency object using the Rehive currency object data

Event: `currency.update`  
The currency manager extension should update an existing Currency object with the new webhook data using the code as a link


##### Currency divisibility handling
When linking two transaction systems one important factor is handling the divisibility correctly then translating transactions between the two. Rehive handles all transactions in the lowest divisibility for a currency. For example an API call for 1 USD on Rehive would include an amount value of 100 (100 cents).

Other third parties might have different divisibilities for currencies or handle them differently so it becomes important to translate the amounts correctly. This can be done by keeping these key points in mind:
- Store a copy of a companies Rehive currency objects within the currency manager extension
- Store a copy of the third party ledgers currency object
- When a currency is managed by the extension the extension should validate that the Rehive currency and third party currency being linked match in divisibility.
- If the currency manager handles transaction amounts in a non-cents structure make sure to convert to the base divisibility and store when detecting third party transactions as well as converting back when mapping Rehive transactions to the third party.



