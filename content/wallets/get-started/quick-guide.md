---
date: 2018-09-17T15:21:22+02:00
title: Quick guides
description: Quick guides to the Wallets.
weight: 2
---

A series of quick guides to the wallets.


### Setting up Push Notifications

Push notifications in the Rehive apps are facilitated by the Expo framework on which the mobile react native app is built and therefore only available in apps built also built on Expo. This guide summarizes how to get push notifications working in your app.

```shell
curl https://api.rehive.com/3/auth/login/ \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"user": "joe@rehive.com",
       "company": "rehive",
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
        },
        "challenges": []
    }
}
```

And there you have it, a successful login! The user was validated and authenticated on the platform and an authentication `token` returned.

<aside class="warning">
    The platform login endpoint is intended for anonymous unauthenticated users and is therefore subject to strict throttling, rate limiting and bot protection rules. If you want to login a user from a "machine user" or service context you should instead use the admin authenticated login endpoint <code>/3/admin/auth/login/</code>, which requires an admin user's token to be included in the <code>Authorization</code> header.
</aside>

Usin the token returned in the login response you can perform actions, as that user, on endpoints that require authentication. For example, you may want to get a list of emails associated to a user:

```shell
curl https://api.rehive.com/3/user/emails/ \
  -X GET \
  -H "Authorization: Token {token}" \
  -H "Content-Type: application/json"
```

If you used the `token` you previously retrieved you should get a successful response containing a list of user emails:


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
