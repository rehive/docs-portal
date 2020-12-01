---
date: 2018-09-17T15:21:22+02:00
title: Users
description: User resources.
weight: 1
---

### Object

This object is returned together with the authentication token when the user logs in. The full user object looks like this:

```json
{
    "id": "00000000-0000-0000-0000-000000000000",
    "first_name": "Joe",
    "last_name": "Soap",
    "email": "joe@example.com",
    "username": null,
    "id_number": "",
    "birth_date": "2000-01-01",
    "profile": null,
    "currency": {
        "description": "Rand",
        "code": "ZAR",
        "symbol": "R",
        "unit": "rand",
        "divisibility": 2
    },
    "company": "rehive_prod",
    "language": "en",
    "nationality": "ZA",
    "metadata": null,
    "mobile": "+27840000000",
    "timezone": "Asia/Dhaka",
    "verified": true,
    "verification": {
        "email": true,
        "mobile": true
    },
    "kyc": {
        "updated": 1509539801040,
        "status": "pending"
    },
    "status": "pending",
    "groups": [],
    "permissions": [],
    "created": 1464912953000,
    "updated": 1464912953000,
    "settings": {
        "allow_transactions": true,
        "allow_debit_transactions": true,
        "allow_credit_transactions": true
    },
    "last_login": null,
    "archived": false
}
```

### Endpoints

section | type| URL | methods
---|---|---|---
auth | single | `https://api.rehive.io/3/user/` | `GET`, `PUT`,`PATCH`
auth | single | `https://api.rehive.io/3/auth/register/` | `POST`
auth | single | `https://api.rehive.io/3/auth/login/` | `POST`
auth | single | `https://api.rehive.io/3/auth/logout/` | `POST`


### Usage

Usage remains the same for all endpoints. Simply invoke one of the allowed HTTP methods with the correct `Content-Type` and a `Authorization` header if required.
