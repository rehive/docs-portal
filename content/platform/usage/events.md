---
date: 2018-09-17T15:21:22+02:00
title: Events
description: Events.
weight: 7
---

The platform has a collection of internal events that can be configured to trigger webhooks.

Webhooks should always be created with a secure `secret` key. The secret is sent in the Authorization header of the webhook request. When receiving webhooks the `secret` should always be validated to ensure the webhook originated from the platform. Additionally, platform webhooks will always originate from the following IP: **34.91.230.165**. This IP can be used to further validate that a webhook event originated from Rehive.

The platform expects a `200 OK` HTTP response when webhooks are called. If a 200 response is not returned, the platform will retry the webhook up to 7 times with a gradually increasing delay between each retry.

Every webhook includes a body containing a JSON object.

```json
{
    "id": 1,
    "event": "event.name",
    "company": "company_id",
    "data": {

    }
}
```

The attributes in the above object are described below:

Attribute | Description
--- | ---
id | The unique id of the request. This id is shared between retries of the same request.
event | The event that triggered the webhook.
company | The company identifier.
data | The event data.

The following headers will be included on all events:

Header | Value
--- | ---
Authorization | `Secret {secret}`
User-Agent | `rehive-platform/{version}`
Content-Type | `application/json`

### Supported events

The platform currently support the following webhook events:

Event | Description
--- | ---
`currency.create`  | currency created event
`currency.update` | currency updated event
`user.create`  | user created event
`user.update` | user updated event
`user.password.reset` | user password reset request event
`user.email.verify` | user email verification event (Email key)
`user.mobile.verify` | user mobile verification event (OTP key)
`mfa.sms.verify` | multi-factor SMS otp event
`email.create` | email created event
`email.update` | email updated event
`mobile.create` | mobile created event
`mobile.update` | mobule updated event
`address.create` | address created event
`address.update` | address updated event
`document.create` | document created event
`document.update` | document updated event
`bank_account.create` | bank account created event
`bank_account.update` | bank account updated event
`crypto_account.create` | crypto account created event
`crypto_account.update` | crypto account updated event
`account.create` | account created event
`account.update` | account updated event
`transaction.create` | transaction created event
`transaction.update` | transaction updated event
`transaction.initiate` | transaction initiated (pending) event
`transaction.execute` | transaction executed (complete/failed) event
