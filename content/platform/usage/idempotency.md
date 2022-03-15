---
date: 2018-09-17T15:21:22+02:00
title: Idempotency
description: Idempotency.
weight: 6
---

The platform supports idempotency for protecting against accidentally repeating a request that should only ever take place once. By attaching an idempotency key to a request you can be sure that the platform will only process the request once and that the response will always be identical on all subsequent requests with the same key.

The platform saves the response of every request that includes an idempotency key. Subsequent requests with the same key, URL, and method will return the same response as the original request. All responses will be saved except for throttling errors that return a `429 Too Many Requests`. Requests that yield a a `429` will be treated as if they never occurred and can be retried without fear of performing the same operation more than once.

To perform an idempotent request attach an additional header: `Idempotency-Key: {key}`. Idmepotency keys are only supported on `POST`, `PUT` and `PATCH` requests. The `{key}` can be any string value but must be under 100 characters long.

```shell
curl https://api.rehive.com/3/user/ \
  -X PATCH \
  -H "Authorization: Token {token}" \
  -H "Idempotency-Key: {key}" \
  -H "Content-Type: application/json" \
  -d '{"first_name": "Joe"}' 
```

Keys will be marked as expired after 24 hours and will be eligible for complete removal from the system. Once removed, a key can be reused on fresh request (that will generate a new saved response).

Previously executed idempotent requests can be identified via the header `Idempotent-Replayed: true`.

<aside class="notice">
Idempotent requests do not work on anonymous endpoinst where no authentication token has been provided (eg. many of the URL paths beginning with <code>/auth/</code>).
</aside>
