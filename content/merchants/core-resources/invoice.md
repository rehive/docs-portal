---
date: 2018-09-17T15:21:22+02:00
title: Invoices
description: Invoice resources.
weight: 1
---

The Invoice the core resource that encapsulates all logic around receiving user payments. All other resources are associated with the Invoice in various ways. 

### Statuses
The statuses of an invoice will tell you whether or not the user has paid, underpaid, overpaid etc and is the primary mechanism for triggering third party logic on your end.

status | description
---|---
draft | Invoice is created but not finalised for viewing by the end user.
processing | A primary payment processor has been selected but not Completed payment has been made yet.
paid | The end user has successfully made the payment for their quoted amount.
underpaid | The end user has paid less than their quoted amount.
overpaid | The end user has paid more than the quoted amount
expired | The Invoice has passed it’s expiry date.
complete | The invoice has been paid and converted into the requested currency.
failed | An error has occurred to cause the Invoice to permanently fail.
late | The user has paid the full quoted amount but after the due_date of the invoice.
cancelled | The invoice has been set to cancelled by a manager.

### Object

```json
{
    "id": "deb62287-dbc6-4f11-8f83-d753f6cf1284",
    "user": {
        "id": "fbb59810-04ab-401a-a017-d293dfa5c7c5",
        "base_currency": null
    },
    "request_reference": "123456789",
    "request_currency": {
        "code": "USD",
        "display_code": "USD",
        "description": "United States Dollar",
        "symbol": "$",
        "unit": "dollar",
        "divisibility": 2
    },
    "request_amount": 200,
    "primary_payment_processor": PaymentProcessorObject,
    "description": null,
    "metadata": null,
    "status": "overpaid",
    "account": null,
    "redirect_url": "<domain>?request=deb62287-dbc6-4f11-8f83-d753f6cf1284",
    "payer_email": "customer@rehive.com",
    "return_url": null,
    "payment_processor_quotes": [
        QuoteObjectArray
    ],
    "available_payment_processors": [
        PaymentProcessorArray
    ],
    "expiration_date": null,
    "due_date": null,
    "created": 1596795265440,
    "updated": 1596795408826
}
```
