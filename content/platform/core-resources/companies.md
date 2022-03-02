---
date: 2018-09-17T15:21:22+02:00
title: Companies
description: Company resources.
weight: 2
---

The Rehive platform is a multi tenant application that separates data by a `company` identifier. This means that the `company` is an important part of all interactions with the platform. To do anything in Rehive, you must always have a company.

<aside class="notice">
    To create a company make use of the <a href="https://dashboard.rehive.com" target="_blank">dashboard</a> or take a look at the <a href="/dashboard/get-started/introduction/" target="_blank">dashboard documentation</a>.
</aside>

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

Like most resources in Rehive, the company data can be accessed via both the `admin` and `user` sections. The admin section endpoint gives admin users read/write access to the data while the user section endpoint provides read only access to end-users.

Take a look at the [API Reference](https://api.rehive.com/redoc/) for the list of currency endpoints.

All endpoints that contain `/company/` in their URL path are used for handling companies.

### Usage

Usage remains the same for all endpoints in Rehive. Simply invoke one of the allowed HTTP methods with the correct `Content-Type` and an `Authorization` header.