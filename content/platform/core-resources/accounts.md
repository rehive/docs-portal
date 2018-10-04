---
date: 2018-09-17T15:21:22+02:00
title: Accounts
description: Account resources.
weight: 5
---

The second requirement for creating transactions (after the currency) is an account. Accounts are containers that store user balances in relation to specific currencies. In addition accounts may have other settings or permissions attached to them depending on the company's use-case.

Generally, every user in the platform will require one or more accounts. Each one of these accounts may have several currencies inside it. How you create these accounts and sub currencies is up to the individual developers implementing the platform. There are two primary ways this can be done:

1. Using configurations to define a list of allowed accounts and automate whether the account is added to a new user on registration.
2. Manually invoking the admin endpoints to create accounts and currencies as needed.

The former is usually preferred unless you have very specific requirements or intend building a complete abstraction on top of the platform.

<aside class="notice">
    To learn about configuring accounts take a look at the <a href="https://dashboard.rehive.com" target="_blank">dashboard</a> or the <a href="/dashboard/get-started/introduction/" target="_blank">dashboard documentation</a>.
</aside>

### Object

At their simplest, accounts are not very complex. It is the sub currencies that provide the most information and functionality.

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
        "email": "joe@rehive.com",
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

To view or modify an account or its currencies you can use the following endpoints. Keep in mind, when accounts are used in other places within the API, they are always identified by their `reference`.

section | type| URL | methods
---|---|---|---
admin | multiple |  `https://api.rehive.com/3/admin/accounts/` | `GET`, `POST`
admin | single |  `https://api.rehive.com/3/admin/accounts/<reference>/` | `GET`, `PATCH`, `PUT`, `DELETE`
admin | multiple |  `https://api.rehive.com/3/admin/accounts/<reference>/currencies/` | `GET`, `POST`
admin | single |  `https://api.rehive.com/3/admin/accounts/<reference>/currencies/<code>/` | `GET`, `PATCH`, `PUT`, `DELETE`
user | multiple | `https://api.rehive.com/3/accounts/` | `GET`
user | single | `https://api.rehive.com/3/accounts/<reference>/` | `GET`
user | multiple | `https://api.rehive.com/3/accounts/<reference>/currencies/` | `GET`
user | single | `https://api.rehive.com/3/accounts/<reference>/currencies/</code>/` | `GET`

### Usage

Usage remains the same for all endpoints in Rehive. Simply invoke one of the allowed HTTP methods with the correct `Content-Type` and a `Authorization` header.
