---
date: 2018-09-17T15:21:22+02:00
title: PaymentProcessor
description: PaymentProcessor resources.
weight: 2
---

### Object

Payment processors objects contain information for the relevant payment options available for users. They are identified by the `unique_string_name` field which can be used to PATCH the Invoice’s `primariy_payment_processor` field for selecting/changing payment processors.

Each payment processor has a unique subtype and identifier field

### Object

```json
{
    "id": "b5950a31-f954-44ff-8860-3a18d7349cf5",
    "unique_string_name": "native",
    "logo": "",
    "name": "Native",
    "description": "Pay using a wallet balance.",
    "currencies": [],
    "longest_expiration_time": 0,
    "rehive_transaction_identifier": null,
    "rehive_subtype": "receive_email"
}
```
