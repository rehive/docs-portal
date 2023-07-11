---
date: 2018-09-17T15:21:22+02:00
title: Usage
description: Notification extension usage.
weight: 4
---

### API

The Notification extension API is organized around the same RESTful principles as the Rehive platform. Many of the rules found in the platform are applicable to the Notification extension. This is  specifically true of authorization, errors, filters, and pagination.

Similar to the platform the Notification extension is divided into two sections:

1. admin : admin endpoints are prefixed with `admin`
2. user : user endpoints are prefixed with `user`

#### Admin

The admin section of the API provides an interface to administrate (create, read, update and delete) notifications and other resources available to administrators.

#### User

The user section of the API provides an interface to view notifications and alter notification preferences as an end-user.

### Templating

When creating notifications it can be useful to include additional information from webhook event or modify said information into an appropriate format. The notification extension supports some templating tools that may be useful for this.

The extension uses a mostly complete version of the Django Template Engine which you can find documented [here](https://docs.djangoproject.com/en/4.0/ref/templates/builtins/).

You can do some fairly advanced templating using the built in conditions, functions, template tags and filters. For further details on builtin template tags and filters take a look at this [section](https://docs.djangoproject.com/en/1.11/ref/templates/builtins/).

<aside class="notice">
	A lot of context related template functionality (ie. request scope information) is not available in the notification extension, this is a limitation put in place for security reasons. As a result, the only context that is available when parsing templates is the webhook event data.
</aside>

### Additional Template Tags

In addition to the standard Django builtin template tags, we have defined several extra builtins to make parsing Rehive webhook event data easier.

#### Timestamp

Convert a timestamp to a date object. The Rehive dates are normally returned as a microsecond timestamp. So this builtin is useful when human readable dates are required.

```text
{{ timestamp_variable|timestamp }}
```

The builtin `date` filter can be applied to the resulting `timestamp` object:

```text
{{ timestamp_value|timestamp|date:'D d M Y' }}
```

#### Money

The `money` function converts integer values into decimal currency values based on the currency's divisibility. Rehive always returns integer values in order to preserve precision across different databases and programming languages. This function can be used to convert the integer value into a human readable money value.

```text
{{ integer_value|money:divisibility_value }}
```

This could be used on the Rehive transaction webhook data in the following manner:

```text
{{ amount|money:currency.divisibility }}
```

### Context and computed data

Rehive will sometimes make additional data available to templates via a `context` or `computed` object.

#### Context

Context data is available to all templates. It contains data related to the company and special configurations in the extension itself.

The context object will contain the following data:

```json
{
	"company": {
		"id": "string",
		"name": "string",
		"system_email": "string"
	}
}
```

You can retrieve context data in notification templates like this:

```text
{{ context.company.name }}
```

### Computed

Some events trigger the computation of additional information that is not normally included in the webhooks received from Rehive. These computed fields are added to a `computed` key and can be accessed like any other data in the webhook.

#### Transaction Events

In order to correctly show the total fee of a transaction, the notification extension has to calculate the fee by retrieving all children transactions and summing the transaction amounts together. This is done automatically on all transaction webhook events and can be accessed through the `computed.fee` key:

```
{{ computed.fee }}
```

The same applies to the total amount of a transaction. When fees exist in related (children) transactions the total amount has to be retrieved via the `computed.total_amount` key:

```
{{ computed.total_amount }}
```

## Expressions

When working with webhook events, it is often necessary to only send notifications when certain conditions are met. The notification extension has an expression system that allows administrators to define a condition on when a notification should be sent. These expressions are evaluated against the webhook event data and must evaluate to either `True` or `False`. A faulty expression always evaluates to `False` but an empty expression always evaluates to `True`.

Expressions use a combination of two parsing methods. They occur in the following order:
1. Django Template Engine is used to replace tags in the expression string with content.
2. A safe python evaluator is then run on the resulting string.

The Rehive dashboard contains notification templates with expression presets that you can take a look at if you need examples.

A small list of basic examples can be found below:

### transaction.execute

**Credit transaction**:

Only send the notification if the transaction completed and was a credit type:

```text
'{{ status }}' == 'Complete' and '{{ tx_type }}' == 'credit'
```

**Debit transaction**:

Only send the notification if the transaction completed and was a debit type:

```text
'{{ status }}' == 'Complete' and '{{ tx_type }}' == 'debit'
```

### document.update

**Update document status**

Only send the notification is the status of the document changed in the update:

```text
'{{ status }}' != '{{ original_document.status }}'
```
