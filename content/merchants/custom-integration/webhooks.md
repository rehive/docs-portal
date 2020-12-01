---
date: 2018-09-17T15:21:22+02:00
title: 6. Webhooks
description: Handling and processing Invoice webhook data
weight: 6
---

While the user is on the hosted payments page the only way to get updates on payments is to process invoice webhooks. This will need to be done by a service you create and host that can receive and process the webhooks as well as make relevant changes to third party platforms that require status changes when a payment succeeds or fails.

Before being able to process webhooks you will need to create a webhook via the Merchant management section of the wallet. Here you can specify the URL the webhook will be sent to as well as an optional secret for added security. This will be added to the Authorization header like so: “Authorization: Secret YOUR_SECRET”.

After being set up a Webhook will be sent each time the Invoice has a Status change.

### Example Webhook:
```
{
 “data”: { 
  "id": "e7d7a5a2-9a97-4930-a992-589a6133488f",
  "user": "{}", # User object
  "account": "string",
  "request_reference": "MY_ECOMMERCE_REFERENCE",
  "request_currency": {
      "code": "USD",
      "display_code": "USD",
      "description": "United States Dollar",
      "symbol": "$",
      "unit": "dollar",
      "divisibility": 2
    },
  "request_amount": 10000,
  "Primary_payment_processor": “”,
  "description": "Online payment for clothes",
  "status": "paid",
  "return_url": "https://my-ecommerce-store.com/order/<USER_ORDER_PAGE>",
  "redirect_url": "https://<hosted-payment-link>.com/?request=e7d7a5a2-9a97-4930-a992-589a6133488f&return_url=https://my-ecommerce-store.com/order/<USER_ORDER_PAGE>",
  "payment_processor_quotes": [
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
    ],
  "created": 0,
  "updated": 0
}
}
```

The most relevant field is the `status` field. On successful payment this will be updated to the `paid` state. Once your service receives a webhook with the `paid` status any orders made by the user can be completed on your third party e-commerce platform.

Another new field is the `payment_processor_quotes` array. This will contain a list of methods chosen by the user to make the payment. It can be used to check what currencies your users are paying or if they over/underpaid and by what amount.










