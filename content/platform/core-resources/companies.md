---
date: 2018-09-17T15:21:22+02:00
title: Companies
description: Company resources.
weight: 2
---

The Rehive platform is a multi tenant application seperated by a `company` identifier. This means that the `company` is an important part of how Rehive seperates data and ensures resources do not cross client boundaries. To do anything in Rehive, you should always have a company. To create a company make use of the dashboard (TODO Add link) or take a look at the dashboard documentation (TODO Add link).

### Object

Companies in Rehive have their own details such as `id`, `name`, `description` and `website` as well as a wide range of settings that can be adjusted depending on how you want the company to function. It is a good idea to take a look at all of these before making a decision regarding how you want your application to function. The full company object looks like this:

```json
{
    "id": "rehive",
    "name": "rehive",
    "description": "This is an example company.",
    "website": "https://rehive.com",
    "email": "info@rehive.com",
    "logo": null,
    "address": {
        "line_1": "22 Example Street",
        "line_2": "",
        "city": "Example City",
        "state_province": "Example Province",
        "country": "ZA",
        "postal_code": "8000"
    },
    "settings": {
        "allow_transactions": true,
        "allow_debit_transactions": true,
        "allow_credit_transactions": true,
        "require_verification": false,
        "allow_registrations": true,
        "allow_overdrafts": false,
        "allow_session_durations": false,
        "require_terms_and_conditions": false,
        "default_transaction_status": "Pending",
        "password_reset_url": "",
        "password_set_url": "",
        "email_confirmation_url": "",
        "nationalities": []
    },
    "created": 1516281408895,
    "updated": 1535536086941
}
```

### Endpoints

Like most resources in Rehive, the company data can be access via both the `admin` and `user` section. The admin section endpoint gives admin users read/write access to the data while the user section endpoint provides read only access to end-users. The two endpoints can be compared below:

section | type | URL | methods
---|---|---
admin | single | `https://api.rehive.com/3/admin/company/` | `GET`, `PATCH`, `PUT`
user | single | `https://api.rehive.com/3/company/` | `GET`

### Usage

Usage remains the same for all endpoints in Rehive. Simply invoke one of the allowed HTTP methods with the correct `Content-Type` and a `Authorization` header.

#### Admin

The admin endpoints provide the `GET` method as a way to retrieve a company object. In addition a further `PUT` and `PATCH` method are provided as a way to modify either the whole or part of a company object repsectively.

Examples of the retreieving and updating a company can be found below:

**Retrieve company request**

```shell
curl https://api.rehive.com/3/admin/company/
  -X GET
  -H "Authorization: Token {token}"
  -H "Content-Type: application/json"
```

**Update company request**

```shell
curl https://api.rehive.com/3/admin/company/
  -X PATCH
  -H "Authorization: Token {token}"
  -H "Content-Type: application/json"
  -D '{"description": "A new description."}'
```

### User

The user endpoint provides the exact same `GET` functionality that the admin one does. However, end-users cannot modify the company therefore no methods for modifying the object are provided.

An example of company retrieval can be found below:

**Retrieve company request**

```shell
curl https://api.rehive.com/3/company/
  -X GET
  -H "Authorization: Token {token}"
  -H "Content-Type: application/json"
```
