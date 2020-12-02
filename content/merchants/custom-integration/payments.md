---
date: 2018-09-17T15:21:22+02:00
title: 2. Payment Options
description: Selecting and viewing different payment options
weight: 3
---

Once an invoice is created the user will need to choose which supported payment option that they would like to use. There are two broad types of options: Closed and Open loop payments.

Selecting a payment method
Each invoice requires a user to select a valid payment method. A list of supported methods for a specific invoice can be found in the `available_payment_processors` array on the Invoice object. They are uniquely identified by a `unique_string_name` field. This list is also the one you have defined when setting up the Merchant configuration settings.

#### Payment processor object example:
```json
  {
    "id": "19dff821-a349-4bbc-a929-72bf9fcef4d1",
    "unique_string_name": "native_otp",
    "logo": "",
    "name": "Native OTP",
    "description": "Pay using a wallet balance via an OTP.",
    "currencies": [],
    "longest_expiration_time": 0,
  }
```

The user should be presented with a list of these payment processors via a front-end. It has relevant display fields such as the Logo, Name and Description as well as the currencies it supports.

The only piece of information required from the user is a valid email address to attach to the Invoice.

Once the user has made their choice and entered an email address your backend or front-end should update the Invoice object by PATCHing the `primary_payment_processor` field with the `unique_string_name` of the payment processor using the anonymous endpoint like so:

```bash
curl -X PATCH "/api/requests/<request_id>/" 
-H "accept: application/json" -H "Content-Type: application/json" 
-d "{ \"primary_payment_processor\": "native_otp"}"
```

Note: because this is an anonymous endpoint either the front or backend can call it but it has very limited which only allows for selecting the payment method and currency. The `/manager/businesses/{business_id}/invoices/{invoice_id}/` endpoint can always be used with a valid authentication token for any other updates required to be made to the invoice.










