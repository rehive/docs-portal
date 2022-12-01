---
date: 2018-09-17T15:21:22+02:00
title: Requirements
description: Requirements for building extensions.
weight: 3
---

Custom extensions can be either **private** or **public** extensions. The requirements for these two types differ although the base requirements are the same.

## Private custom extensions

Custom extensions can be created and used by any client without a review process. Extensions added as **private extensions** have to be added on each company individually. All custom extensions created by a company start off as a "private extension".

Private custom extensions must meet the following requirements:

- Expose a public `/activate/` and `/deactivate/` endpoint.
- Not break or contravene any of the rules laid out in the Rehive Terms of Service and software licenses.
- Provide a list of permissions the extension requires.

<aside class="warning">
The Rehive ecosystem does not currently support dashboard UI's for custom extension. The only actions available via the dashboard on custom extensions are "activation" and "deactivation". Additionally a <code>management_url</code> can be specified on extensions. This field defines the URL a user will be redirected to from the Rehive dashboard when they select the "manage" button.
</aside>

## Public custom extensions

Getting an extension added to the **public extensions list** (where they will be available to all companies and other Rehive clients) requires that the extension goes through a thourough review process conducted by Rehive. This review process will ensure that the extension matches Rehive extension requirements as well as code and quality of service requirements. Please contact Rehive if you are interested in building an extension that will be available to all Rehive clients.

Public custom extensions must meet the following requirements:

- Have met the requirements for private custom extension.
- Have been reviewed and approved by the Rehive extensions team.
- Have multi-company support.
- Have terms of service, privacy policy and documentation


## Required endpoints

The following endpoints are required in every Rehive compliant extension.

#### /activate/

This endpoint will be used by the platform to send an activate message to your extension.

The activate message will include the following data:

```json
{
	"token": "<service user token>"
}
```

When an activate message is received the extension should perform any activation steps it needs in order to operate properly. The `token` can be used to perform these steps if it needs to gather any information from the platform.

At the minimum, `/activate/` should validate that the token is a real by sending the token in a `GET` request to [`https://api.rehive.com/3/auth/`](https://docs.platform.rehive.com/tag/Auth). If this returns an authentication error the extension should ignore the activation as it is not a valid user. Otherwise the extension should store an entry in its data store with the `company`, the `token` and a flag indicating the service has been activated.

Possible extra `/activate/` steps might be to add new transaction subtypes or create new webhooks on the platform. These webhooks can then be used to automatically send events from the plaform to the extension.

Should an `/activate/` throw a non 200 response, the Rehive platform will treat the activation as failed and disable the service user and token it created for that activation.

#### /deactivate/

This endpoint will be used by the platform to send a deactivate message to your extension.

The deactivate message will include the following data:

```json
{
	"token": "<service user token>",
	"purge": false
}
```

When a deactivate message is received the extension should perform any deactivation steps it needs in order to disable the extension. Normally this deactivation is a "soft disable" so that the extension can be reactivated at a later date without any issues. The `purge` field is used to indicate the level of deletion expected. If `purge` is `true` the extension should completely remove data related to the company instead of simply disabling it. A `purge` flag will only be set to `true` when a company is getting removed and purged from Rehive entirely.

## Optional endpoints

In addition to the required endpoints there are some standardized optional endpoints that Rehive recommends using if you wish to support additional functionality.

#### /webhook/

This endpoint will be used by the platform to send webhook events to the extension. There is no requirement that this be a single endpoint, however we recommend that extensions have a single port of entry for platform endpoints in order to make debugging and correct webhook handling easier.

Please review the [platform documentation](https://docs.rehive.com/platform/usage/events/) on webhooks before adding any to your extensions.

#### /rotate/

This endpoint will be used by the platform to send a "rotate token" messages to the extension. Rotate messages are used to refresh a token of an extension that supports rotating (expiring) tokens. This is a security mechanism to allow tokens to be set with shorter 8 day durations and then get refreshed every 7 days.

The rotate message will include the following data:

```json
{
	"token": "<service user token>"
}
```

The extension should check this token is a legitmate token on the platform via `https://api.rehive.com/3/auth/` and then update its token record (with the new token) for the company the token belongs to.
