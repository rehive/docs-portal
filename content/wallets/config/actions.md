---
date: 2018-09-17T15:21:22+02:00
title: Actions
description: Actions config
weight: 2
---

Config key: `actions`

Each action in accounts can be customized here. All actions have a `condition` and a `config` described below. This section will be updated/overhauled soon (end Q2 2022).

## Actions

- `send`
- `receive`
- `withdraw`
- `request`
- `deposit`
- `exchange`
- `buy`
- `sell`
- `transfer`
- `prepaid`
- `redeem_voucher`
- `scan` (mobile only - redirects to `send` or `pay` depending on what is scanned)
- `pay` (accessed through `scan` on mobile)

## Condition

This is applicable to all actions

- `hide` - hides this action under any conditions
- `hideCurrency` - array of currencies this action is hidden for
- `showCurrency` - array of currencies this action is shown for
- `hideGroups` - array of groups this action is hidden for
- `showGroups` - array of groups this action is shown for
- `hideAccounts` - array of accounts this action is hidden for
- `showAccounts` - array of accounts this action is shown for

## Config

- `send`
  - `confirmMessage`: custom message displayed on the confirm screen
- `receive`
  - `initialPage`: (s: 'qr') whether to show the qr code or customization form as the default page on receive
  - `recipient`: ([s]: ['email', 'mobile', 'crypto']) allowed receive types (these are also controlled by whether the user has a mobile set up or if it's a crypto currency)
- `withdraw`
  - `confirmMessage`: custom message displayed on the confirm screen
  - `pairs`: if conversion service is active this allows exchange withdraw pairs to be set up. An array of strings of from:to, e.g. for withdrawing XLM to a USD bank account you'd add `"XLM:USD"` into the array

```json
"actions": {
  "send": {
    "condition": {
      "hide" : false,
      "hideCurrency": [],
      "showCurrency": [],
      "hideAccounts": [],
      "showAccounts": [],
      "hideGroups": [],
      "showGroups": [],
    },
    "config": {
      "confirmMessage": "",
    }
  },
  "receive": {
    "condition": {
      ... // same as send/condition
    },
    "config": {
      "initialPage": "qr",
      "recipient": []
    }
  },
  "withdraw": {
    "condition": {
      ... // same as send/condition
    },
    "config": {
      "confirmMessage": "",
      "pairs": []
    }
  },
  ... // rest of actions with only "condition" options
}
```
