---
date: 2018-09-17T15:21:22+02:00
title: Users
description: User resources.
weight: 3
---

When a company is registered it not only creates a company but also a user. This user is a special "owner" user that cannot be deleted and is also automatically designated as part of the `admin` permission group.

Outside of the "owner" users, Rehive supports the creation/registration of users under specific groups (roles) and permissions. Users have several optional unique identifiers:

- id
- username
- email
- mobile

These identifier may not be shared by any other users&ast;.

<aside class="notice">
    &ast;It is possible for the identifier to be shared if one of the users is flagged as temporary. Temporary users are used to hold transfers to unverified user identifiers. Once a real user verifies their data the tempoary user will be merged into them.
</aside>


### Object

Users have a multitude of attributes and properties that can be used to store identity information as well as settings and state. The full user object looks like this:

```json
{
    "id": "00000000-0000-0000-0000-000000000000",
    "first_name": "Joe",
    "last_name": "Soap",
    "email": "joe@rehive.com",
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
    "account": "0000000000",
    "balance": 0,
    "available_balance": 0,
    "language": "en",
    "nationality": "ZA",
    "website": null,
    "metadata": null,
    "mobile": "+27840000000",
    "timezone": "Asia/Dhaka",
    "verified": true,
    "verification": {
        "email": true,
        "mobile": true
    },
    "status": "pending",
    "groups": [
        {
            "name": "user",
            "label": "User"
        }
    ],
    "created": 1464912953000,
    "updated": 1464912953000,
    "settings": {
        "allow_transactions": true,
        "allow_debit_transactions": true,
        "allow_credit_transactions": true,
        "disallowed_transaction_subtypes": []
    },
    "deactivated": false,
    "last_login": 1464912953000,
    "archived": false,
    "temporary": false
}
```

### Endpoints

User data can be accessed via several endpoints within the `auth`, `admin` and `user` sections.

section | type| URL | methods
---|---|---|---
auth | single | `https://api.rehive.com/3/auth/register/` | `POST`
auth | single | `https://api.rehive.com/3/auth/login/` | `POST`
admin | multiple |  `https://api.rehive.com/3/admin/users/` | `GET`, `POST`
admin | single | `https://api.rehive.com/3/admin/users/<id>/` | `GET`, `PATCH`, `PUT`, `DELETE`
user | single | `https://api.rehive.com/3/user/` | `GET`, `PATCH`, `PUT`


### Usage

Usage remains the same for all endpoints in Rehive. Simply invoke one of the allowed HTTP methods with the correct `Content-Type` and a `Authorization` header if required.
