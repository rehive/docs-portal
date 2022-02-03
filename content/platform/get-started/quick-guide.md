---
date: 2018-09-17T15:21:22+02:00
title: Quick guide
description: A quick guide to the platform.
weight: 2
---

To get started with the API you have a couple options:

1. You can choose to use one of the Rehive supported SDKs or
2. Integrate the API manually in your choice of language.

To use one of the SDKs check for you language in the "references list" in the sidebar. If you instead want to use a language that does not have a Rehive supported SDK, a custom implementation should be trivial as the platform uses standard HTTP which is widely supported.

<aside class="warning">
<b>Important:</b> This is a quick guide only. Please ensure that you understand the building guide and recommendations before architecting your own solutions on the Rehive platform.
</aside>


### Using the API

The easiest way to get started with the API is to use cURL to make a login request:

``` sh
curl https://api.rehive.com/3/auth/login/
  -X POST
  -H "Content-Type: application/json"
  -d '{"user": "joe@rehive.com",
       "company": "rehive"
       "password": "joe1234"}'
```

<aside class="warning">
    Before trying the above request, make sure you have your own <code>user</code>, <code>company</code>, and <code>password</code>. This can be done easily by registering a new company via the <a href="https://dashboard.rehive.com" target="_blank">dashboard</a>.
</aside>

Once you have your own user you can replace the placeholder data in the example JSON object and then fire off the above request. If successful, you should get a response like this:

``` json
{
    "status": "success",
    "data": {
        "token": "{token}",
        "user": {
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
            "kyc": {
                "updated": 1509539801040,
                "status": "pending"
            },
            "verification": {
                "email": true,
                "mobile": true
            },
            "groups": [
                {
                    "name": "test",
                    "label": "Test"
                }
            ],
            "permissions": [],
            "settings": {
                "allow_transactions": true,
                "allow_debit_transactions": true,
                "allow_credit_transactions": true
            },
            "created": 1464912953000,
            "updated": 1464912953000,
        }
    }
}
```

And there you have it, a successful login! The user was validated and authenticated on the platform and an authentication `token` returned.

<aside class="warning">
    The platform login endpoint is intended for anonymous unauthenticated users and is therefore subject to strict throttling, rate limiting and bot protection rules. If you want to login a user from a "machine user" or service context you should instead use the admin authenticated login endpoint <code>/3/admin/auth/login/</code>, which requires an admin user's token to be included in the <code>Authorization</code> header.
</aside>

Usin the token returned in the login response you can perform actions, as that user, on endpoints that require authentication. For example, you may want to get a list of emails associated to a user:

``` sh
curl https://api.rehive.com/3/user/emails/
  -X GET
  -H "Authorization: Token {token}"
  -H "Content-Type: application/json"
```

If you used the `token` you previously retrieved you should get a successful response containing a list of user emails:


``` json
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
