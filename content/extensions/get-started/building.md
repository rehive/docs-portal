---
date: 2018-09-17T15:21:22+02:00
title: Building
description: Building extensions.
weight: 2
---

In addition to the officially supported Rehive extensions, it is possible to build custom extensions as a third party.

For a third party integration to count as a Rehive extension it needs to adhere to a list of requirements set out by the Rehive team. These are detailed in the **Requirements** section.

Extensions and the platform communicate to each other via two primary methods:

- API calls from the extension to the platform.
- Webhook events (selected from a list of presets) originating from the platform.

This allows for complex additional logic to be built on top of the existing platform. In its simplest form, building an extension on Rehive is a process of working out how you want to use the above two methods to add extra functionality to Rehive.

<aside class="notice">
	If you have a third-party extension you would like to get approved and reviewed by Rehive please contact Rehive support.
</aside>

## How extensions work

Extensions are web services that have been designed to operate using the Rehive platform as primary source of information (whether this be for authentication, validation, data or events).

An example extension might be something like the Notification Extension (an officially supported extension in Rehive). The Notification extension has 3 elements:

1. Admin API endpoints, which admins (authenticated against the platform) can use to add and manage notifications that should be triggered by certain events in the platform.
2. An endpoint for receiving webhook events from the platform and processing them in accordance with the settings configured in the previous point.
3. End user API endpoints, which users can use to manage what notifications they want to receive.

The Notification Extension combines the two elements of platform communication: webhooks and API calls. This can be seen in the following summaries:

Firstly, when an admin user accesses the API endpoints on the notification extension, the extensions sends the users token to the platform in an API call to authorize that the user exists on the platform (and is an `admin` or `service` user). Once this is done (and the user is authorized) the extension can find the information it needs for the admin (and its company) and return a list of relevant notifications.

Secondly, when a webhook is received by the extension on its webhook endpoint, it validates the secret sent with the webhook and matches it to a company. Once this is done the extension can find relevant notifications within the extension's database and send out email, SMS and push notifications accordingly.

Thirdly, when an end user accesses the API endpoints on the notification extension
it does the same authorization check as the admin user one except now it does not ensure the user is in the `admin` or `service` group. Once authorized the extension can return a list of notification settings it has stored for that user.

## Extension users

If an extension requires access to the platform, then the extension will need to store an authentication token for a "machine user" that will make request to the platform.

Machine users are be created as part of the `service` group in the platform (called the `extension` group in the dashboard). The user can then be used internally with only the minimum permissions required to operate the extension. There should be one user per extension, and they should never be shared across multiple extensions.

Rehive provides a built in mechanism for machine users once an extension has been
listed within the platform's services list (privately or publicly). For custom extensions, that a developer does not intend to incorporate into the Rehive extensions ecosystem, permissions will have to be manually added to the extension user through the API or the dashboard. These users and integrations are outside of the domain of Rehive and will be developers responsibility.

Within the Rehive extensions ecosystem, once an extension has been approved and included in the extensions list the adding and population of permissions on extension users is automated (based on the extension configuration). This happens automatically via the activate and deactivate functionality and other functionality that is required for Rehive approved extensions.
