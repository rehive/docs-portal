---
date: 2018-09-17T15:21:22+02:00
title: Currencies
description: Currencies in the platform.
weight: 2
---

Currencies are used to define fungible common value (or assets) in the the platform. In almost all cases a currency represents a fiat currency, token or other cryptographic representation. However the currency system can support almost any fungible value you can think of (United states Dollar, Stellar Lumens, or gold).

Currencies are simple resources that store details and information regarding the currency.

Each currency must have a `divisibilty` defined. This field defines how many decimal places a currency should have and is required due to the platform handling currency values as integers. You can read more about precision handling in the Platform [here](/platform/general-usage/precision/).

For example, a representation of the *United States Dollar* could look like this:

```json
{
    "code": "USD",
    "display_code": "USD",
    "description": "United States dollar",
    "symbol": "$",
    "unit": "dollar",
    "divisibility": 2,
    "icon": null
}
```

<aside class="notice">
	Please take a look at the <a href="https://api.rehive.com/?api=rehive-platform-admin-api#tag/currencies/GET/3/admin/currencies/" target="_blank">API reference</a> for further details on the currency endpoints.
</aside>
