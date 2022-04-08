---
date: 2018-09-17T15:21:22+02:00
title: Local authentication
description: Local authentication (pin/biometrics) config
weight: 9
---

Config key: `localAuth`

This section covers when the user is prompted to confirm their local authentication if it's set (this can be biometrics like face ID/fingerprint or a pin)

Types: (s) - string, (b) - boolean, (i) - integer

---

- `appLoad` - when a user reopens the app after already being logged in and the token is stored behind local auth
- `send` - when completing the send flow
- `withdraw` - when completing a withdraw

```json
{
  "appLoad": true,
  "send": true,
  "withdraw": true
}
```
