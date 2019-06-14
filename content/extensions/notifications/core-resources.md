---
date: 2018-09-17T15:21:22+02:00
title: Core resources
description: Notification extension core resources.
weight: 3
---

There is only one core resource in the notification extension.

### Notifications

Notifications are the primary store of value for sending emails and SMSes using the notification extension. They contain details regarding what, who, when and how a notification should be sent.

Notifications can be either SMS or email notifications (with plans to add push notifications in future). Each notification can be configured to be triggered by an event in Rehive or a manual API call. In addition, each notification can be configured to use data sent in Rehive events inside the notification messages, subject and recipient email or mobile number.

Notifications consist of the following data:

Field | Description
--- | ---
id | Unique identifier for the notification
from_currency |  The currency to convert from.
notification_type | SMS or email
name | Name of the notification
description | Description of the notification
subject | Subject sent in emails
text_message | Text message sent in emails
html_message | HTML message sent in emails
sms_message | SMS messages sent in SMSes
enabled | Whether the notification is enabled and can be used
preference_enabled | Whether users can disable the notification
event | The event the notification triggers on
to_email | The email recipient
to_mobile | The mobile recipient
expression | An expression that can evluate whether a notification should trigger
created | Timestamp date the notification was created
updated | Timestamp date the notification was last updated
