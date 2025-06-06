---
date: 2018-09-17T15:21:22+02:00
title: Access control
description: Access control in the platform.
weight: 4
---

Access control rules are a simple way to deny/allow API requests from HTTP clients based on their IP. This can be useful if you need to block access to certain IPs or alternatively ensure access is limited to only certain IPs. For instance:

- If you have machine users (API-only users) that should always originate from a specific IP.
- If you have an office VPN or network that all request (related to a specific user group) should originate from.

The access control rules can be applied globally, to specific user groups, or even individual users. They can be configured via the dashboard or through the API for programmatic configurations.

<aside class="notice">
	Please take a look at the <a href="https://api.rehive.com/?api=rehive-platform-admin-api#tag/access-control-rules" target="_blank">API reference</a> for further details on the access control endpoints.
</aside>

<aside class="notice">
	The access control rules are generally not appropriate for addressing bad actors (particularly botnets and other typical attack vectors). If you are experiencing excessive malicious activity, please contact the Rehive team so that we can provide more effective assistance.
</aside>

### Prioritization

When more than one access control rule is configured, they will be applied in a strict hierarchy. The system prioritizes rules based on their type, action, and their specificity. Below is an outline of how this works, with the highest priority rules positions lower in order.

1. `deny` on `*`
2. `allow` on `*`
3. `deny` on an explicit IP
4. `allow` on an explicit IP
5. `deny` on `*` on a specific group
6. `allow` on `*` on a specific group
7. `deny` on an explicit IP on a specific group
8. `allow` on an explicit IP on a specific group
9. `deny` on `*` on a specific user
10. `allow` on `*` on a specific user
11. `deny` on an explicit IP on a specific user
12. `allow` on an explicit IP on a specific user

As can be seen above, `allow` rules will always trump `deny` rules of the same action and specificity. Additionally, the more specific the rule becomes the higher its priority.

As an example, if the following rules are configured:

- `deny` on `*` on the group `merchant`.
- `allow` on `*` on the user `example@rehive.com`.
- `deny` on `127.0.0.1` on the user `example@rehive.com`.

If an `example@rehive.com` user makes a request to the API via the IP `127.0.0.1` they will be denied access (due to the final rule). However, if that same user accesses it on any other IP they will be allowed access (due to the 2nd rule). And if any other user in the `merchant` group tries to access the API, they will be denied (due to the first rule).

### Extensions

If you have implemented a custom extension, you may need to forward origin IPs through to the Platform API (when authenticating a user's token). Depending on your access control configuration, not making this change may result in requests to your extension getting blocked as the origin IP received by the Platform API will be your server IP rather than the user's IP.

To prevent issues, you simply need to add a header to your Platform API requests:

- `X-Forwarded-For: {ip}`, where the `ip` should be the origin IP belonging to the user who called your extension.

This will ensure that access control rules are applied "as if" the original user was making the API call.

### Limitations

There are some limitations to the access control rules:

- They currently only apply to "authenticated" requests (ie. they do not apply to login, register, or other unauthenticated requests).
- They currently cannot be configured to apply to IP ranges.
