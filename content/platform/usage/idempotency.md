---
date: 2018-09-17T15:21:22+02:00
title: Idempotency
description: Idempotency.
weight: 5
---

The platform supports idempotent requests for ensuring the same operations never occur twice.

To perform an idempotent request, attach a unique key to any `POST`, `PUT` or `PATCH` request made to the API. This can be done using the `Idempotency-Key: {key}` header:

```shell
curl {url} \
  -X GET \
  -H "Idempotency-Key: {key}" \
  -H "Authorization: Token {token}" \
  -H "Content-Type: application/json"
```

API requests made with a new key will get saved along with their HTTP response. Follow up requests made with the same key will always return the same response (As long as the request has the same HTTP method and URL path). The keys (and their associated saved responses) expire after 24 hours.

Previously executed idmepotent requests can be identified via the header `Idempotent-Replayed: true`.

<aside class="notice">
Idempotent requests will not work on endpoints that allow anonymous user access (eg. many URL paths beginning with <code>/auth/</code>).
</aside>
