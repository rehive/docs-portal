---
date: 2018-09-17T15:21:22+02:00
title: FAQ
description: Frequently asked questions
weight: 5
---

##### 1. How do I add a check for a specific value in an expression? {#how-do-i-add-a-check-for-a-specific-value-in-an-expression}
[See formatting information](#formatting-information) points 3, 5 and 6.
##### 2. How do I make an expression only trigger if fields are not blank? {#how-do-i-make-an-expression-only-trigger-if-fields-are-not-blank}
[See formatting information](#formatting-information) point 2.
##### 3. How do I check if a user is in a specific group? {#how-do-i-check-if-a-user-is-in-a-specific-group}
```
'{{ user.groups.0.name }}' == 'individual' 
```
Replace “individual” with the name of the group you would like to check against.
##### 4. How do I compare new values in an update event to the original values? {#how-do-i-compare-new-values-in-an-update-event-to-the-original-values}
[See formatting information](#formatting-information) point 4.
##### 5. Can I use more than one condition in my expression? {#can-i-use-more-than-one-condition-in-my-expression}
Yes, you can use logical operators to link your conditions together in your required format. See [Using logical operators inside expressions.](#using-logical-operators-inside-expressions)
##### 6. Which API documentation is best to use in conjunction with this guide? {#which-api-documentation-is-best-to-use-in-conjunction-with-this-guide}
[https://docs.platform.rehive.com/](https://docs.platform.rehive.com/)
##### 7. What parses expressions? {#what-parses-expressions}
Python.
##### 8. What injects the variables? {#what-injects-the-variables}
Django template language.
##### 9. Where can I see webhook log data? {#where-can-i-see-webhook-log-data}
[Webhook logs inside the admin Dashboard.](https://dashboard.rehive.com/#/developers/webhooks/logs)
##### 10. Where can I see available fields for use in my expression? {#where-can-i-see-available-fields-for-use-in-my-expression}
[Events & available fields to use](#events-&-available-fields-to-use)
The Events & available fields to use section in this document links to the specific event section of the below API docs.
[https://docs.platform.rehive.com/](https://docs.platform.rehive.com/)
[https://docs.rehive.com/platform/usage/events/](https://docs.rehive.com/platform/usage/events/)

