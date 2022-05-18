---
date: 2018-09-17T15:21:22+02:00
title: Quick guide
description: A quick guide to the platform.
weight: 2
---

There are a couple ways to get started with the Rehive platform API:

1. You can choose to use one of the Rehive supported SDKs or
2. Integrate the API manually in your choice of language.

To use one of the SDKs check for you language in the "references list" in the sidebar. If you instead want to use a language that does not have a Rehive supported SDK, a custom implementation should be trivial as the platform uses standard HTTP which is widely supported.

<aside class="warning">
<b>Important:</b> This is a quick guide only. Please ensure that you understand the building guide and recommendations before designing your own solutions on the Rehive platform.
</aside>

### Using the API

The easiest way to get started with the API is to login to the dashboard and grab an API token for your user. You can create a new API token in the `Developers` -> `API tokens` section in the dashboard.

<aside class="warning">
    If you have not created a company yet, you should do so first via the <a href="https://dashboard.rehive.com" target="_blank">dashboard</a>.
</aside>

You can use the new API token to authenticate your requests to the API. For example, if you want to get user information (for the user who owns the API token) you can call the API like this (using cURL):

```shell
curl https://api.rehive.com/3/user/ \
  -X GET \
  -H "Authorization: Token {token}" \
  -H "Content-Type: application/json"
```

If successful, you should get a response like this:

``` json
{
    "status": "success",
    "data": {
        "id": "00000000-0000-0000-0000-000000000000",
        "first_name": "Joe",
        "last_name": "Soap",
        "email": "joe@rehive.com",
        "username": "",
        "id_number": null,
        "birth_date": null,
        "profile": null,
        "currency": null,
        "company": "rehive",
        "language": "en",
        "nationality": "ZA",
        "metadata": {},
        "mobile": "+00000000000",
        "timezone": null,
        "verified": false,
        "status": "pending",
        "verification": {
            "email": true,
            "mobile": true
        },
        "groups": [
            {
                "name": "admin",
                "label": "Admin"
            }
        ],
        "permissions": [],
        "settings": {
            "allow_transactions": true,
            "allow_debit_transactions": true,
            "allow_credit_transactions": true
        },
        "created": 1464912953000,
        "updated": 1464912953000
    }
}
```

You can access any endpoint and method your API token has permission to access. For example, you may want to get a list of emails associated to your user:

```shell
curl https://api.rehive.com/3/user/emails/ \
  -X GET \
  -H "Authorization: Token {token}" \
  -H "Content-Type: application/json"
```

You will get a response like this:

```json
{
    "status": "success",
    "data": [
        {
            "id": 1,
            "email": "joe@rehive.com",
            "primary": true,
            "verified": true
        }
    ]
}
```

Or as a final example, you may want to update your user details. When updating, the platform requires the `PATCH` method to be used instead of the `GET` method. You will also need to send a JSON formatted http body in your request:

```shell
curl https://api.rehive.com/3/user/ \
  -X PATCH \
  -H "Authorization: Token {token}" \
  -H "Content-Type: application/json" \
  -d '{"first_name": "Joseph"}'
```

To learn more about what you can do in the platform, take a look at the [API Reference](https://docs.platform.rehive.com), which contains the full API specification.
