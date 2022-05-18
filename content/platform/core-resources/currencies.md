---
date: 2018-09-17T15:21:22+02:00
title: Currencies
description: Currency resources.
weight: 4
---

Before transactions can be made in the platform at least two things need to be defined first: a currency and an account. Currencies are the resource Rehive uses to define common value (or assets) in the the platform. In almost all cases a currency represents a fiat currency, token or other cryptographic representation. However the currency system can support almost any fungible value you can think of (United states Dollar, Stellar Lumens, or gold).

### Object

Currencies are simple resources that store details and information regarding the currency. This includes typical information like a `description`, `unit` and `divisibility`. The divisibility defines how many decimal places a currency should have.

The full currency object looks like:

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
},
```

### Endpoints

Currency data appears in some fashion throughout the platform. However there are only several places where the currency can be directly accessed or modified. Keep in mind, when currencies are used in other places within the API, they are always identified by their `code`.

Take a look at the [API Reference](https://docs.platform.rehive.com) for the list of currency endpoints.

All endpoints that contain `/currencies/` in their URL path are used for handling transaction-collections.

### Usage

Usage remains the same for all endpoints in Rehive. Simply invoke one of the allowed HTTP methods with the correct `Content-Type` and an `Authorization` header.
