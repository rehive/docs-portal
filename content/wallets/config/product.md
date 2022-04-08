---
date: 2018-09-17T15:21:22+02:00
title: Product
description: Product config
weight: 12
---

Config key: `product`

Controls the appearance / features in product section

Types: (s) - string, (b) - boolean, (i) - integer

---

- `currencies`: (a - []) hardcode override to only show products for these currencies (array of codes)
- `defaultCurrency`: (s - '') overrides using the user's primary currency as default cart currency

```json
"product": {
  "currencies": [],
  "defaultCurrency": "",
}
```
