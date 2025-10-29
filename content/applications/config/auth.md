---
date: 2018-09-17T15:21:22+02:00
title: Auth
description: Authentication configuration
weight: 3
---

Config key: `auth`

## Overview

The authentication configuration section controls registration and login flows, including required fields, verification methods, and security settings.

## Configuration Options

### Primary Identifier

**identifier** - Primary login method: `"email"` or `"mobile"`
- Determines which field users must provide to log in
- Default: `"email"`

### Verification Requirements

**email** - Email verification requirement: `"required"`, `"optional"`, or `""` (disabled)
- `"required"` - Blocks app access until email is verified
- `"optional"` - Can be skipped but prompts on next login
- `""` - Verification screen is skipped
- Default: `""`

**mobile** - Mobile verification requirement: `"required"`, `"optional"`, or `""`
- Same behavior as email verification
- Default: `""`

### Registration Fields

**first_name** - Require first name during registration (boolean)
- Default: `true`

**last_name** - Require last name during registration (boolean)
- Default: `true`

**username** - Require username during registration (boolean)
- Default: `false`

**country** - Require country selection during registration (boolean)
- Default: `true`

**nationality** - Require nationality selection during registration (boolean)
- Default: `false`

**defaultNationality** - Default country code for nationality (string)
- Example: `"US"`, `"GB"`, `"ZA"`
- Default: `""`

**residency** - Require residency selection during registration (boolean)
- Default: `true`

**defaultResidency** - Default country code for residency (string)
- Example: `"US"`
- Default: `""`

### Password Configuration

**confirm_password** - Require password confirmation during registration (boolean)
- Default: `true`

### Landing Page

**landing** - Default authentication page: `"login"` or `"register"`
- Controls which page users see first
- Default: `"login"`

### Security Settings

**pin** - PIN length requirement (string)
- Example: `"4"` for 4-digit PIN, `"6"` for 6-digit PIN
- Used with local authentication (biometrics/PIN)
- Default: `"4"`

**mfa** - Multi-factor authentication method: `"sms"`, `"email"`, `"app"`, or `""`
- Controls MFA setup prompts
- Can be set to `"required"`, `"optional"`, or `""` (disabled)
- Default: `""`

### Access Control

**tier** - Minimum tier level required to use the app (integer)
- Users below this tier see a blocker screen
- Only have access to profile/settings until requirement is met
- Default: `1`

**group** - Allow group selection during registration (boolean)
- Prompts user to choose their group as part of registration
- Default: `true`

### Registration Options

**disableRegister** - Disable registration functionality (boolean)
- Hides register option, making app login-only
- Default: `false`

**business** - Enable business registration flow (boolean)
- Shows business setup during registration for business accounts
- Default: `true`

### Session Management

**sessions** - Enable multiple simultaneous sessions (boolean)
- Allows users to be signed in on multiple devices
- Applicable for client apps
- Default: `true`

### Terms and Conditions

**terms** - Array of terms that users must accept during registration
- Example: `["terms_of_service", "privacy_policy"]`
- Default: `[]`

## Configuration Example

```json
{
  "auth": {
    "identifier": "email",
    "email": "",
    "mobile": "",
    "first_name": true,
    "last_name": true,
    "username": false,
    "country": true,
    "nationality": false,
    "defaultNationality": "US",
    "residency": true,
    "defaultResidency": "US",
    "confirm_password": true,
    "landing": "login",
    "pin": "4",
    "mfa": "sms",
    "tier": 1,
    "group": true,
    "disableRegister": false,
    "business": true,
    "sessions": true,
    "terms": ["terms_of_service", "privacy_policy"]
  }
}
```

## Common Use Cases

### Email-Only Registration

```json
{
  "auth": {
    "identifier": "email",
    "email": "required",
    "first_name": true,
    "last_name": true,
    "confirm_password": true
  }
}
```

### Mobile-First with SMS MFA

```json
{
  "auth": {
    "identifier": "mobile",
    "mobile": "required",
    "mfa": "sms",
    "first_name": true,
    "last_name": true
  }
}
```

### Business Registration

```json
{
  "auth": {
    "business": true,
    "tier": 1,
    "country": true,
    "first_name": true,
    "last_name": true
  }
}
```

### Login-Only Application

```json
{
  "auth": {
    "disableRegister": true,
    "identifier": "email",
    "sessions": true
  }
}
```

## Best Practices

1. **Match identifier to use case** - Use email for professional apps, mobile for consumer apps
2. **Balance security and UX** - Required verification improves security but may impact onboarding
3. **Set appropriate tier requirements** - Ensure tier restrictions align with your verification flow
4. **Consider regional requirements** - Default nationality/residency should match your primary market
5. **Test registration flow** - Verify the complete user journey before deploying to production
