---
date: 2018-09-17T15:21:22+02:00
title: Help
description: Help and support.
weight: 5
---

## Troubleshooting

**Q:** The anonymous user login endpoint is returning a 1020 error page.

**A:** The login endpoint has strict anti-bot rules to prevent attacks on the platform. Accessing the login endpoint in a bot-like manner (cURL, Postman, outside a web browser) may trigger errors.

If this is happening in a server-side context, you should switch to the "admin authenticated" login endpoint. If this error occurs in client-side code (ie. in a web browser) then please contact [support](https://rehive.com/support) as we may need to adjust our rules accordingly.

---

**Q:** Uploading images or files is resulting in a 400 or 500 error.

**A:** The format for uploading images for files is quite strict. when uploading files the following things are required:

- The `ContentType` must be `multipart/form-data`.
- The file must be uploaded as form data and have its own `filename` and `Content-Type`.
- The file must be smaller than 5MB (5242880 bytes).

We provide [documentation](/platform/usage/uploading/) on some common ways to upload files using cURL, Javascript, or Python.

---

**Q:** Some of my requests are returning a `429` status and an error message saying `Request was throttled. Expected available in X seconds.`.

**A:** The platform API applies throttling to all endpoints if they are accessed too rapidly. The level of throttling varies on the endpoint and the payment plan of the company accessing it. Throttling is discussed further [here](/platform/usage/throttling/).


## Other resources

- [Help Center](https://rehive.intercom.help/en/)
- [Support](https://rehive.com/support)
