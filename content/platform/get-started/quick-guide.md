---
date: 2018-09-17T15:21:22+02:00
title: Quick guide
description: A quick guide to the platform.
weight: 2
---

To get started with the API you have several options:

1. You can choose to use one of the Rehive supported SDKs or
2. Integrate the API manually in your choice of language.

To use one of the SDKs check for you language in the "references list" in the sidebar. If you instead want to use a language that does not include a Rehive supported SDK, an implementation in your language of choice should be trivial as the platform uses standard HTTP which is widely extensively.

### Using the API

The easiest way to get started with the API is to use cURL and make a login request:

```
curl https://api.rehive.com/3/auth/login/
  -X POST
  -H "Content-Type: application/json"
  -d '{"user": "joe@rehive.com",
       "company": "rehive"
       "password": "joe1234"}'
```

Before trying the above request, make sure you have your own `user`, `company`, and `password`. This can be done easily by registering a new company via the Rehive Dashboard (TODO : LINK).

Once you have your own user you can replace the placeholder data in the example JSON object and then fire off the above request. If successful, you should get a response like this:

```
{
    "status": "success"
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
                    "label": "Test",
                    "settings": {
                        "allow_transactions": true,
                        "allow_debit_transactions": true,
                        "allow_credit_transactions": true
                    }
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

Hang on to that authentication `token` though, as you can now use that `token` to make subsequent requests on authorization restricted endpoints.

For example, you may want to get a list of emails associated to the user:

```
curl https://api.rehive.com/3/user/emails/
  -X GET
  -H "Authorization: Token {token}"
  -H "Content-Type: application/json"
```

If you used the `token` you previously retrieved you should get a successful response containing a list of user emails:


```
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