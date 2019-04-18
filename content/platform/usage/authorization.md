---
date: 2018-09-17T15:21:22+02:00
title: Authorization
description: Authorization.
weight: 1
---

The platform uses a token-based HTTP Authentication scheme.

Once a user has logged in and received a token, each subsequent request should include the token in the HTTP Authorization header. Tokens expire 10 hours after creation. Once a token has expired, login is required in order to re-authenticate.

The platform tokens allow for a single user to have multiple active tokens on separate devices as well as the ability for admin users to create tokens that do not expire.

<aside class="warning">
    For security reasons the platform API will only expose the token once on one of the following actions: on login, on token create or on register. Be sure to store it somewhere safe.
</aside>

### Authorization Header

When making requests, an API key should be included as a token in the `Authorization` header:

```json
Authorization: Token {token}
```

<aside class="notice">
	You must replace <code>{token}</code> with your API token.
</aside>
