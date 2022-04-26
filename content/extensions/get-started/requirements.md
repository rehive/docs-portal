---
date: 2018-09-17T15:21:22+02:00
title: Requirements
description: Requirements for building extensions.
weight: 3
---

Custom extensions can be created and used by any client without a review process as an extension is simply another word for a backend system integration. However, in order to have a better experience with custom extensions, clients may wish to add their extenion to a company as a **private extension** (it will only be available in each company that it is explicitly added to). The advantages of adding an extension to a company are:

- Activation/deactivation will be handled like built-in extensions.
- A user in the `service` group will be automatically created and its permissions will be managed by the platform.
- The extension will be accesible in the `/3/services` list, via the platform API, so extension discovery can be automated in your applications.
- Future "built-in" functionality will become available immediately to your extensions once added: key rotation, service managed webhooks, service managed extension permissions etc.

On the other hand, getting an extension added to the **public extensions list** (where they will be available to all companies and other Rehive clients) requires that the extensions and its codebase go through a review process conducted by Rehive. This review process will ensure that the extension matches Rehive extension requirements as well as code and quality of service requirements. Please contact Rehive if you are interested in building an extension that will be available to all Rehive clients.

<aside class="warning">
The dashboard and Rehive ecosystem do not currently support custom UI's for extensions created by non-Rehive developers. This means that the only features available in the dashboard for custom extensions added to the extensions list will be "activation" and "deactivation".
</aside>

For **private extensions**, the extension must:

- Expose a public `/activate/` and `/deactivate/` endpoint.
- Not break or contravene any of the rules laid out in the Rehive Terms of Service and software licenses.
- Provide a list of permissions the extension requires.

For **public extensions**, the extension must (in addition to the above):

- Have been reviewed and approved by the Rehive extensions team.
- Have multi-company support.
- Have terms of service, privacy policy and documentation

## Required endpoints

#### /activate/

This endpoint will be used by the platform to send an activate message to your extension.

The activate message will include the following data:

```json
{
	"token": "<service user token>"
}
```

When an activate message is received the extension can perform any activation steps it needs in order to operate properly. The `token` can be used to perform these steps if it needs to gather any information from the platform.

At the minimum, `/activate/` should validate that the token is a real by sending the token in a `GET` request to `https://api.rehive.com/3/auth/`. If this returns an authentication error the extension should ignore the activation as it is not a valid user. Otherwise the extension should store an entry in its data store with the company, the token and a flag indicating the service has been activated.

Possible extra `/activate/` steps might be to add new transaction subtypes or create new webhooks on the platform. These webhooks can then be used to automatically send events from the plaform to the extension.

Should an `/activate/` throw any non 200 responses, the Rehive platform will treat the activation as failed and disable the service user and token it created for that activation.

#### /deactivate/

This endpoint will be used by the platform to send a deactivate message to your extension.

The deactivate message will include the following data:

```json
{
	"token": "<service user token>"
}
```

When an deactivate message is received the extension can perform any deactivation steps it needs in order to disable the extension. Normally this deactivation is a "soft disable" so that the extension can be reactivated at a later date without any issues.

<aside class="notice">
	There is a pending proposal to support an additional `purge` flag in the deactivate call that will instruct a extension to purge its data.
</aside>

## Optional endpoints

In addition to the required endpoints there are some standardized optional endpoints that Rehive recommends using if you wish to support additional functionality.

#### /webhook/

This endpoint will be used by the platform to send webhook events to the extension. There is no requirement that this be a single endpoint, however we recommend that extensions have a single port of entry for platform endpoints in order to make debugging and correct webhook handling easier.

Please review the [platform documentation](https://docs.rehive.com/platform/usage/events/) on webhooks before adding any to your extensions.

#### /rotate/

This endpoint will be used by the platform to send a rotate messages to the extension. Rotate messages are used to refresh a token of an extension that supports rotating (expiring) tokens. This is a security mechanism to allow tokens to be set with shorter 8 day durations and then get refreshed every 7 days.

The rotate message will include the following data:

```json
{
	"token": "<service user token>"
}
```

The extension should check this token is a legitmate token on the platform via `https://api.rehive.com/3/auth/` and then update its token record (with the new token) for the company the token belongs to.
