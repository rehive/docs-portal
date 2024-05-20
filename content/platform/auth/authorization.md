---
date: 2018-09-17T15:21:22+02:00
title: Authorization
description: Authorization in the platform.
weight: 3
---

Authorization in the Platform, is the process of verifying whether a user has access to an action or resource in the Platform.

Once a user has [authenticated](/platform/auth/authentication/) and received a authentication token, each subsequent request in the Platform must include that token. The token proves the user is authenticated and allows the platform to figure out whether the user has the necessary permissions to perform actions.

The platform uses a token-based HTTP Authentication scheme. This means that the authentication token must be sent in the `Authorization` header in the following format:

```shell
Authorization: Token {token}
```

<aside class="notice">
	You must replace <code>{token}</code> with your API token.
</aside>

An example of attaching the `Authorization` in a cURL request can be found below:

```shell
curl https://api.rehive.com/3/user/ \
     -X GET \
     -H "Authorization: Token {token}" \
     -H "Content-Type: application/json"
```

If the credentials provided in the `Authorization` header are invalid or the header is missing entirely on an endpoint that requires it, the Platform will return a `401` error.

### Authorization and permissions

During authorization of a request, in addition to checking whether a user has authenticated, the Platform checks the permissions of the user in respect to the permissions required by the action they are trying to perform.

Permissions are discussed in detail [here](/platform/users/permissions/), but it is important to know that the authorization step may block a request if a user does not have adequate permissions to perform the requested action.

When a permission error occurs, the Platform will return a `403` error.

### Authorizarion and multi-factor

Multi-factor checks also occur during each request's authorization. If a user is required to verify a multi-factor challenge, then the Platform will indicate the required challenges and block the user from proceeding.

It is important to understand that a request can be challenged for multi-factor verification during both authentication (login) and authorization of each individual request. Multi-factor and its implementation are dicussed in detail [here](/platform/auth/multi-factor/).
