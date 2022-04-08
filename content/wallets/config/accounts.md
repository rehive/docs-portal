---
date: 2018-09-17T15:21:22+02:00
title: Accounts
description: Accounts config
weight: 1
---

Controls the appearance / features in accounts section

Types: (s) - string, (b) - boolean, (i) - integer

---

- `layout`: (s: 'accounts'/'') groups currencies by accounts with totals, defaults to listing all currencies.
- `actionVariant`: (s: 'text'/'') controls whether to use icons (default) or text action buttons.
- `identifier`: (s 'name'/'') controls whether to use the account reference or account name in the web wallet url.
- `amountDisplayCurrency`: (b 'true') controls whether to use display currency value or actual account value as main amount used/displayed throughout the wallet. This affects both account listings, wallet selector cards as well as the amount inputs.
- `displayAccountReference`: (b 'false') controls whether the account reference is shown on individual wallet cards on accounts listing

```json
"accounts" : {
  "layout": "",
  "actionVariant": "",
  "identifier": "name",
  "amountDisplayCurrency": true,
  "displayAccountReference": false
}
```
