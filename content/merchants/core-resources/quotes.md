---
date: 2018-09-17T15:21:22+02:00
title: Quotes
description: Quote resources.
weight: 3
---

The Quote object contains the amount and currency the Payment Processor expects the user to pay to settle the Invoice total.

### Object

```json
{
    "id": "27fd41af-279e-44e7-b384-d6a6fe54f160",
    "request": 16,
    "reference": "459b3407-3009-4f77-bbbf-5d6e12788958",
    "deposit_details": {},
    "payment_processor": {
        "id": "19dff821-a349-4bbc-a929-72bf9fcef4d1",
        "unique_string_name": "native_otp",
        "logo": "",
        "name": "Native OTP",
        "description": "Pay using a wallet balance via an OTP.",
        "currencies": [],
        "longest_expiration_time": 0,
    },
    "currency": {
        "code": "USD",
        "display_code": "USD",
        "description": "United States Dollar",
        "symbol": "$",
        "unit": "dollar",
        "divisibility": 2
    },
    "amount": 200,
    "total_paid": 400,
    "expiration_date": null,
    "status": "overpaid",
    "conversion_quote": null
}
```
