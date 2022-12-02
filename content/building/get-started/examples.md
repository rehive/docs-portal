---
date: 2018-09-17T15:21:22+02:00
title: Examples and resources
description: Examples and resources for building extensions.
weight: 5
---

Rehive has several resources and examples you can use when developing extensions.

Our **base extension framework** is publicly available here:

https://github.com/rehive/service-framework

We advise using this as a starting point if you are happy working with Python and Django. If you intend using another language or framework you can still use the above as "conceptual" guide. This example includes the minimum requirements to support a Rehive approved multi-company extension.

There is also a **simplified demo** written in Flask to show how webhooks can be used to power an extension:

https://github.com/rehive/python-service-demo


## Example integration

There are many ways to integrate with the Rehive ecosystem. The following diagram shows how to do so using Rehive for authentication in addition to supporting a custom endpoint that provides access to resources normally only accesible to admin users:

<img src="/images/integrations.svg" alt="Dashboard image" width="100%">

The flow above is stateless (REST), which is recomended when building web APIs. A detailed breakdown can be found below:

##### A. Call the login endpoint

eg. `https://api.rehive.com/3/auth/login/`

**Call the rehive login endpoint from within the client-side web or mobile app.**.

If the login attempt is successful it will return a token that can be used for subsequent requests to Rehive.

The client should save the token to session or local storage so that all future requests can use it for authorization.

##### B. Call an endpoint on the custom extension

eg. `https://custom.extension.domain/custom/transactions/`

**From the client-side call a custom endpoint on the custom extension or integration.**

Include an `Authorization` token in the headers so that the extension can use it to authorize the user.

##### C. Call the authorization endpoint

eg. `https://api.rehive.com/3/auth/`

**When the extension receives requests it can  grab the `Authorization` header value and forward it to the authorization endpoint on Rehive.**

If Rehive matches the `Authorization` token to a real user it will return successfully and the custom extension can continue processing the request as the user is now authorized to continue.

If Rehive cannot find a user for that token it will instead return an error and the custom extension should also stop processing immediately as the user is not authorized to continue.

The custom extension may also want to perform additional authorization (like ensuring the user is in a certain group or matching it against some other custom rules).

##### D. Call an admin endpoint

eg. `https://api.rehive.com/3/admin/transactions/`

**Once the user is authorized, the custom extension can make admin API calls to the platform to get permission-restricted data that is normally only available to users with admin permissions.**

For example, if the custom extension needs to get a list of all transactions from all users it can call the Rehive admin transactions endpoint.

A separate `Authorization` token (that is associated to a user who has the required permissions) should be attached to these admin API requests. For instance a user in the service group that is configured to view transactions.

The admin token can be stored on the custom extension server (as an env variable is probably best). It should never be returned to the client in any way or exposed through any interface to end-users.
