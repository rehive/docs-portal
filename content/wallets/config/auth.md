---
date: 2018-09-17T15:21:22+02:00
title: Auth
description: Auth config
weight: 3
---

Config key: `auth`

This section configures the auth screen flows

- `identifier`: (s: '**email**'/'mobile') tells the app which field the users are required to log in with. Note: the two options below are only applicable for whichever value this identifier is set to
- `email`: (s: 'required'/'optional'/'') prompts the user to verify their email:
  - `required`: app is blocked by this screen until user has verified email
  - `optional`: it can be skipped, but the user will be prompted again on next login
  - `''` [default]: screen is skipped
- `mobile`: (s: 'required'/'optional'/'') prompts the user to verify their mobile:
  - same behaviour as email above with 'required'/'optional'/''.
- `first_name`: (b) requires user to enter their first name
- `last_name`: (b) requires user to enter their last name
- `username`: (b) requires user to enter a username
- `nationality`: (b) requires user to select a nationality/country
- `defaultNationality`: (s) country code for the default nationality set for new registrations. Note: if
- `confirm_password`: (b) requires user to confirm their password
- `localAuth`: (s: 'required'/'optional'/'') prompts the user to activate pin or touchID - see "pin" section.
  - same behaviour as email above with 'required'/'optional'/''.
    ![https://user-images.githubusercontent.com/35782774/51035802-e366b880-15b3-11e9-9e07-c871d1ebf028.png](https://user-images.githubusercontent.com/35782774/51035802-e366b880-15b3-11e9-9e07-c871d1ebf028.png)
- `mfa`: (s: 'required'/'optional'/'') prompts the user to activate two-factor authentication on their account. This will require them to use a token/sms OTP on their next login. Similar behaviour to email above with 'required'/'optional'/''
- `tier`: (i: 0) required user tier level to use the app - they are presented with a blocker screen and only have access to profile/settings while under this tier level
- `group`: (b: true) prompt user to choose their group as part of the registration flow
- `sessions`: (b: true) applicable for client apps, allows signing in to multiple sessions at one time
- `disableRegister`: (b: false) disable the register option in the app
- `business`: (b: true) shows config to set up initial business in auth flow if business account is being registered
- `language`: (s: '') default language used in the app's auth flows as well as for new user registrations

```json
"auth": {
  "identifier": "email",
  "email": "",
  "mobile": "",
  "first_name": false,
  "last_name": false,
  "username": false,
  "country": false,
  "group": true,
  "nationality": false,
  "defaultNationality": "",
  "confirm_password": false,
  "landing": "login",
  "localAuth": "",
  "mfa": "",
  "language": "",
  "disableRegister": false,
  "tier": 0,
  "business": true,
  "sessions": true
},
```
