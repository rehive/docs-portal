---
date: 2018-09-17T15:21:22+02:00
title: 1. Invoicing
description: Creating an invoice for a payment
weight: 2
---

An invoice encapsulates the entire payments process. Once the customer has selected Rehive as a payment option the next step is for your system to generate a Rehive invoice for their payment.

### Create the invoice
The first step to initiate the payment process is to create an invoice. This would usually be done once the user has selected Rehive as the payment option for the order they wish to pay for.

##### The core pieces of information required to create an invoice are:
1. The total amount to be paid in your base currency
2. Return url: When the user has completed their off-site payment this is the url they should be redirected back to.
3. An optional “reference” field which ideally should match an identifier for your order within your e-commerce system
4. Status: The status of the invoice which should be set to “initiated”


### Endpoints
URL | methods
---|---
`​/manager​/businesses​/{business_id}​/invoices​/` | `POST`

### Example data:
```
{
  "request_reference": "MY_ECOMMERCE_REFERENCE",
  "request_amount": 10000, # Value of invoice in cents
  "description": "Online payment for clothes", # Optional description text
  "status": "initiated",
  "return_url": "https://my-ecommerce-store.com/order/<USER_ORDER_PAGE>",
}

```

### Example success response:
```
{
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
  "status": "initiated",
  "return_url": "https://my-ecommerce-store.com/order/<USER_ORDER_PAGE>",
  "redirect_url": "https://<company-specified-invoice-url>.com/?request=e7d7a5a2-9a97-4930-a992-589a6133488f&return_url=https://my-ecommerce-store.com/order/<USER_ORDER_PAGE>",
  "payment_processor_quotes": [],
  "created": 0,
  "updated": 0
}
```

### Redirect customer
Once the invoice has been created the user needs to be redirected to the off-site payments page to handle choosing further payment options and making the payment. This is done after receiving the `redirect_url` field and sending the user directly to this link on successful invoice creation.

When a user has completed payment they will automatically be directed back to the url defined in the `return_url` field.


### Cancelling invoice
In the case where an invoice is no longer valid the status can be PATCH’d using the following endpoint:
### Endpoints
URL | methods
---|---
`​/manager​/businesses​/{business_id}​/invoices​/` | `PATCH`

PATCH the endpoint with the new `cancelled` status and this will stop the user from viewing/interacting with the invoice.










