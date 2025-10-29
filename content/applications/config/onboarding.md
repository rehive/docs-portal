---
date: 2018-09-17T15:21:22+02:00
title: Onboarding
description: Onboarding flow configuration
weight: 11
---

Config key: `onboarding`

## Overview

The onboarding configuration controls the user onboarding flow after registration, including required steps, verification requirements, and tier-based access controls.

## Configuration Options

### Section Visibility

- **hideSections** - Array of onboarding section names to hide (array)
  - Hides specific sections from the onboarding flow
  - Default: `[]`

### Group-Based Onboarding Control

- **hideRegister** - Array of group names to skip onboarding after registration (array)
  - Users in these groups skip onboarding when they register
  - Default: `[]`

- **hideApp** - Array of group names to skip onboarding entirely (array)
  - Users in these groups skip onboarding both on registration and login
  - Default: `[]`

### Onboarding Steps

Configure individual onboarding steps with requirements.

**steps** - Array of step objects defining the onboarding flow (array)

Each step contains:
- **name** - Step identifier (string)
- **required** - Whether step must be completed (boolean)
- **skip** - Whether step can be skipped (boolean)

Common step names:
- `welcome` - Welcome screen
- `kyc` - Know Your Customer verification
- `account_setup` - Account configuration
- `verification` - Identity verification
- `terms` - Terms acceptance

### Verification Requirements

**verification** - Verification options and requirements (object)

- **verification.email** - Require email verification (boolean)
  - Default: `true`

- **verification.mobile** - Require mobile verification (boolean)
  - Default: `true`

- **verification.documents** - Array of required document types (array)
  - Example: `["passport", "license", "utility_bill"]`
  - Common document types:
    - `passport` - Passport document
    - `license` - Driver's license
    - `national_id` - National ID card
    - `utility_bill` - Utility bill for address proof
    - `bank_statement` - Bank statement
  - Default: `[]`

### Transaction Limits

**limits** - Transaction limits by verification level (object)

- **limits.unverified** - Limit for unverified users (string)
  - Amount in base currency
  - Example: `"100.00"`

- **limits.basic** - Limit for basic verification (string)
  - Example: `"1000.00"`

- **limits.advanced** - Limit for advanced verification (string)
  - Example: `"10000.00"`

### Documents

- **documents.hide** - Hide documents section in onboarding (boolean)
  - Default: `false`

## Configuration Example

```json
{
  "onboarding": {
    "steps": [
      {
        "name": "welcome",
        "required": true,
        "skip": false
      },
      {
        "name": "kyc",
        "required": true,
        "skip": false
      },
      {
        "name": "account_setup",
        "required": false,
        "skip": true
      }
    ],
    "verification": {
      "email": true,
      "mobile": true,
      "documents": ["passport", "license"]
    },
    "limits": {
      "unverified": "100.00",
      "basic": "1000.00",
      "advanced": "10000.00"
    },
    "hideSections": [],
    "hideRegister": [],
    "hideApp": [],
    "documents": {
      "hide": false
    }
  }
}
```

## Common Use Cases

### Minimal Onboarding

Skip most steps for quick access:

```json
{
  "onboarding": {
    "steps": [
      {
        "name": "welcome",
        "required": false,
        "skip": true
      }
    ],
    "verification": {
      "email": false,
      "mobile": false,
      "documents": []
    }
  }
}
```

### Strict KYC Onboarding

Require full verification:

```json
{
  "onboarding": {
    "steps": [
      {
        "name": "welcome",
        "required": true,
        "skip": false
      },
      {
        "name": "kyc",
        "required": true,
        "skip": false
      }
    ],
    "verification": {
      "email": true,
      "mobile": true,
      "documents": ["passport", "utility_bill"]
    },
    "limits": {
      "unverified": "0.00",
      "basic": "500.00",
      "advanced": "50000.00"
    }
  }
}
```

### Group-Specific Onboarding

Skip onboarding for specific user groups:

```json
{
  "onboarding": {
    "hideRegister": ["admin", "staff"],
    "hideApp": ["system"],
    "steps": [
      {
        "name": "kyc",
        "required": true,
        "skip": false
      }
    ]
  }
}
```

## Best Practices

1. **Match requirements to use case** - Consumer apps may need minimal onboarding, financial services need strict KYC
2. **Set appropriate limits** - Balance security with user experience in transaction limits
3. **Use skip strategically** - Allow skipping non-critical steps to reduce friction
4. **Consider regional requirements** - Adjust document requirements based on regulatory obligations
5. **Test the full flow** - Complete onboarding as a new user to verify the experience
6. **Group-based customization** - Use group arrays to create different onboarding paths for different user types
