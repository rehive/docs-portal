---
date: 2018-09-17T15:21:22+02:00
title: Authorization
description: Authorization.
weight: 1
---

The API uses a token-based HTTP Authentication scheme.

Once a user has logged in and received a token, each subsequent request should include the token in the HTTP Authorization header. Tokens expire 10 hours after creation. Once a token has expired, login is required in order to re-authenticate.

### Authorization Header

When making requests, the API key should be included as a token in the `Authorization` header:

```json
Authorization: Token {token}
```

<aside class="notice">
	You must replace <code>{token}</code> with your API token.
</aside>
