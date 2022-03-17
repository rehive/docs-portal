---
date: 2018-09-17T15:21:22+02:00
title: General settings
description: General settings config
weight: 8
---

key: `settings`

- `hideCryptoAccounts`: (b: false) hides crypto accounts section in external accounts
- `hideBankAccounts`: (b: false) hides bank accounts section in external accounts
- `hidePrimaryCurrency`: (b: false) hides primary currency section in preferences
- `hideNotifications`: (b: false) hides notifications section in preferences
- `hideSmsMfa`: (b: false) hides option to use SMS as a form of two factor authentication
- `bank`:
  - `hide`: (b: false) controls whether to hide certain fields on the bank account page
- `legal`:
  - `hide`: (b: false) controls whether to hide certain fields on the legal page

```json
"settings" : {
  "hideCryptoAccounts": false,
  "hideBankAccounts": false,
  "hidePrimaryCurrency": false,
  "hideNotifications": false,
  "hideSmsMfa": false,
  "bank": {
    "hideFields": []
  },
  "legal": { "hideFields": [] }
}
```
