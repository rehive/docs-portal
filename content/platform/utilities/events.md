---
date: 2018-09-17T15:21:22+02:00
title: Events
description: Events in the platform.
weight: 1
---

The Platform has a collection of internal events that can be configured to trigger webhooks. Webhooks can be added using the dashboard or directly via the API.

Each webhook contains the following properties:

- `event` : The event that should trigger the webhook.
- `url` : The endpoint that webhook events should be sent to. Events are sent in an HTTP request containing the event data formatted as JSON.
- `secret` : The secret is sent in the `Authorization` header of each event's webhook HTTP request.
- `expression` : An optional condition that is used to evaluate whether the event should trigger.

#### Requirements

When building a service that receives webhook events, please adhere to the following requirements:

- Always create webhooks with a secure `secret` key that only you and Rehive know. We recommend a randomly generated string with a minimum of 32 characters.
- Always check the `secret` is correct whenever you receive a webhook event. This ensures the webhook event originated from the platform and thus can be trusted.
- Always secure your webhook endpoints using SSL. This ensures that only Rehive and your server can see the webhook data.
- Return a `200`, `201`, or `202` HTTP response whenever your endpoint successfully receives a webhook. If a different status is returned, the Platform will retry the webhook.
- Return a response within 5 seconds. The platform will terminate any connection that takes longer than 5 seconds. Terminated requests will be retried like a failed request.
- Treat all webhook events as idempotent. This will protect against unexpected retries due to network or connection errors.

#### Recommendations

We recommend the following as well:

- Check the IP of each webhook event your service receives. Platform webhooks will always originate fromt the same IP: **34.91.230.165**.
- Perform event processing, particularly long running processing, asynchronously (outside of the webhook event's request -> response process). This will allow your service to respond to a webhook event quickly but still perform any other processing without worrying about the 5 second response timeout.

#### Retries

Platform webhooks will automatically retry if a webhook fails. Failure can be caused by:

- Connection errors when calling the webhook `url`.
- Timeouts when calling the webhook `url` (there is a strict 5 second timeout).
- Unexpected HTTP response statuses. Only `200`, `201`, or `202` HTTP responses are treated as successful.

The platform will retry a webhook up to **7** times. Each retry will take longer to trigger than the previous attempt (up to a max of 3600 seconds).

### Event data

Every webhook event includes JSON body that can be parsed to get the webhook data:

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
id | The unique id of the request. This id is shared between retries of the same event.
event | The event that triggered the webhook.
company | The company identifier.
data | The event data.

The webhook event will also include the following HTTP headers:

Header | Value
--- | ---
Authorization | `Secret {secret}`
User-Agent | `rehive-platform/{version}`
Content-Type | `application/json`

### Supported events

The platform supports the following webhook events:

Event |
--- |
`company.link.create` |
`company.link.update` |
`company.update` |
`currency.create` |
`currency.update` |
`user.create` |
`user.update` |
`user.password.reset` |
`user.password.set` |
`user.deactivate.verify` |
`user.request_delete.verify` |
`user.email.verify` |
`user.mobile.verify` |
`email.create` |
`email.update` |
`mobile.create` |
`mobile.update` |
`address.create` |
`address.update` |
`document.create` |
`document.update` |
`bank_account.create` |
`bank_account.update` |
`crypto_account.create` |
`crypto_account.update` |
`account.create` |
`account.update` |
`transaction.create` |
`transaction.update` |
`transaction.initiate` |
`transaction.execute` |
`transaction.transition.create` |
`transaction.transition.update` |
`mfa.sms.verify` |
