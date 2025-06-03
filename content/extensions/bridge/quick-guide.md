---
date: 2018-09-17T15:21:22+02:00
title: Quick guide
description: A quick guide to the Bridge extension.
weight: 2
---

The Bridge extension can be enabled via the Rehive [dashboard](https://dashboard.rehive.com). You can access the list of Rehive extensions in the side bar. Simply activate the Bridge extension to add it to the platform.

<aside class="warning">
	While it is possible to activate the extension on an existing company, we recommend selecting Bridge as the custodial layer when creating your company otherwise you may have to request help configuring your company after activating the extension.
</aside>

<aside class="notice">
	Once the extension is activated you can manage it via the dashboard or alternatively you can make use of the API directly. Do not activate the extension by calling the extension's activate endpoint directly.
</aside>

### Configuration

Ensure that you have created an account in Bridge and are fully verified/approved. Additionally make sure the following services have been enabled on your Bridge account:

- Wallets
- Virtual accounts

You should then configure the following:
- Bridge API Key - A live API Key (prefixed with `sk-live`) available in the Bridge dashboard.
- Admin User Bridge ID - An admin user in the platform to whom operational wallets should be associated with.

You should configure the above in the [Rehive Dashboard](https://dashboard.rehive.com/#/extensions/bridge/settings).

Once the above has been configured you can immediately start using Rehive via the web/mobile applications or the Platform API and the extension will automatically handle the creation/synchronization of Bridge resources.
