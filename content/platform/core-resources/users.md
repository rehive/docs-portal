---
date: 2018-09-17T15:21:22+02:00
title: Users
description: User resources.
weight: 3
---

When a company is registered it not only creates a company but also a user. This user is a special "owner" user that cannot be deleted and is also automatically designated as part of the `admin` permission group.

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
    "company": "rehive",
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

User data can be accessed via several endpoints within the `auth`, `admin` and `user` sections.

section | type| URL | methods
---|---|---|---
auth | single | `https://api.rehive.com/3/auth/register/` | `POST`
auth | single | `https://api.rehive.com/3/auth/login/` | `POST`
admin | multiple |  `https://api.rehive.com/3/admin/users/` | `GET`, `POST`
admin | single | `https://api.rehive.com/3/admin/users/<id>/` | `GET`, `PATCH`, `PUT`
user | single | `https://api.rehive.com/3/user/` | `GET`, `PATCH`, `PUT`


### Usage

Usage remains the same for all endpoints in Rehive. Simply invoke one of the allowed HTTP methods with the correct `Content-Type` and a `Authorization` header.

### Auth

The auth methods that expose user objects are different to the other user endpoints in that they do not require an authentication token. Instead of an authentication token the password and identifier details are passed via the JSON body.

These methods should be used to authenticate both admin users and end-users.

**Register request**

```shell
curl https://api.rehive.com/3/auth/register/
  -X POST
  -H "Content-Type: application/json"
  -d '{"email": "joe@rehive.com",
       "company": "rehive",
       "password1": "joe1234",
       "password2":"joe1234"}'
```

**Login request**

```shell
curl https://api.rehive.com/3/auth/login/
  -X POST
  -H "Content-Type: application/json"
  -d '{"user": "joe@rehive.com",
       "company": "rehive"
       "password": "joe1234"}'
```

#### Admin

When accessing users via the admin endpoints we encounter the first case where we require a list of resources rather than only a single resource. As a result there are 2 endpoints in the admin section: one for adding a user and viewing a list of users and another for viewing and modifying a single user. As per the platform standard `GET` is used to retrieve either a list or a single object while `POST` is used to create a new object. In order to modify an object use `PATCH` or `PUT`.

Examples of these endpoints can be found below:

**Create user request**

```shell
```

**Get users request**

```shell
```

**Get user request**

```shell
```

**Update user request**

```shell
```

### User

When accessing user info as a end-user,  the user only needs to know about their own data. Therefore, there is no way to access a list of users within the `user` section of the platform. However, there is still a way to retrieve and update a user (create is done via the register endpoint).

Examples of a user section request can be found below:

**Retrieve user request**

```shell
```

**Update user request**

```shell
```
