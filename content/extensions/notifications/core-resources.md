---
date: 2018-09-17T15:21:22+02:00
title: Core resources
description: Notification extension core resources.
weight: 3
---

There are several core reosurce in the extension.

### Notifications

Notifications are the primary store of value for sending emails and SMSes using the notification extension. They contain details regarding what, who, when, and how a notification should be sent.

Notifications can be either SMS, email, or push notifications. Each notification can be configured to be triggered by an event in Rehive or a manual API call. In addition, each notification can be configured to use data sent in Rehive events inside the notification messages, subject and recipient email or mobile number.

### Layouts

The layouts resource can be used to define common layouts for your notifications. This allows you to wrap your notifications with a common header and/or footer so that you can customize them in one place rather than in each notification.

### Logs

The logs resource contains information about each notification that gets sent by the notification extension. You can use this resource to track down errors or issues on your notifications and ensure that messages are getting sent as expected.
