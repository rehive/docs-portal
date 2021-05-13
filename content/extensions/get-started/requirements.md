---
date: 2018-09-17T15:21:22+02:00
title: Requirements
description: Requirements for building extensions.
weight: 3
---

In order for an extension to be approved and allowed by Rehive in the extensions list (for an individual company or publically available to all companies) the extension must adhere to certain requirements.

For individual company extensions, the extension must:

- Expose a public `/activate/` and `/deactivate/` endpoint.
- Not break or contravene any of the rules laid out in the Rehive Terms of Service and software licenses.
- Provide a list of permissions the extension requires.

For publically available extensions, the extension must (in addition to the above):

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

At the minium `/activate/` should validate that the token is a real by sending the token in a `GET` request to `https://api.rehive.com/3/auth/`. If this returns an authentication error the extension should ignore the activation as it is not a valid user. Otherwise the extension should store an entry in its data store with the company, the token and a flag indicating the service has been activated.

Possible extra `/activate/` steps might be to add new transaction subtypes or create new webhooks on the platform. These webhooks can then be used to atomatically send events from the plaform to the extension.

Should an `/activate/` throw any non 200 responses, the Rehive platforn will treat the activation as failed and disable the service user and token it created for that activation.

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
	There is a pending proposal to support an additional `purge` flag in the deactivate call that will instruct a extension to pruge its data.
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
