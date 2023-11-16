---
date: 2018-09-17T15:21:22+02:00
title: Throttling
description: Throttling.
weight: 8
---

The Rehive platform uses throttling to protect against API misuse and ensure all clients experience equal quality-of-service. Throttling errors will always be returned as a `429` response with a throttling specific error message:

```json
{
  "status": "error",
  "message": "Request was throttled: {reason}. Expected available in {time}."
}
```

The primary throttling types are listed below, but the exact details may vary as a result of Rehive adapting to changing requirements and client usage. 

- **General throttling** : Applied to endpoints that require authentication to protect against a single user overloading the API.
- **Other throttling** : Applied to some endpoints (mostly authentication related) to provide additional protections against misuse.

Across the entire Platform API, there is a global limit of **300 requests per 10 seconds**. This is applied per IP.

### General throttling

Generally, when dealing with authenticated users, throttling is applied based on the company's tier. There are 4 tiers that have different throttling rules depending on whether the request is on a `user` or `admin` section endpoint. The `restricted` tier will automatically be applied to a company if their associated billing account is unpaid. In these situations only the "owner" or original creator of the company will still be able to access the API.

New companies, and those within the trial period have a throttling type of `limited`. 

#### Sustained usage

Name | user | admin | Condition
---|---|---|---
restricted | 0/hour | 0/hour | Only the company owner can access the API.
limited | 3000/hour | 6000/hour | -
standard | 6000/hour | 12000/hour | -
extended | 12000/hour | 60000/hour | -

#### Burst usage

In addition to sustained (hourly throttles), The platform API also throttles on requests per minute. These throttles exist to protect against high burst while also allowing some flexibility during abnormally high but short request loads.

Name | user | admin | Condition
---|---|---|---
restricted | 0/min | 0/min | Only the company owner can access the API.
limited | 150/min | 200/min | -
standard | 200/min | 400/min | -
extended | 300/min | 1200/min | -

### Other throttling

The following is a list of endpoints that are throttled in other ways (on top of the general throttling):

Endpoint | method | burst | sustained | Condition
---|---|---|---
`/3/auth/login/` | POST | 6/min | 20/hour | Same user and company field.
`/3/auth/deactivate/` | POST | 4/min | 10/hour | Same user and company field.
`/3/auth/password/reset` | POST | 4/min | 10/hour | Same user and company field.
`/3/auth/email/verify/resend/` | POST | 4/min | 10/hour | Same email and company field.
`/3/auth/mobile/verify/resend/` | POST | 4/min | 10/hour | Same mobile and company field.
`/3/auth/register/` | POST | 6/min | 10/hour | Same IP
`/3/auth/company/register/` | POST | 6/min | 10/hour | Same IP
`/3/auth/mfa/authenticators/` | POST | 6/min | 10/hour | Same user
`/3/auth/mfa/deliver/` | POST MFA Challenge deliver | 6/min | 10/hour | Same user

All anonymous endpoints have a flat limit of 20 requests/min per IP.


