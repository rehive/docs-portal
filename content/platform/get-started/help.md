---
date: 2018-09-17T15:21:22+02:00
title: Help
description: Help and support.
weight: 5
---

### Troubleshooting

**Why is the anonymous user login endpoint returning a `1020` error page?**

The login endpoint has strict anti-bot rules to prevent attacks on the platform. Accessing the login endpoint in a bot-like manner (cURL, Postman, outside a web browser) may trigger errors.

If this is happening in a server-side context, you should switch to the "admin authenticated" login endpoint. If this error occurs in client-side code (ie. in a web browser) then please contact [support](https://rehive.com/support) as we may need to adjust our rules accordingly.

---

**Why do image or file uploads result in a `400` or `500` error?**

The format for uploading images for files is quite strict. when uploading files the following things are required:

- The `ContentType` must be `multipart/form-data`.
- The file must be uploaded as form data and have its own `filename` and `Content-Type`.
- The file must be smaller than 5MB (5242880 bytes).

We provide [documentation](/platform/usage/uploading/) on some common ways to upload files using cURL, Javascript, or Python.

---

**Why do some of my requests return a `429` status code and an error message saying `Request was throttled. Expected available in X seconds.`?**

The platform API applies throttling to all endpoints if they are accessed too rapidly. The level of throttling varies on the endpoint and the payment plan of the company accessing it. Throttling is discussed further [here](/platform/usage/throttling/).

---

**Why is X endpoint not returning the data I expect or returning an unexpected error?**

First ensure that you are reading the error response as non `500` errors will always include information about the error. In addition, if you are working on your own custom service or client, try and make sure that the issue is caused by the API and not an error in the way you are using the API: The best way to do this is to recreate your request in cURL, postman or some other simple HTTP request tool. 

If you are still uncertain about why an endpoint is returning an unexpected response, please collect the following information before submitting it to Rehive [support](https://rehive.com/support):

1. The ID of the company where the issue is occurring.
2. The ID of the user (in the company) that is experiencing the issues. Please ensure that this user is the owner of the API token used in your API requests.
3. The API request/response information:
    * The request URL: including any arguments or parameters.
    * The request method.
    * The request body in JSON format (mask out any private info like passwords).
    * The headers (please only include the first 8 characters of the token in the Authorization header and mask out the rest)
    * The response status and body.
4. The expected outcome of the API request, should it not be obvious what the error is based on the response status and body.

### Other resources

- [Help Center](https://rehive.intercom.help/en/)
- [Support](https://rehive.com/support)
