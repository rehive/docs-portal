---
date: 2018-09-17T15:21:22+02:00
title: 3. Processor Quotes
description: Displaying and interacting with Payment Processor Quotes
weight: 3
---

Once a payment method has been selected the Invoice will return with a relevant Payment Processor Quote entry in the array field. These objects contain a few things:
1. The amount to be paid by the user after converting to the currency of the payment processor from the requested currency.
2. The currency specified by the user that they will be paying in
3. A `reference` field containing a unique identifier for the payment. Examples would be a Bitcoin address to pay to, a UUID for the internal transaction or a Bank payment reference.
4. Deposit information: extra information that might be required by the end user to make the payment. An example would be Bank deposit details.
5. Conversion quote object containing the rate at which the quote amount was calculated at
6. The total_paid by the user. This is the running total for all deposits made using the quotes information. Once it equals the `amount` field the quote is considered paid.


#### Payment processor object example:
```
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
  "total_paid": 200,
  "expiration_date": null,
  "status": "paid",
  "conversion_quote": null
}
```

Each quote information set should be handled in a specific way depending on the payment processor that was chosen. Next we will cover Open and Closed loop processor types and how to handle the quote information.
