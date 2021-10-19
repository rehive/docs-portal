---
date: 2018-09-17T15:21:22+02:00
title: Introduction
description: Introduction to the platform.
weight: 1
---

The platform is the core component of the Rehive ecosystem. It acts as the backbone for all company, user, account and transaction management in Rehive. In addition it offers a wide set of endpoints to make it easier for developers to build transactional applications and systems.

<aside class="notice">
	The full <strong>API specification</strong> can be found <a href="https://api.rehive.com/redoc/" target="_blank">here</a>.
</aside>

<aside class="notice">
	The <strong>Swagger specification</strong> can be found <a href="https://api.rehive.com/swagger/" target="_blank">here</a>.
</aside>

### The API

The platform consists of an API organized around RESTful principles. The API uses the following HTTP methods/verbs to indicate what actions a user wants to perform when making a request on an endpoint: 

* `OPTIONS` - To retrieve the methods supported on a specific endpoint.
* `GET` - To retrieve one or more resources.
* `POST` - To create one or more resources.
* `PATCH` or `PATCH` - To update one or more resources.
* `DELETE` - To delete one or more resources.

The API accepts and returns JSON encoded request bodies and responses. Multipart form data can be used when uploading files via the API. The content type should be included in every API request using a `Content-Type` header containing either `application/json` or `multipart/form-data`.

To learn more about specific usage topics, please take a look at the **Usage** section in the sidebar.

There are **three primary sections** that a developer should be aware of when using the platform API:

#### Auth

The auth section of the platform provides endpoints for handling authentication and authorization related functionality that is common to all users within the platform. This section includes password changes/resets, multi-factor authentication, email and mobile verification, and account deactivation.

Many auth endpoints are anonymous endpoints and actions can be performed on them without authenticating. Some, however, do require a valid authentication session as they provide acess to protected information and actions (such as multi-factor setup or password changes).

Some examples of auth endpoints are:

* `/3/auth/register/` - Register a new user on an existing company.
* `/3/auth/login/` - Login as a user on a company.
* `/3/auth/logout/` - Logout of the current session (as specified by the current authentication token).
* `/3/auth/email/verify/` - Verify an email address using a token sent to the users email address.

#### User

The user section of the platform API is designed for end-users. The user endpoints only expose data and functionality that is relevant to the user as an individual (or end user) within the system. These endpoints were created to be used without any intermediary services or layers. An end-user can tap directly into them and will only be able to perform a limited set of functionality related to their user account.

The user section covers almost all resources in the platform but some examples endpoints are:

* `/3/user/` - Retrieve and modify user profile information for the current user.
* `/3/accounts/` - Retrieve a list of accounts and currency balances for the current user.
* `/3/transactions/` - Retrieve and create transactions as the current user.

#### Admin

The admin section of the platform API is designed for administrators, managers and systems that need access to either the whole or a part of the platform with a "superuser" scope. Admin access, when provided in full, gives access to the organization's full data-set (including other users and their accounts/currencies/transactions etc.). Users can be assigned to groups that have admin access (or to the superamind `admin` group), but only minimal access should be granted where possible as complete access to the admin endpoints allows user to have unlimited control of all the resources in the company.

Every resource available in the Rehive platform is accessible via the admin endpoints. Some examples are:

* `/3/admin/users/` - Retrieve a list of user profile information for all users in the company.
* `/3/admin/accounts/` - Retrieve a list of accounts and currency balances for all users in the company.
* `/3/admin/transactions/` - Retrieve and create transactions as any user in the company.

As you can see, the admin section follows a very similar structure to the user section. The only difference is that the admin endpoints provide access to all resources across the whole company.
