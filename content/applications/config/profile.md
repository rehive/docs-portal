---
date: 2018-09-17T15:21:22+02:00
title: Profile
description: Profile configuration
weight: 13
---

Config key: `profile`

## Overview

The profile configuration section controls user profile fields, document requirements, privacy settings, and referral program features.

## Configuration Options

### Profile Fields

**fields** - Configuration for profile field requirements (object)

- **fields.required** - Array of required profile fields (array)
  - Common fields: `first_name`, `last_name`, `email`, `mobile`, `date_of_birth`, `nationality`, `address`
  - Default: `["first_name", "last_name", "email"]`

- **fields.optional** - Array of optional profile fields (array)
  - Fields that users can provide but aren't required
  - Example: `["mobile", "date_of_birth", "address"]`
  - Default: `[]`

- **fields.editable** - Array of fields users can edit after registration (array)
  - Example: `["first_name", "last_name", "mobile"]`
  - Default: All fields are editable

- **fields.hidden** - Array of fields to hide from users (array)
  - Example: `["ssn", "tax_id"]`
  - Useful for sensitive fields managed by admins only
  - Default: `[]`

### ID Field Customization

- **hideID** - Hide the ID field from personal details page (boolean)
  - Default: `false`

- **labelID** - Custom label for ID field (string)
  - Override the default "ID" label
  - Example: `"Tax ID"`, `"National ID"`
  - Default: `""`

### Address Configuration

- **addressTypes** - Available address types in the application (array)
  - Used for profile addresses, address forms, and checkout flows
  - Platform options: `permanent`, `shipping`, `billing`
  - Default: `["permanent", "shipping", "billing"]`

### Document Management

**documents** - Document upload and verification settings (object)

- **documents.hide** - Hide documents section from profile (boolean)
  - Default: `false`

- **documents.types** - Allowed document types (array)
  - Example: `["passport", "license", "utility_bill"]`
  - Common types:
    - `passport` - Passport
    - `license` - Driver's license
    - `national_id` - National ID card
    - `utility_bill` - Utility bill
    - `bank_statement` - Bank statement
    - `proof_of_address` - Address verification
  - Default: `[]` (all types allowed)

- **documents.required** - Required document types for verification (array)
  - Example: `["passport"]`
  - Default: `[]`

- **documents.formats** - Allowed file formats for documents (array)
  - Example: `["jpg", "png", "pdf"]`
  - Default: `["jpg", "png", "pdf"]`

### Privacy Settings

**privacy** - Control visibility of profile information (object)

- **privacy.showEmail** - Show email in public profile (boolean)
  - Default: `false`

- **privacy.showMobile** - Show mobile in public profile (boolean)
  - Default: `true`

- **privacy.showAddress** - Show address in public profile (boolean)
  - Default: `false`

### Referral Program

**referral** - Referral rewards program settings (object)

- **referral.enabled** - Enable referral program features (boolean)
  - Shows referral rewards banner in profile
  - Adds referral code input during registration
  - Default: `false`

## Configuration Example

```json
{
  "profile": {
    "fields": {
      "required": ["first_name", "last_name", "email"],
      "optional": ["mobile", "date_of_birth", "address"],
      "editable": ["first_name", "last_name", "mobile"],
      "hidden": ["ssn", "tax_id"]
    },
    "hideID": false,
    "labelID": "National ID",
    "addressTypes": ["permanent", "shipping", "billing"],
    "documents": {
      "hide": false,
      "types": ["passport", "license", "utility_bill"],
      "required": ["passport"],
      "formats": ["jpg", "png", "pdf"]
    },
    "privacy": {
      "showEmail": false,
      "showMobile": true,
      "showAddress": false
    },
    "referral": {
      "enabled": false
    }
  }
}
```

## Common Use Cases

### Minimal Profile

Basic profile with minimal requirements:

```json
{
  "profile": {
    "fields": {
      "required": ["first_name", "last_name", "email"],
      "optional": ["mobile"]
    },
    "addressTypes": ["permanent"],
    "documents": {
      "hide": true
    }
  }
}
```

### KYC-Compliant Profile

Full KYC requirements with document verification:

```json
{
  "profile": {
    "fields": {
      "required": ["first_name", "last_name", "email", "mobile", "date_of_birth", "nationality", "address"],
      "editable": ["mobile", "address"]
    },
    "documents": {
      "hide": false,
      "types": ["passport", "utility_bill"],
      "required": ["passport", "utility_bill"],
      "formats": ["jpg", "png", "pdf"]
    },
    "addressTypes": ["permanent"],
    "privacy": {
      "showEmail": false,
      "showMobile": false,
      "showAddress": false
    }
  }
}
```

### Referral Program

Enable referral features:

```json
{
  "profile": {
    "referral": {
      "enabled": true
    },
    "fields": {
      "required": ["first_name", "last_name", "email"]
    }
  }
}
```

### Privacy-Focused

Hide sensitive information from public view:

```json
{
  "profile": {
    "privacy": {
      "showEmail": false,
      "showMobile": false,
      "showAddress": false
    },
    "fields": {
      "hidden": ["date_of_birth", "nationality"]
    }
  }
}
```

## Best Practices

1. **Match field requirements to regulations** - Collect only data required for compliance
2. **Limit editable fields** - Prevent users from changing verified information
3. **Use appropriate address types** - Enable only the address types your business needs
4. **Secure sensitive data** - Hide fields like SSN or tax ID from profile display
5. **Enable document verification** - Required for KYC/AML compliance in financial applications
6. **Consider privacy** - Default to not showing personal information publicly
7. **Test document upload** - Verify allowed formats work correctly with your storage system
