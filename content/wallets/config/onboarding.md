---
date: 2018-09-17T15:21:22+02:00
title: Onboarding
description: Onboarding config
weight: 11
---

Config key: `onboarding`

- `hideSections`: ([s]: []) array of section names to hide in onboarding flow
- `hideRegister`: ([s]: []) array of group names to skip onboarding flow from register
- `hideApp`: ([s]: []) array of group names to skip onboarding flow from register and login
- `documents`
  - `hide`: (b: false) option to hide documents section

```json
"onboarding": {
  "hideSections": [],
  "hideRegister": [],
  "hideApp": [],
  "documents": { "hide": false }
}
```
