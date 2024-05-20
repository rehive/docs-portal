---
date: 2018-09-17T15:21:22+02:00
title: Users
description: Users in the platform.
weight: 2
---

Users are entities that interact with the Platform and have their own subset of data that is linked to them. Users are usually a company's customers but the managers, suppport staff, and superadmins within a company are also users. Usually users are digital identities for real people but they can also be machine users or entities that are used for operational purposes. The platform [groups](/platform/users/groups/) feature allows for thecategorization of users to better indicate their usage.

In order to authenticate using the Auth component of the Platform, a user needs to exist. When a company is registered for the first time, an owner user is automatically created. This user cannot be deleted and fulfills the role of a superadmin in the company. Additional users can be added to the company in two ways:

- [User registration](http://localhost:1313/platform/auth/authentication/) : An end-user registration flow.
- User creation : An admin only flow to create users.

Once a user is created, they can authenticate using the Platform via the login endpoint.

<aside class="notice">
	Please take a look at the <a href="https://rehive-platform.redoc.ly/tag/user" target="_blank">API reference</a> for further details on user endpoints.
</aside>

<aside class="notice">
	Please take a look at the <a href="https://rehive-platform-admin.redoc.ly/tag/users" target="_blank">API reference</a> for further details on <strong>admin</strong> user endpoints.
</aside>

Users in the Platform support a wide vaierty of customizations as well as configuration. As a representation of real life identities they are the key resource used in onboarding and the handling of KYC, information gathering and account verification.

#### TODO

- Groups
- Tiers
- Permissions
- Documents
- Addresses
- Beneficiaries (deposit and withdraw)
	- Bank accounts
	- Crypto accounts
	- Wallet accounts
- Emails
- Mobiles
- Messages
