---
date: 2018-09-17T15:21:22+02:00
title: Accounts
description: Account resources.
weight: 2
---

### Object

This object can be used to check the currency balances for a user before approving a transaction.

The full account object with a single currency looks like:

```json
{
    "name": "default",
    "label": "Default",
    "reference": "0000000000",
    "primary": true,
    "user": {
        "id": "00000000-0000-0000-0000-000000000000",
        "username": null,
        "email": "joe@example.com",
        "mobile": "+27840000000",
        "first_name": "Joe",
        "last_name": "Soap",
        "profile": null
    },
    "currencies": [
        {
            "balance": 0,
            "available_balance": 0,
            "currency": {
                "code": "USD",
                "description": "United States dollar",
                "symbol": "$",
                "unit": "dollar",
                "divisibility": 2
            },
            "limits": [],
            "fees": [],
            "active": true,
            "settings": {
                "allow_transactions": true,
                "allow_debit_transactions": true,
                "allow_credit_transactions": true
            },
            "archived": false,
            "created": 1538573021547,
            "updated": 1538573021547
        }
    ],
    "archived": false,
    "created": 1538573021502,
    "updated": 1538573021502
}
```

### Endpoints

To view an account or its currencies you can use the following endpoints. Keep in mind, accounts are always identified by their `reference`.

section | type| URL | methods
---|---|---|---
user | multiple | `https://api.rehive.io/3/accounts/` | `GET`, `POST`
user | single | `https://api.rehive.io/3/accounts/<reference>/` |  `GET`, `PUT`,`PATCH`
user | multiple | `https://api.rehive.io/3/accounts/<reference>/currencies/` |  `GET`, `POST`
user | single | `https://api.rehive.io/3/accounts/<reference>/currencies/<code>/` | `GET`, `PUT`,`PATCH`

### Usage

Usage remains the same for all endpoints. Simply invoke one of the allowed HTTP methods with the correct `Content-Type` and a `Authorization` header.
