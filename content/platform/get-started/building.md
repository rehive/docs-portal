---
date: 2018-09-17T15:21:22+02:00
title: Building
description: Building on the platform.
weight: 3
---

The Rehive ecosystem includes the option to use our white-label web and mobile wallets (Please contact support if you wish to pursue these options). However, some developers may want to build their own client side experiences or add support for additional functionality. Developing on the platform is quite straight forward but there are some interactions a developer should be aware of before proceeding.

This section of the documentation will describe some general building tips and the key ways to integrate with the Rehive platform. If you are looking for a guide aimed specifically at extension building in Rehive please take a look at the [extensions documentation](/extensions/get-started/introduction/)


### Integrating with Rehive

Integrations with Rehive generally exist in two major forms:

- **A client-side or frontend application** that interacts with the Rehive API. This is normally something like a web or mobile wallet or simply just a website.
- **A server-side or backend service** that interacts with the Rehive API. This can be a middle layer API that forwards requests to Rehive, or it could simply be a service that monitors events from Rehive and performs actions based on it.


#### Client-side

The white-label wallets provided by Rehive are an example of this sort of integration. Additionally, the admin dashboard also falls into this category.

<img src="/images/mobile.svg" alt="Mobile wallet image" width="100%">

The architecture in this case is quite simple.

1. A frontend application provides a UI through which a user can login (using the login endpoint).
2. The user submits a `user`, `password` and a `company` (the company ID can be hidden and hardcoded into the application) and if their login is successful it will return an authorization `token`.
3. Alternatively, the user may register via the register endpoint, which will also return a `token` on successful completion.
4. The `token` is then saved in a local (volatile) storage (eg. session or local storage in a browser or mobile app).
5. Subsequent requests always attach the above `token` as an `Authorization` header so that the Rehive API knows what user is making the request can can evaluate their authorization level.
6. The application can then provide access to features that request information from the Rehive API. eg. transaction creation, profile modifications, and KYC document uploads.
7. To logout,the logout endpoint can be called and the token can be erased from the local storage.


#### Server-side

Server-side integrations are a little more complex to document as they can be developed in many different ways. In most cases, server-side integrations will function similarly to the built in extensions that Rehive already offers (eg. notification extension, product extension etc.).

Server-side architecture is generally built around two concepts:

1. Providing extra functionality or actions that Rehive does not offer but where you still want to use Rehive's authorization system and API. eg. Building a payment processor integration.
2. Listening to events (webhooks) sent by the platform and triggering functionality based on the event. eg. Building a system to top up an operational account whenever a transaction event is received that shows a low balance.

These two often exist in conjunction and may depend on each other. For instance, the payment processor example may need to also listen to `transaction.execute` events in order to ensure that deposits are successfully completed on Rehive.

The **first** concept is usually implemented through an authentication layer on the backend integration that ensures that a Rehive authorization token is included in HTTP headers on requests to the API. The integration can then use the `/auth/` endpoint on Rehive to ensure it is a real user (and optionally apply extra conditions, like if the user is in the correct group).

The **second** concept can be be implemented by exposing an endpoint on a server that can receive data sent in an HTTP POST method by Rehive webhooks. A webhook event can then be set up to send data to this endpoint. A `secret` should be specified when creating the webhook and the service receiving webhooks should be configured to ignore requests that do not have the correct `secret`. Once you have received the webhook data you can then write logic to perform additional functionality as needed. In most cases it is best to perform any heavy logic in a separate process rather than causing the webhook request to hang until completion. This is because Rehive has a set timeout of 5 second and will drop the connection and retry it if a response is not received in that timeframe.

When these two concepts are combined you can build complex functionality to handle all sorts of user experiences and journeys. Complex integrations like this are called "extensions" in the Rehive ecosystem and more detailed documentation can be found [here](/extensions/get-started/building/) if you want to learn more about building extensions in a Rehive compliant manner.