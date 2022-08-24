---
date: 2018-09-17T15:21:22+02:00
title: Building
description: Building extensions.
weight: 2
---

In addition to the official Rehive extensions it is possible to build custom extensions. Before trying to implement an extension or any backend integration on Rehive you should spend some time reading through this page and the related [extension requirements](/extensions/get-started/requirements/) page.

## How extensions work

Extensions are web services that have been designed to operate using the Rehive platform as primary source of information (whether this be for authentication, validation, data or events).
	
Extensions and the platform communicate to each other via two primary methods:

- API calls from the extension to the platform.
- Webhook events (selected from a list of presets) originating from the platform.

This allows for complex additional logic to be built on top of the existing platform. In its simplest form, building an extension on Rehive is a process of working out how you want to use the above two methods to add extra functionality to Rehive.

We will use the Notification Extension (an officially supported extension in Rehive) as an example as it contains all the main elements of an extension that interacts with the Rehive ecosystem. The Notification extension has 3 elements:

1. Admin API endpoints, which admins (authenticated against the platform) can use to add and manage notifications that should be triggered by certain events in the platform.
2. An endpoint for receiving webhook events from the platform and processing them in accordance with the settings configured in the previous point.
3. End user API endpoints, which users can use to manage what notifications they want to receive.

The Notification Extension combines the two elements of platform communication: webhooks and API calls. This can be seen in the following summaries:

Firstly, when an admin user accesses the API endpoints on the notification extension, the extensions sends the users token to the platform in an API call to authorize that the user exists on the platform (and is an `admin` or `service` user). Once this is done (and the user is authorized) the extension can find the information it needs for the admin (and its company) and return a list of relevant notifications.

Secondly, when a webhook is received by the extension on its webhook endpoint, it validates the secret sent with the webhook and matches it to a company. Once this is done the extension can find relevant notifications within the extension's database and send out email, SMS and push notifications accordingly.

Thirdly, when an end user accesses the API endpoints on the notification extension
it does the same authorization check as the admin user one except now it does not ensure the user is in the `admin` or `service` group. Once authorized the extension can return a list of notification settings it has stored for that user.

## Extension integration

There are many ways to integrate extensions into the Rehive ecosystem. The following diagram shows how to do so using Rehive for authentication in addition to supporting a custom endpoint that provides access to resources normally only accesible to admin users:

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

## Extension users

If an extension requires access to the platform API, then the extension will need to store an authentication token for a "machine user" that will make request to the platform.

Machine users should be created as part of the `service` group in the platform (called the `extension` group in the dashboard). The user can then be used internally with only the minimum permissions required to operate the extension. There should be one user per extension (per company), and they should never be shared across multiple extensions.

Rehive provides a built in mechanism for machine users once an extension has been added to the services list (see the **Adding an extension** section below). For custom extensions, that a developer does not intend to incorporate into the Rehive extensions ecosystem, permissions will have to be manually added to the extension user through the API or the dashboard. These users and integrations are outside of the domain of Rehive and are a developer's responsibility.

## Adding an extension

By definition, extensions in Rehive, are backend integrations that meet the Rehive specified requirements that can be found [here](/extensions/get-started/requirements/). It is possible to build backend integrations "outside" of the extension ecosystem but you will lose out on some of the features implicitly available to compliant extensions:

- Activation/deactivation are handled in the same way as Rehive extensions.
- A user in the `service` group is automatically created on activation and its permissions will be managed by the platform.
- The extension is be accesible in the `/3/services/` list, via the platform API, so extension discovery can be automated in your applications.
- A `management_url` can be configured that allows admin users to "go to" the extension from within the dashboard.
- Future "built-in" functionality will become available immediately to your extensions once added: key rotation, service managed webhooks, service managed extension permissions etc.

If you have built a Rehive compliant extension then the next step will be to add your "extension" via the [/admin/services/](https://docs.platform.rehive.com/tag/Admin/#operation/admin_services_create) endpoint in the Rehive platform:

```bash
curl -X 'POST' \
  'https://api.rehive.com/3/admin/services/' \
  -H 'accept: application/json' \
  -H 'Authorization: Token {token}' \
  -H 'Content-Type: application/json' \
  -d '{
  "name": "Example extension",
  "description": "Example description",
  "tags": ["example"],
  "url": "https://example.com",
  "management_url": "https://example.com/management/"
  }'
```

The `url` should be the base URL for your extension (ie. the base URL that your `/activate/` and `/deactivate/` endpoints are available at). The `management_url` is an optional URL that can be included to specify an extenal location that can be used to manage your extension.

The next step is to add `permissions` to the extension. This can be done via [/admin/services/<id>/permissions/](https://docs.platform.rehive.com/tag/Admin#operation/admin_services_permissions_create). When an extension is activated it creates a new `service` user in the Rehive Platform and passes that user to the `/activate/` endpoint on the extension. This `service` user can then be used to make API calls to the Platform from the extension. As such, you will need to specify the individual permissions the extension requires so that the Platform can assign them to the `service` user.

Once you have completed the extension, added it to the Platform, and configured its permissions you can proceed to "activating" the extension. At this point the extension should be visible in the "Not activated" section of the extensions page on the Rehive dashboard. You can simply select the "Activate" button and if your extension was built corrctly it should create a `service` user, assign the correct permissions and invoke the `/activate/` endpoint on your extension. If no errors occur, Rehive will mark the extension as active for the company where the activation occurred.
