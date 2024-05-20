---
date: 2018-09-17T15:21:22+02:00
title: Introduction
description: Introduction to auth in the platform.
weight: 1
---

The Auth component of the Rehive Platform handles authentication and authorization of users. Additionally, the auth componenent provides multi-factor authentication, password management, user verififcation, and user deactivation/deletion as well. All platform access will interact with the Auth component in some way, as most platform usage requires an authenticated user.

**In summary**: the Auth component, ensures the Platform is secure and all access is correctly verified:

- Through user registration with a password.
- Through user login with a password.
- Through multi-factor challenges.
- Through email address/mobile number verification.
- Through user deactivation and user deletion requests.

<aside class="notice">
A company is required to use the Auth component. To create a company make use of the <a href="https://dashboard.rehive.com" target="_blank">dashboard</a> or take a look at the <a href="/dashboard/get-started/introduction/" target="_blank">dashboard documentation</a>.
</aside>
