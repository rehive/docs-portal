---
date: 2018-09-17T15:21:22+02:00
title: Extra integrations
description: Extra integrations that can be done to add addition Rehive functionality to the manager
weight: 5
---

This section outlines any additional integrations that can be done to extend the Currency Manager Extension functionality to different parts of the Rehive's ecosystem.

#### Integrating with the Conversion Extension flows
A currency manager that links to a third party system that provides endpoints for handling conversions and quotes can integrate directly with Rehive’s Conversion Extension to use the third party as the underlying quote and conversion mechanism. This can be done by implementing the Conversion Quote Integration within the currency manager extension. Guide coming soon!

#### Integrating with the Payment Requests Extension (PRS)
In order for a payment manager to integrate with the PRS payment processing it needs to provide an endpoint which returns a standard set of payment information as well as stores the PRS quote id to be used by the payment manager when creating the transaction.

###### Flow
1. The PRS sends quote information to the payment processor (in this case the currency manager extension).
2. The payment processor stores the quote id as well as generates any required deposit/payment information a user might need to fulfill the payment. This is returned to the PRS>
3. The wallet displays this payment information to the end user. The end user then makes a payment.
4. The payment processor processes this payment as usual. Making sure to include the Quote ID stored in step three within the transaction metadata.

With the above flow in mind this is what the Currency Manager Extension needs to implement to support this flow:

1. Add a `/payment` endpoint which handles the following fields being POSTed:
```json
{
    "id": "string",
    "request": 0,
    "reference": "string",
    "currency": "string",
    "amount": 0,
    "expiration_date": "string",
    "status": "pending",
    "account": "string"
}
```
2. When receiving a request on the `/payment` endpoint store the `id` of the Quote object being sent through. Optionally store the `account` object as this is Rehive account the payment is expected to be made too.
3. Using the currency generates the required payment information a user would need in order to make a payment via the third party ledger of the manager. For example if this was an XLM quote and the currency manager supported crypto wallet generation it should generate a unique XLM wallet for the user to make the payment too.
4. Detect the deposit using it’s usual third party ledger syncing logic
5. Once detected make a credit transaction to the `account` stored earlier as well as including the `id` stored in the transaction metadata location: `service_payment_requests: {“quote”: {“id”: id}}`
6. Complete/Fail the transaction as per the usual syncing logic

For a full description of the integration read the full [Payment Requests Extension protocol](https://docs.google.com/document/d/1TuH9mogeqkitF-lYw4dpuOhtGb9J0jCBQvt9kKg4ANc/edit?usp=sharing).
Additionally more general information on the PRS can be found [here](/extensions/payment-requests/introduction/) as well as Merchant integration docs [here](/merchants/get-started/introduction/).
