---
date: 2018-09-17T15:21:22+02:00
title: Settings
description: Settings configuration
weight: 8
---

Config key: `settings`

## Overview

The settings configuration section controls available user settings and preferences, including security options, notifications, and critically, bank account configurations for fiat deposits and withdrawals.

## General Settings Options

### Account Visibility

**hideCryptoAccounts** - Hide crypto accounts section in external accounts (boolean)
- Default: `false`

**hideBankAccounts** - Hide bank accounts section in external accounts (boolean)
- Default: `false`

### Preferences

**hidePrimaryCurrency** - Hide primary currency section in preferences (boolean)
- Default: `false`

**hideNotifications** - Hide notifications section in preferences (boolean)
- Default: `false`

### Security

**hideSmsMfa** - Hide SMS as a two-factor authentication option (boolean)
- Default: `false`

**security.passwordRequirements.minLength** - Minimum password length (integer)
- Default: `8`

**security.passwordRequirements.requireUppercase** - Require uppercase characters (boolean)
- Default: `true`

**security.passwordRequirements.requireNumbers** - Require numbers (boolean)
- Default: `true`

**security.passwordRequirements.requireSymbols** - Require special symbols (boolean)
- Default: `false`

**security.sessionTimeout** - Session timeout in seconds (integer)
- Default: `3600`

**security.maxSessions** - Maximum simultaneous sessions (integer)
- Default: `5`

## Bank Account Configuration

The bank configuration system is critical for enabling fiat deposits and withdrawals. It controls which countries, currencies, and payment methods are supported throughout your application.

**For complete bank configuration documentation, see the dedicated [Bank Settings](./bank_settings) page.**

The bank configuration includes:
- **Banking zones** - Groups of countries using the same payment network (SEPA, ACH, etc.)
- **Zone templates** - Required form fields for each payment method
- **Currency support** - Mapping of app currencies to banking zones
- **Action overrides** - Different payment methods for deposits vs. withdrawals

## Configuration Example

```json
{
  "settings": {
    "hideCryptoAccounts": false,
    "hideBankAccounts": false,
    "hidePrimaryCurrency": false,
    "hideNotifications": false,
    "hideSmsMfa": false,
    "security": {
      "passwordRequirements": {
        "minLength": 8,
        "requireUppercase": true,
        "requireNumbers": true,
        "requireSymbols": false
      },
      "sessionTimeout": 3600,
      "maxSessions": 5
    },
    "bank": {
      "version": 2
      // See Bank Settings page for complete configuration
    }
  }
}
```

## Common Use Cases

### High Security Settings

```json
{
  "settings": {
    "security": {
      "passwordRequirements": {
        "minLength": 12,
        "requireUppercase": true,
        "requireNumbers": true,
        "requireSymbols": true
      },
      "sessionTimeout": 1800,
      "maxSessions": 2
    },
    "hideSmsMfa": false
  }
}
```

### Crypto-Only Application

```json
{
  "settings": {
    "hideBankAccounts": true,
    "hideCryptoAccounts": false
  }
}
```

### Simplified Preferences

```json
{
  "settings": {
    "hidePrimaryCurrency": true,
    "hideNotifications": true
  }
}
```

## Best Practices

1. **Balance security and UX** - Stricter security settings improve safety but may impact user experience
2. **Set appropriate session timeouts** - Financial applications need shorter timeouts than general apps
3. **Limit concurrent sessions** - Reduce security risks by limiting `maxSessions`
4. **Hide unused sections** - Simplify the UI by hiding crypto or bank accounts if not needed
5. **Configure bank settings properly** - See the [Bank Settings](./bank_settings) page for complete guidance
