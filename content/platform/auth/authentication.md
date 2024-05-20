---
date: 2018-09-17T15:21:22+02:00
title: Authentication
description: Authentication in the platform.
weight: 2
---

Authentication is the method by which the platform assigns an identity to a user as well as ensures that a given party has access to that user. In general, this refers to:

- The enrollment of new users via **registration**.
- The verification of access via **login**.
- The verification of ongoing access (after login) via **authentication tokens**.


### Registration

Enrolling new users within a company on the Platform is done using the registration flow. The registration flow requires the submission of four things:

- A unique identifier (such as an email address).
- A company identifier.
- A password : This is used on subsequent logins to grant access to the user.
- Acceptance of the terms & conditions and privacy policy.

Additional data can be submitted to further identify the user (first name, last name, nationality etc.) or specify the group the user should be registered to. Specifying a specific group allows for newly registered users to be immediately assigned to a group that applies the required rules, settings, and tier requirements.

<aside class="notice">
	To read more about <strong>groups</strong> please take a look at the <a href="/platform/users/groups/" target="_blank">groups documentation</a>.
</aside>

During registration, a user will have to submit a unique identifier. The unique identifiers supported in the platform are:

- Email addresses
- Mobile numbers
- Usernames

<aside class="notice">
	Usually, only a single "concrete" user will be associated with a unique identifier. However, it is possible for an email address or mobile number to be shared between two users if one of those users is flagged as a `temporary` user. Temporary users are "holding users" for transfers to a user identifier that has not been verified yet. Once the real user has verified the required email address or mobile number, the temporary user will be merged into their account.
</aside>

During registration, all users in a company will be assigned a unique Platform `id`. This `id` is immutable and can be used to uniquely identify a user in the Platform for as long as the company exists. It is safe to use this `id` in your own services or extensions to identify individual users in the platform.

<aside class="notice">
	Please take a look at the <a href="https://rehive-platform.redoc.ly/tag/auth#operation/auth_register" target="_blank">API reference</a> for further details on the registration endpoint and its supported fields.
</aside>

The primary register endpoint is only intended for use in client-side code due to the additional protections applied to it. The platform includes an alternative [admin authenticated register](https://rehive-platform-admin.redoc.ly/tag/auth#operation/auth_register_create) endpoint that can be used in machine-user contexts such as on a backend server where you can safely store an authentication token with admin access.

### Login

A user can verify their identity (and access to) a user via the login flow. The login flow requires the submission of three things:

- A unique identifier (such as an email address).
- A company identifier.
- A password : As specified when the user registered.

If a successful response is returned on login, it indicates that the correct credentials were supplied and the user will be provided with access to the account (via an authentication token). Depending on whether the user has multi-factor authentication configured, they may be required to perform extra challenge verification before continuing to use the platform.

<aside class="notice">
	Please take a look at the <a href="https://rehive-platform.redoc.ly/tag/auth#operation/auth_login" target="_blank">API reference</a> for further details on the login endpoint and its supported fields.
</aside>

The primary login endpoint is only intended for use in client-side code due to the additional protections applied to it. The platform includes an alternative [admin authenticated login](https://rehive-platform-admin.redoc.ly/tag/auth#operation/auth_login_create) endpoint that can be used in machine-user contexts such as on a backend server where you can safely store an authentication token with admin access.

### Authentication tokens

Whenever a user successfully registers or logins to the Platform, the API will return an authentication token. This token is important as it is required for any subsequent actions the user performs. Without this token, the user will be unable to perform any actions on their account.

<aside class="notice">
    Authentication tokens are 64 character strings. They are only returned once and must be saved or stored for as long as you need to perform actions as an authenticated user.
</aside>

<aside class="warning">
	Authentication tokens are unique and private identifiers and should never be exposed to anyone besides their owners as they provide full access to a user's account (and all Rehive features they have access to).
</aside>

Authentication tokens expire 10 hours after creation unless a custom session duration is set. Once a token has expired, the user will need to re-authenticate via the login endpoint to create a new token.

Multiple active tokens (sessions) can exist for a single user. This means that a user can be logged into multiple devices (or applications) simultaneously. If multi-factor authentication is enabled for a user, the token will be unusable until all multi-factor challenges are completed successfully.

<aside class="warning">
	<p><b>Important:</b> Please be aware that you should never hardcode a token into a frontend or client-side application (such as a website or mobile application). Any tokens hardcoded into an application will be accessible to all users of that application. This is particularly true of tokens that provide escalated privileges like admin tokens created in the admin dashboard.</p>
	<p>Instead of hardcoding tokens, you should ensure that a user accessing the application is authenticated via the login endpoint on the API (which returns a token specifically for that user). Alternatively if you need users to perform an action that requires escalated privileges, you should move this action into a custom  backend integration that can safely store the admin token in a secure manner (not exposed to end users).</p>
</aside>
