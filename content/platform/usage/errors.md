---
date: 2018-09-17T15:21:22+02:00
title: Errors
description: Errors.
weight: 2
---


When an error occurs in the platform it returns a HTTP response containing two things:

1. body (formatted in JSON) containing a `message` and `status`
2. and HTTP response code

The JSON error response always includes a `message` string. If an error occurred as a result of a specific attribute or
key the error details will be outputted in the `data` object.

Errors will be formatted in one of two ways. A minimal error message:

```json
{
    "status": "error",
    "message": "Error message."
}
```

or a descriptive error message including an additional `data` object with details:

```json
 {
    "status": "error",
    "message": "First error message, Second error message",
    "data": {
        "field_name1": [
            "First error message."
        ],
        "field_name2": [
            "Second error message."
        ]
    }
}
```
