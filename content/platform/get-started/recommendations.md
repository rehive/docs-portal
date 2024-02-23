---
date: 2018-09-17T15:21:22+02:00
title: Recommendations
description: Recommendations for building on the platform.
weight: 4
---

The recommendations detailed here will help you eliminate potential bugs, vulnerabilities or unexpected interactions with the platform. Developers should make sure they read through these before designing a system or at least before moving to a production setup.

For extension specific development you can read the recommendations [here](/building/get-started/recommendations/).


#### Perform actions as an authenticated user.

**If you are building a frontend or client-side integration never hardcode an authentication token into the application** (such as a website or mobile application). Any tokens hardcoded into an application will be accessible to all users of that application. This is particularly true of tokens that provide escalated privileges like admin tokens created in the admin dashboard.

Instead of hardcoding tokens, you should ensure that a user accessing the application is authenticated via the login endpoint on the API (which returns a token specifically for that user). The user should be re-authenticated via the application whenever their token expires and the application should only ever use tokens belonging to that specific user when accessing the API.

Alternatively if you need users to perform an action that requires escalated privileges, you should move this action into a custom backend integration that can safely store the admin token in a secure manner (not exposed to end users).


#### Authenticate all incoming requests

**If you are building a backend integration ensure that all incoming requests (even those that appear to be from Rehive) are authenticated**. There are two primary ways you can do this:

- For user authenticated requests: expect a Rehive auth token to be included in an `Authorization` header and then call the platform to see if it is a real user.
- For webhook requests: check the `secret` in the `Authorization` header. This can also be used to identify webhooks for specific companies.


#### Use a service user

**If you are building a backend integration it may be beneficial to use a service user to make requests to the Platform**. The service group is specifically designed to support machine users in the Rehive ecosystem. Using a service user provides the following benefits:

- Identify and seperate machine users from actual users.
- Control access via machine users on a per service basis.
- Configure fine-grained permissions on a per service basis.
- Prevent changes on an admin user from impacting API tokens used by machine users.

You can create and use machine users in the following ways:

- Manually create a user in the `service` group, attach permissions to that user and then generate an API token for it.
- Use the extensions ecosystem documented [here](/building/get-started/introduction/).

When manually creating machine users we recommend adding a service description to the `first_name` field and omitting the email/mobile/username fields as machine users do not need to login or receive notifications.


#### Use platform idempotency

If you are concerned about mistakenly replaying an action on the platform due to a bug or a race condition, then use [platform level idempotency](/platform/advanced-usage/idempotency/) on `POST`, `PATCH`, and `PUT` requests.


#### Consider pagination

Ensure that you take into account that most listing pages are paginated. This means that you will need to provide users (or systems) with a pagination interface if you want them to be able to see all the results.


#### Consider throttling

Platform endpoints are throttled if too many requests are executed at the same time. You should build in a manner that is resilient to throttling. The [documentation](/platform/advanced-usage/throttling/) has a section on throttling.

When building a client-side interface this should rarely be an issue as the throttling is quite forgiving, but it can occur more in backend systems where a single admin/service token is used for all the API requests.


#### Use Rehive supported SDKs

If you are working in Python or Javascript you should use one of the Rehive supported SDKs as these will make your life easier:

- [Javascript SDK](https://github.com/rehive/rehive-javascript)
- [Python SDK](https://github.com/rehive/rehive-python)


#### Handle multi-factor authentication and authorization

If you want to use multi-factor authentication and/or authorization you should ensure your implementation is compatible with the [multi-factor functionality](/platform/advanced-usage/multi-factor/) in the platform.


#### Monitor the changelog and deprecation timeline.

The changelog and to a lesser extent the deprecation timeline are updated regularly. It is a good idea to stay ahead of the curve and immediately make use of new feature or prepare for features that are getting removed soon.
