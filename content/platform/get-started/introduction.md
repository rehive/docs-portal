---
title: Introduction
weight: 1
---

The Rehive platform is the core of the Rehive ecosystem. It acts as the backbone for company, user, account and transaction management in Rehive. In addition it offers a wide set of endpoints to make it easier for developers to implement transactional applications and systems.

### The API

The platform consists of an API organized around RESTful principles.

JSON is returned by all API responses. API errors will result in a JSON response as well as a corresponding HTTP response code (eg. `400`, `404`, `500`).

There are 3 primary sections to the Rehive platform API: `auth`, `user`, and `admin`.

#### Auth

The auth section of the platform provides endpoints for handling authentication and other authorization related functions that are common to all users within Rehive.

Authentication endpoints do not require any specific permissions nor are they limited by any other access control.

Some example endpoints are:

* `/3/auth/register/`
* `/3/auth/login/`
* `/3/auth/logout/`

#### User

The user section of the platform API is designed for end-users. This set of endpoints only exposes a data set that is  relevant to the user as an individual within the system.

The user section covers almost all resource types but some examples endpoints are:

* `/3/user/`
* `/3/accounts/`
* `/3/transactions/`

#### Admin

The admin section of the platform API is designed for administrators, managers and systems that need access to either part or the whole of the "superuser" platform scope. Admin access, when provided in full, gives access to the organization's full data-set (including other users and their accounts/currencies/transactions etc.)

Every resource available in Rehive is accessbly via the admin endpoints. Some examples are:

* `/3/admin/users/`
* `/3/admin/accounts/`
* `/3/admin/transactions/`

As you can see, the admin section follows a very similar structure to the user section. The only difference is that the admin endpoints provide access to all resources across the whole organization.