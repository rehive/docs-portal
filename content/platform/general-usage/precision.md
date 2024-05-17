---
date: 2022-02-09T15:21:22+02:00
title: Precision
description: Precision in currencies and amounts.
weight: 4
---

In order to prevent precision errors when working with decimal values, the platform handles all currency amounts/values as integers. This means that when posting an amount it should always be converted to its lowest currency unit (ie. an integer). For most currencies this will be the cents value (eg. $ 1.00 represented as 100 in the API).

When returning an integer value for a currency amount Rehive will always include a currency object and its associated divisibility so that it is easy to convert between decimal and integer values (and vice versa).

```json
{
    "code": "USD",
    "description": "United States dollar",
    "symbol": "$",
    "unit": "dollar",
    "divisibility": 2,
    "archived": false,
    "created": 1519288307393,
    "updated": 1519288307394
}
```

In this example, the `divisibility` of `USD` is `2`, which means that an API value of 100 is equivalent to $1.00. This conversion should be handled in your integrations if you want to display human readable values.
