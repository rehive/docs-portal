---
date: 2018-09-17T15:21:22+02:00
title: Technical outline
description: Technical outline of a base Currency Manager Extension
weight: 4
---

This section serves as a guide on how to fulfill the API structure and functional requirements of a Currency Manager Extension. It assumes you have a grasp of the general concepts and flows discussed in the previous sections.

#### Structural Overview

##### Required endpoints
- `/admin/currencies/` - [GET]
- `/activate/`
- `/deactivate/`
- `/admin/currencies/<code>/` - [GET, PATCH]
- `/user/currencies/` - [GET]
- `/user/currencies/<code>/` - [GET]
- `/webook/` - [POST]
- `/currencies/` [GET]

##### Metadata structure
Generally, we recommend including extra information about a transaction within the extension specific metadata. To include extra fields that might be useful for an admin or user to see a metadata object can be included as `extension_your_currency_manager` and any number of key/value pairs included.

##### Error messages
Rehive supports a `/transactions/<code>/messages/` endpoint for appending messages to a transaction. When an error occurs a managed currency extension should:
Append a User error by creating a message with the `level=error` and the `section=user`.
If necessary, an admin-only message can also be appended by specifying the section as `admin`.

The User level error will be displayed to the end user within the Rehive application.

##### Subtypes
When the currency manager creates transactions it should always use a subtype. See Rehive subtype guide here (TODO link to standard subtype list). Where required the extension can use its own custom subtypes.

##### Stored objects
This list excludes the general extension list of stored objects like User, Company etc.

###### Currency
```
company = ForeignKey -> Company
code = Charfield(30)
display_code = Charfield(12)
description = Charfield(255)
symbol = CharField(30)
unit = CharField(30)
divisibility = IntegerField
manager_code = Charfield(30)
```

##### Rehive Webhook Handling

###### Transaction webhook
See the Rehive transaction handling section (TODO: LINK)

###### Currency webhook
Event: `currency.create`  
The currency manager extension should create a new Currency object using the Rehive currency object data

Event: `currency.update`  
The currency manager extension should update an existing Currency object with the new webhook data using the code as a link


