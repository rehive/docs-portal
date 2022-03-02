---
date: 2022-02-09T15:21:22+02:00
title: Multi-factor
description: Multi-factor authentication and authorization.
weight: 9
---

The platform supports multi-factor for ensuring users are authenticated and/or authorized to access their account and associated resources.

Multi factor can be configured to trigger in a wide variety of situations, which means any integration with Rehive should be designed to expect challenges at any point and deal with them when they occur.

### Resources

There are three resources you should be aware of when interacting with multi-factor authentication and authorization in the platform.

#### Authenticator rules

This resource is used to configure rules that should trigger when certain conditions are matches on a user accessing the API.

There are two types of authenticator rules:

- **authentication**: These rules are evaluated when authenticating a user (such as on login). Every company automatically includes a single `authentication` type rule. This rule is used to perform the most basic multi-factor authentication, eg. when a user login occurs, issue a challenge must be completed to access the API.
- **Authorization**: These rules are evaluated when checking a user's permission to access a resource. No `authorization` rules are configured by default.

In addition to the authenticator `type`s above, multi-factor rules can be configured to have different durabilities:

- **permanent**: A challenge issued by a permanent rule must only be completed once per login/session.
- **durable**: A challenge issued by a durable rule will last a set amount of time (configured in the `duration` field on a authenticator rule).
- **ephemeral**: A challenge issued by an ephemeral rule must be completed each time a user accesses resources with the configured permissions. The completed challenge must be submitted in the HTTP headers on the next request. This results in the challenge getting consumed.

All rules can be configured to only trigger once the user's session reaches a certain age.

When configuring `authorization` rules, a list of `permissions` is supplied. If `authorization` type multi-factor rules are configured and a user accesses a resource that requires one or more permissions configured on those rules a error response will be returned challenging them to complete a multi-factor challenge before proceeding.

#### Authenticators

The authenticator resource is how users add and manage the authenticators that they can use to complete multi-factor challenges.

There are currently three MFA authenticars supported:

- **totp**: Token one time passwords can be used with a compatible authenticator apps like Authy, Google Authenticator or 1Password.
- **sms**: SMS one time password can be used with a valid mobile number. We encourage clients to use `totp` instead as SMS if possible.
- **static**: Generates a list of one time passwords that can be used as secondary codes for recovery should a user lose access to their primary authenticator.

After creating an authenticator, it must be verifie dvia the **MFA verify** endpoint. This is simply done by submitting an `authenticator` and the verification `token` for the specific authenticator. Only verified authenticators will be used for multi factor authenticator rules.

#### Authenticator challenges

Authentication challenges are issued when an authenticator rule is triggered. Multiple challenges can be issued on a single session and all the challenges will have to be completed if the user wants to continue to access their account in the platform.

Each challenge is associated with a single session and a single rule. A challenge will also include a list of `authenticator_types` that can be used to complete/verify the challenge. This list is generated by getting the list of authenticators a user has configured and removing any that the specific authenticator rule does not support.

### Usage

Take a look at the [API Reference](https://api.rehive.com/redoc/) for the list of multi-factor endpoints.

All endpoints that contain `/mfa/` in their URL path are used to handle multi-factor functionality.

When logging in and a challenge is issued, the login response will include a list of challenges like:

```json
{
  "status": "success",
  "data": {
    "token": "{token}",
    "user": {

    },
    "challenges": [
      {
        "id": "00000000-0000-0000-0000-000000000000",
        "type": "authentication",
        "durability": "permanent",
        "authenticator_types": [
          "totp"
        ],
        "created": 1646233368264
      }
    ]
  }
}
```

When accessing an endpoint and a multi-factor challenge is required the response will look like:

```json
{
  "status": "error",
  "message": "Multi-factor authentication required.",
  "data": {
    "challenges": [
      {
        "id": "00000000-0000-0000-0000-000000000000",
        "type": "authorization",
        "durability": "permanent",
        "authenticator_types": [
          "totp"
        ],
        "created": 1646233368264
      }
    ]
  }
}
```

If a request returns a list of MFA challenges you should get the user to complete the challenges. This can be done by `POST`ing a `token` and the `challenge` ID to the MFA verify endpoint:

```shell
curl https://api.rehive.com/3/auth/mfa/verify/ \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"challenge": "00000000-0000-0000-0000-000000000000", "token": "XXXXXX"}'
```

The `token` must originate from one of the `authenticator_types` listed in the challenge response. And the `challenge` should be the ID returned on the challenge.

<aside class="notice">
When dealing with <code>ephemeral<code> challenges you will need to store the challenge ID after it is verified and then on the next request (to access the resource that triggered the challenge) include it in an HTTP header <code>Verified-Challenge: {challenge_id}</code>. This will allow the user to access the resource once. All subsequent requests to the same resource will need to be multi-factored separately.
</aside>