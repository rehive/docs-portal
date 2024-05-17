---
date: 2018-09-17T15:21:22+02:00
title: Authorization
description: Authorization in the platform.
weight: 3
---

The platform uses a token-based HTTP Authentication scheme. A token is required to access API endpoints that require an authenticated user. Each token can be seen as a representation of a user session in the system. They are unique and private identifiers and should never be exposed to anyone besides their owners as they provide full access to a user's account (and all Rehive features they have access to).

<aside class="notice">
    For security reasons the platform API will only expose the token once on one of the following actions: on login, on token create or on register. Be sure to store it somewhere safe.
</aside>

Once a user has logged in and received a token, each subsequent request should include the token in the HTTP Authorization header. Tokens expire 10 hours after creation unless a custom session duration is set. Once a token has expired, the user will need to re-authenticate via the login endpoint to create a new token.

Multiple active tokens (sessions) can exist for a single user. This means that a user can be logged into multiple devices (or applications) simultaneously. If multi-factor authentication is enabled for a user, the token will be unusable until all multi-factor challenges are completed successfully.

<aside class="warning">
<p><b>Important:</b> Please be aware that you should never hardcode a token into a frontend or client-side application (such as a website or mobile application). Any tokens hardcoded into an application will be accessible to all users of that application. This is particularly true of tokens that provide escalated privileges like admin tokens created in the admin dashboard.</p>
<p>Instead of hardcoding tokens, you should ensure that a user accessing the application is authenticated via the login endpoint on the API (which returns a token specifically for that user). Alternatively if you need users to perform an action that requires escalated privileges, you should move this action into a custom  backend integration that can safely store the admin token in a secure manner (not exposed to end users).</p>
</aside>

### Authentication

The **Platform API** provides an **anonymous user login** endpoint that can be used to authenticate a user:

- `/3/auth/login/`

This endpoint is only intended for use in client-side code and is best used in a browser-like context due to the additional protections applied to it. These protections include severe anti-bot rules that may make it difficult to use the endpoint in a server-side context where it can be hard to distinguish between automated access and malicious actors.

In addition, in order to bypass the above bot protections, Rehive includes an **admin authenticated login** endpoint in the **Platform Admin API**. The admin authenticated endpoint is intended for use in a machine-user context such as on a backend server where you can safely store an API token with admin access.

- `/3/admin/auth/login/`

When invoking the "admin authenticated" login endpoint, an `Authorization` header (discussed below) containing an API token must be included in the request. The API token should belong to an admin user or a user with at least the "Admin User Add" permision. By including an API token belonging to a user with admin access the request can bypass the anonymous user protections that would normally trigger firewall rules.

<aside class="notice">
If you experience any issues on the <b>anonymous user login</b> in a client-side context where you expect it to not block your request, please contact Rehive <a href="https://rehive.com/support" target="_blank">support</a> for assistance.<br/>

Keep in mind that commonly used testing tools like cURL and Postman may be blocked on the anonymous user login endpoint as Rehive cannot always distinguish between these tools and malicious actors.
</aside>

### Authorization header

When making API requests, an API token should be included in the `Authorization` header:

```
Authorization: Token {token}
```

<aside class="notice">
	You must replace <code>{token}</code> with your API token.
</aside>

<aside class="warning">
    Ensure that you understand how <a href="/platform/advanced-usage/multi-factor/" target="_blank">multi-factor authentication and authorization</a> impact platform usage.
</aside>
