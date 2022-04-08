---
date: 2018-09-17T15:21:22+02:00
title: Profile
description: Profile config
weight: 13
---

Config key: `profile`

Types: (s) - string, (b) - boolean, (i) - integer

---

- `hideID` - hides the id field from the personal details page
- `labelID` - custom label override for id field
- `addressTypes` - available address types in app. This is used for listing the addresses on the profile, adding new addresses and checkout flows. Options are from the platform (`permanent`, `shipping`, `billing`)
- `referral`
  - `enabled`: (b: false) enabled referral rewards banner in profile and code input on registration
- `documents`
  - `hide`: (b: false) option to hide documents section

```json
"profile": {
  "hideID": false,
  "labelID": "",
  "addressTypes": ["permanent", "shipping", "billing"],
  "referral": {"enabled": false},
  "documents": {"hide": false}
}
```
