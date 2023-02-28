---
date: 2018-09-17T15:21:22+02:00
title: Recommendations
description: Recommendations for building extensions.
weight: 4
---

Rehive has several recommendations for building extensions that we encourage developers to follow, especially if they are seeking approval for the addition of a publicly available extension.

These recommendations should be followed alongside the [platform recommendations](/platform/get-started/recommendations/)


#### Build with multi-tenant in mind

Extensions should built to support a multi company use case, rather than only support a single company on Rehive. This will allow your extension to be used on test companies (should it be a private extension) or at a later stage be used as a public company.

To ensure an extension is not locked to a single company ensure that:

- On activation store a company relationship to the extension user (and token)
- On activation set a `secret` on the company in the extension that can be used for webhooks.
- Make all requests on the extension API only operate on the company of the user accessing the API (see above for authentication).
- Make all webhook handlers operate on the correct company data only (and verify against the `secret`).
- Never hardcore any company specific logic.


#### Use the minimum permissions required

Do not set service users to have all admin permissions unless for some reason you are actually going to use all those permissions in your service. It is best to reduce your required permissions to the minimum required to operate the extension and no more or less.


#### Use asynchronous processing for slow requests

If a request is likely to take a long time to process then prefer asynchronous processing over holding the request open indefinitely. For instance, if you need to generate an export on a very large data set, then do this as a background task instead of in the HTTP request/response cycle.

This is particularly true of the following:

- activate : The platform will timeout after 10 seconds.
- deactivate : The platform will timeout after 10 seconds.
- webhooks : The platform will timeout after 5 seconds.

When processing webhooks it is almost always better practice to receive the webhook from the platform, log it to a queue (or database) and then issue a task to handle that webhook in a separate process. This way connection errors and timeouts cannot cause as many issues and you will also have a log of the webhooks which will help with troubleshooting.
