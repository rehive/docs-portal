---
date: 2018-09-17T15:21:22+02:00
title: 5. Closed-loop
description: Handling Closed-loop payment processors
weight: 5
---

Closed-loop payments involve the user paying directly from their wallet balance to your merchant account. There are a few options available to the end user but each work in a very similar way. The options you should present to the user if they chose to pay with their wallet balance are as follows, any can be omitted depending on what you would like to support:

### Scan to Pay
To support Scan to Pay a QRCode will need to be generated from the invoice data using the following structure:

```bash
    rehive:<USER_ID>?currency=<CODE>&amount=<AMOUNT>&qr_id=<REFERENCE>&name=<NAME>(&subtype=<SUBTYPE>)
```

Each variable can be found in the Invoice data set. Before building the QRCode you will need to filter for the PaymentProcessorQuote object that has the `unique_string_name=native` and is in a `processing` state. This object is used for certain pieces of display information in the QRCode as seen below:

Variable | Data location
---|---
`USER_ID` | `Invoice.user.id`
`CODE` | `Invoice.request_currency.code`
`AMOUNT` | `PaymentProcessorQuote.amount` formatted from the lowest denomination value to the highest using `PaymentProcessorQuote.currency.code`. Example for USD with a divisibility of 2 would be 101 Cents * 0.01 = 1.01 Dollars.
`REFERENCE` | `PaymentProcessorQuote.reference`
`NAME` | This is used for display purposes only and can be any string you would like the user to see when scanning
`SUBTYPE` | `PaymentProcessorQuote.payment_processor.subtype`



### OTP payment

An OTP payment is one that is authorized by a single use OTP code that is sent to a user authorized mobile number.

The required information from the user is:
1. An email address
2. A mobile number that is validated on their wallet

Once the user has provided this information you will need to PATCH the Invoice as follows:
```bash
curl -X PATCH "/requests/<invoice-id>/" -H "accept: application/json" 
-H "Content-Type: application/json" 
-d "{ \"payer_email\": \"user@example.com\", \"payer_mobile_number\": \"+27777777777\"}"
```

If successful the user will receive an SMS with the OTP code. You will need to provide a way for the user to enter this code so you can make a POST request to: `/manager/businesses/<business_id>/invoice/<invoice-id>/otp-challenge` as follows:
```bash
curl -X POST "/requests/<invoice-id>/otp_challenge/" 
-H "accept: application/json" -H "Content-Type: application/json" --data '{"otp": "401703"}'
```

This is a simple Success/Response endpoint. On a successful 201 response a transfer will be created automatically between you and the user. Any errors will need to be forwarded to the end user.







