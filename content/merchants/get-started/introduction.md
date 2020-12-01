---
date: 2018-09-17T15:21:22+02:00
title: Introduction
description: Introduction to the platform.
weight: 1
---

The Merchant API allows you to integrate the Rehive wallet into your existing checkout flow.

### The API

The API is organized around RESTful principles. There are 2 primary sections to the merchant API:

#### Auth

The auth section of the platform provides endpoints for handling authentication and other authorization related functions that are common to all users within the platform.

Authentication endpoints do not require any specific permissions nor are they limited by any other access control.

Some example endpoints are:

* `/3/auth/register/`
* `/3/auth/login/`
* `/3/auth/logout/`

#### User

The user section of the platform API is designed for end-users. This set of endpoints only exposes a data set that is  relevant to the user as an individual within the system. These endpoints can be exposed to end-users and were created to be used without any intermediary services or layers.

Some examples endpoints are:

* `/3/user/`
* `/3/accounts/`
* `/3/transactions/`