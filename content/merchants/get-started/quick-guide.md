---
date: 2018-09-17T15:21:22+02:00
title: Quick guide
description: A quick guide to the platform.
weight: 2
---

To get started with the API you have a couple options:

1. You can choose to use the Rehive supported JS SDK
2. Integrate the API manually in your choice of language.

To use the the SDK check for you language in the "references list" in the sidebar. If you instead want to use a language that does not have a Rehive supported SDK, a custom implementation should be trivial as the platform uses standard HTTP which is widely supported.

### Using the API

The easiest way to get started with the API is to use cURL to make a login request:

```
curl https://api.rehive.io/3/auth/login/
  -X POST
  -H "Content-Type: application/json"
  -d '{"user": "joe@example.com",
       "company": "rehive_prod"
       "password": "joe1234"}'
```

<aside class="warning">
    Before trying the above request, make you have added a test user by signing one up on the <a href="https://wallet.rehive.io" target="_blank">rehive wallet</a>. The <code>company</code> field should always be set to <code>rehive_prod</code>. For the <code>user</code> and <code>password</code> fields, use the details of the test user you created in the Rehive wallet.
</aside>

Once you have your own user you can replace the placeholder data in the example JSON object and then fire off the above request. If successful, you should get a response like this:

```json
{
    "status": "success"
    "data": {
        "token": "{token}",
        "user": {
            "id": "00000000-0000-0000-0000-000000000000",
            "first_name": "Joe",
            "last_name": "Soap",
            "email": "joe@example.com",
            "username": "",
            "id_number": null,
            "birth_date": null,
            "profile": null,
            "currency": null,
            "company": "rehive_prod",
            "language": "en",
            "nationality": "CA",
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
            }
            "created": 1464912953000,
            "updated": 1464912953000,
        }
    }
}
```

And there you have it, a successful login. The user was validated and authenticated on the platform and an authentication `token` returned.

<aside class="notice">
    Hang on to that authentication <code>token</code> though, as you can now use that <code>token</code> to make subsequent requests on authorization restricted endpoints.
</aside>

For example, you may want to get a list of accounts associated to the user:

```
curl https://api.rehive.io/3/user/accounts/
  -X GET
  -H "Authorization: Token {token}"
  -H "Content-Type: application/json"
```

If you used the `token` you previously retrieved you should get a successful response containing a list of user accounts:


```json
[
    {
        "name": "default",
        "reference": "0000000000",
        "primary": true,
        "currencies": [
            {
                "balance": 10000,
                "available_balance": 10000,
                "currency": {
                    "code": "XBT",
                    "description": "bitcoin",
                    "symbol": "฿",
                    "unit": "bitcoin",
                    "divisibility": 8
                },
                "limits": [],
                "fees": [],
                "settings": {
                    "allow_transactions": true,
                    "allow_debit_transactions": true,
                    "allow_credit_transactions": true
                },
                "active": true
            }
        ],
        "created": 1464858068745,
        "updated": 1464858068745
    }
]

```