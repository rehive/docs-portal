---
date: 2018-09-17T15:21:22+02:00
title: Introduction
description: Building extensions.
weight: 1
---

In addition to the official Rehive Extensions, it is possible to build custom extensions. Before trying to implement an extension or any backend integration on Rehive you should spend some time reading through this page and the related [Extension requirements](/building/get-started/requirements/) page.

### Support and enablement

The [Account Manager expectations](https://rehive.intercom.help/en/collections/2091533-unpacking-rehive-services) articles outline which support is available from Rehive when building a custom extension. Whether or not you are on a subscription plan that includes an account manager:

* You must verify that your chosen 3rd party provider has support for the common endpoints for the integration requirements.
* You must consider how data is stored and linked to users in your extension.
* You should familiarize yourself with the [Rehive Help Center](https://rehive.intercom.help/en/). 
* Rehive may offer a call to go over the flows if documentation is not sufficient or to identify variances. The banking partner should be included as a specialist.
* Rehive does not provide codebase-level reviews for custom extensions.
* Support will be provided if any Rehive endpoints are not working - please take note of the [guidelines](https://rehive.intercom.help/en/articles/6229420-reporting-a-technical-support-issue) for reporting technical issues.

## How extensions work

Extensions are web services that have been designed to operate using the Rehive platform as primary source of information (whether this be for authentication, validation, data or events).
	
Extensions and the platform communicate to each other via two primary methods:

- API calls from the extension to the platform.
- Webhook events (selected from a list of presets) originating from the platform.

This allows for complex additional logic to be built on top of the existing platform. In its simplest form, building an extension on Rehive is a process of working out how you want to use the above two methods to add extra functionality to Rehive.

We will use the Notification Extension (an officially supported extension in Rehive) as an example as it contains all the elements of an extension that interacts with the Rehive ecosystem. The Notification extension has 3 elements:

1. Admin API endpoints, which admins (authenticated against the platform) can use to add and manage notifications that should be triggered by certain events in the platform. These are endpoints starting with `/admin/` and are listed under the "Admin" sections in the specification documentation, for example the [Notification Extension admin endpoints](https://notification.services.rehive.io/#tag/admin)
2. An endpoint for receiving webhook events from the platform and processing them in accordance with the settings configured in the previous point.
3. End-user API endpoints, which users can use to manage what notifications they want to receive.

The Notification Extension combines the two elements of platform communication: webhooks and API calls. This can be seen below:

Firstly, when an admin user accesses the API endpoints on the notification extension, the extension sends the user's token to the platform in an API call to authorize that the user exists on the Platform (and is an `admin` or `service` user). Once this is done (and the user is authorized) the extension can find the information it needs for the admin (and its company) and return a list of relevant notifications. For more information on service users (also referred to as extension users), see the **Extentsion users** section.

Secondly, when a webhook is received by the extension on its webhook endpoint, it validates the secret sent with the webhook and matches it to a company. Once this is done the extension can find relevant notifications within the extension's database and send out email, SMS and push notifications accordingly.

Thirdly, when an end user accesses the API endpoints on the notification extension
it does the same authorization check as the admin user one except now it does not ensure the user is in the `admin` or `service` group. Once authorized the extension can return a list of notification settings it has stored for that user.

## Extension users

If an extension requires access to the platform API, then the extension will need to store an authentication token for a "machine user" that will make requests to the platform.

Machine users should be created as part of the `service` group in the platform (called the `extension` group in the dashboard). The user can then be used internally with only the minimum permissions required to operate the extension. There should be one user per extension (per company), and they should never be shared across multiple extensions.

Rehive provides a built-in mechanism for machine users once an extension has been added to a companies extensions list (see the **Adding an extension** section below). For custom integrations, that a developer does not intend to incorporate into the Rehive extensions ecosystem, permissions will have to be manually added to the service user through the API or the dashboard. These users and integrations are outside of the domain of Rehive and are a developer's responsibility.

## Adding an extension

By definition, extensions in Rehive, are backend integrations that meet the Rehive requirements that can be found [here](/extensions/get-started/requirements/). It is possible to build backend integrations "outside" of the extension ecosystem but you will lose out on some of the features implicitly available to compliant extensions. If you build in a Rehive compliant manner you will benefit from the following:

- Activation/deactivation will be handled in the same way as Rehive extensions.
- A user in the `service` group will be automatically created on activation and its permissions will be managed by the platform.
- The extension will be accesible via the Platform API, which allows for easy extension discovery in your applications.
- A `management_url` can be configured that allows admin users to "go to" the extension from within the dashboard.
- Future "built-in" functionality will become available immediately to your extensions once added: key rotation, service managed webhooks, service managed extension permissions etc.

If you have implemented a Rehive compliant extension then you can add it to Rehive via the [dashboard](https://dashboard.rehive.com). The dashboard provides an interface for adding custom extenions under Extensions -> Add custom extension.

Once you have implemented an extension, added it to the Platform, and configured its permissions you can "activate" it. At this point the extension should be visible in the "Not activated" section of the extensions page on the Rehive dashboard. You can simply select the "Activate" button and if your extension was built corrctly it should create a `service` user, assign the correct permissions and invoke the `/activate/` endpoint on your extension. If no errors occur, Rehive will mark the extension as active for the company where the activation occurred.
