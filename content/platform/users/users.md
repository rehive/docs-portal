---
date: 2018-09-17T15:21:22+02:00
title: Users
description: Users in the platform.
weight: 2
---

Users are entities that interact with the Platform and have their own subset of data that is linked to them. Users are usually a company's customers but the managers, suppport staff, and superadmins within a company are also users. Usually, users are digital identities for real people but they can also be machine users or entities that are used for operational purposes. The platform [groups](/platform/users/groups/) feature allows for thecategorization of users to better indicate their usage.

In order to authenticate using the Auth component of the Platform, a user needs to exist. When a company is registered for the first time, an owner user is automatically created. This user cannot be deleted and fulfills the role of a superadmin in the company. Additional users can be added to the company in two ways:

- [User registration](http://localhost:1313/platform/auth/authentication/) : An end-user registration flow.
- User creation : An admin only flow to create users.

Once a user is created, they can authenticate using the Platform via the login endpoint.

<aside class="notice">
	Please take a look at the <a href="https://api.rehive.com/?api=rehive-platform-api#tag/user/GET/3/user/" target="_blank">API reference</a> for further details on user endpoints.
</aside>

<aside class="notice">
	Please take a look at the <a href="https://api.rehive.com/?api=rehive-platform-admin-api#tag/users/GET/3/admin/users/" target="_blank">API reference</a> for further details on <strong>admin</strong> user endpoints.
</aside>
