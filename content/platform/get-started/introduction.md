---
date: 2018-09-17T15:21:22+02:00
title: Introduction
description: Introduction to the platform.
weight: 1
---

The platform is the core component of the Rehive ecosystem. It acts as the backbone for all company, user, account and transaction management in Rehive. In addition, it offers a wide set of endpoints to make it easier for developers to build transactional applications and systems.

The platform cosists of two APIs: The **Platform API** and the **Platform Admin API**.

### Platform API

<aside class="notice">
	The <strong>API specification</strong> can be found <a href="https://rehive-platform.redoc.ly" target="_blank">here</a>.
</aside>

<aside class="notice">
	The <strong>Swagger specification</strong> can be found <a href="https://api.rehive.com/swagger/" target="_blank">here</a>.
</aside>

The **Platform API** is the core API. It provides authentication for platform users as well as access to user-scoped resources. All user authentication is handled via this API and the resources accessible through it are always limited to the specific user's resources. This API was designed to be used without any intermediary services or layers.

Within the **Platform API** there are **auth** endpoints that must be used for all platform authentication/authorization. These endpoints are used by users to register or login and retrieve a token for API access. These tokens are used in both the **Platform API** and the **Platform Admin API**.

Many **auth** endpoints are anonymous endpoints and actions can be performed on them without authentication token (such as login or register). Others, require a valid authentication token as they provide acess to protected information and actions (such as changing passwords, managing MFA, and listing authentication tokens).

### Platform Admin API

<aside class="notice">
	The <strong>API specification</strong> can be found <a href="https://rehive-platform-admin.redoc.ly" target="_blank">here</a>.
</aside>

<aside class="notice">
	The <strong>Swagger specification</strong> can be found <a href="https://api.rehive.com/admin/swagger/" target="_blank">here</a>.
</aside>

The **Platform Admin API** is the management API. It is designed for administrators, managers, machine users and systems that need access to either the whole or a part of the platform with a "superuser" scope. This API provides access to an organizations entire data set across all resources.

To access the **Platform Admin API** a user will have to first authenticate via the **Platform API**. Once this is done, the resulting authentication token can be used on both the core API and the admin API.

Users can be assigned to groups that have admin access (or to the superadmin `admin` group) or alternatively they can be assigned individual admin permissions on specific resources. We recommend that organizations limit access to the admin API to the minimum permissions required for a user to perform within their role.

### General API details

Both of the Platform APIs are organized around RESTful principles. The APIs use the following HTTP methods/verbs to indicate what actions a user wants to perform when making a request on an endpoint:

* `OPTIONS` - To retrieve the methods supported on a specific endpoint.
* `GET` - To retrieve one or more resources.
* `POST` - To create one or more resources.
* `PATCH` or `PUT` - To update one or more resources.
* `DELETE` - To delete one or more resources.

All endpoints accept and return JSON encoded request bodies and responses. Multipart form data can be used when uploading files via the APIs. A content type should be included in every API request using a `Content-Type` header containing either `application/json` or `multipart/form-data` (when uploading files).

To learn more about specific usage topics, please take a look at the **Usage** section in the sidebar.
