---
date: 2018-09-17T15:21:22+02:00
title: Core resources
description: Product extension core resources.
weight: 3
---

There are three core resource in the product extension that you need to know about in order to place order and complete payments.

### Product

Store product information and everything you need to know about including images, prices and other details.

Field | Description
--- | ---
id | Unique identifier for the product
type | Type of product (`virtual` or `physical`)
name | Name of the product
description | Description of the product
short_description | Short description for the product
quantity | Quantity of the product available
countries | List of countries wher ethe product can be purchased
code | A code that can be used to identify the product in an external system
supplier | Information about the supplier
categories | List of categories related to the product
prices | List of prices in different currencies
images | List of images
metadata | Metadata object
enabled | Whether the product can be placed in an order
created | Timestamp date the notification was created
updated | Timestamp date the notification was last updated

### Order

Store carts and "placed" orders for users.

Field | Description
--- | ---
id | Unique identifier for the order
user | User that created the order
status | Status of the whole order (`pending`, `failed`, `placed`, `complate`)
currency | The order's currency
total_price | The total price of the order
metadata | Metadata object
placed | Date the order was placed
items | List of products related to an order.
created | Timestamp date the notification was created
updated | Timestamp date the notification was last updated

### Payment

Store information (success and error state) about payments. Currently the extension only supports `rehive` type transactions which are payments that are deducted from user's primary Rehive account.

Field | Description
--- | ---
id | Unique identifier for the payment
type | Type of ayment (Only `rehive` is supported)
amount | The amount that was paid
status | Payment status (`pending`, `failed`, `complete`)
debit_tx | Debit transaction on Rehive
metadata | Metadata object
created | Timestamp date the notification was created
updated | Timestamp date the notification was last updated