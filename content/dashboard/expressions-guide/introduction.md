---
date: 2018-09-17T15:21:22+02:00
title: Introduction
description: Introduction to building third-party integrations for common fintech flows.
weight: 1
---
### What is an expression? {#what-is-an-expression}

The expression field allows admins to add logic to specify conditions that need to be met in order for a reward campaigns, notification, or webhook to be triggered. An entire expression must evaluate to “true” in order for it to trigger. You can use expressions to build more granular and configurable reward campaigns, notifications or webhooks. Expressions use the data sent in a webhook


### What are events? {#what-are-events}

The Rehive platform has a collection of internal events that can be configured to trigger webhooks. These events consist of actions that occur on resources in the platform. Examples of events are user document create (adding a document to a user), address update (updating a user's address), user update (updating a field on the user object such as their email address), transaction execute (creating a transaction) etc. 

[Read more about events and webhooks.](https://docs.rehive.com/platform/usage/events/)


### What are webhooks? {#what-are-webhooks}

A webhook is a method by which the platform API sends data to the extensions (or other web services). The platform API sends data to the extensions when a specific event takes place. Webhooks are used so that the extensions don't have to repeatedly request data - they only receive the data when they need it, i.e. when an event they are configured to receive data for occurs.


### What is webhook data? {#what-is-webhook-data}

Webhook data refers to all of the information sent in a webhook from the platform API. It is always sent as a JSON object and its contents depend on which event triggered it. 


### How do expressions work? {#how-do-expressions-work}

<img src="/images/webhook-flow.png" alt="Deposit via bank transfer diagram" width="80%">  

Data is sent to each extension, or external web service, in the form of webhook data when an event is triggered (e.g. user update). A webhook must be configured for the extension to receive it. Variables representing fields and their values in the webhook data can be used in your expressions to evaluate whether the notification, reward campaign or webhook should trigger. The extension (notifications or reward) will inject values from the webhook data into the variables inside the expression before the system evaluates the expression and decides whether to send the notification or reward. 

Example: For event user update, a snippet of webhook data is:


```
"archived": false,
"first_name": "Samantha"
```


Taking the above data into consideration, if your expression is:  \
 \
`'{{ first_name }}' and not {{ archived }}`

The relevant extension will look at the data in the webhook it receives, and inject the following values into the above variables, which the system will then evaluate to decide if the reward/notification will trigger: \
 \
`'Samantha' and (not (archived == true))`

The reward/notification will only trigger if the first name field does not have an empty value and the user's archived status is false, i.e. they are not an archived user. Since this user's first name field is not null and they are not an archived user, this expression will evaluate as true and will trigger the relevant notification or reward.

The system evaluates the expression as:


```
True and (not(false))
True and true
True
```


[Read more about truth tables.](https://en.wikipedia.org/wiki/Truth_table)

