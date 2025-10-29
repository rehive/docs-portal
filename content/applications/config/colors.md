---
date: 2018-09-17T15:21:22+02:00
title: Design & Colors
description: Design and theming configuration
weight: 6
---

Config keys: `design`, `colors`, `themes`

## Overview

The design configuration section controls the visual appearance and branding of your application, including colors, themes, logos, and fonts. This allows you to match the wallet application to your brand identity.

## Colors Configuration

The application uses a comprehensive color system with primary and secondary brand colors, along with semantic colors for different UI states.

### Brand Colors

- **primary** - Primary brand color (string)
  - Used for headers, drawers, main buttons, and primary UI elements
  - Example: `"#5969F6"`
  - Default: `"#5969F6"`

- **secondary** - Secondary brand color (string)
  - Used for accents and secondary UI elements
  - Provides contrast to the primary color
  - Example: `"#A4A5F5"`
  - Default: `"#A4A5F5"`

- **primaryContrast** - Text/icon color on primary background (string)
  - Ensures legibility on primary color
  - Example: `"#ffffff"`
  - Default: `"#f6f6f6"`

- **secondaryContrast** - Text/icon color on secondary background (string)
  - Ensures legibility on secondary color
  - Example: `"#303030"`
  - Default: `"#303030"`

### Semantic Colors

- **error** - Error state color (string)
  - Used for error messages and failed states
  - Default: `"#f44336"`

- **warning** - Warning state color (string)
  - Used for warning messages and cautions
  - Default: `"#FC8755"`

- **success** - Success state color (string)
  - Used for success messages and completed states
  - Default: `"#4CAF50"`

- **info** - Information state color (string)
  - Used for informational messages
  - Default: `"#2196f3"`

- **positive** - Positive value color (string)
  - Used for positive amounts and gains
  - Default: `"#4CAF50"`

- **negative** - Negative value color (string)
  - Used for negative amounts and losses
  - Default: `"#f44336"`

### Background Colors

- **background** - Main background color (string)
  - Default: `"#ffffff"`

- **surface** - Surface/card background color (string)
  - Default: `"#f5f5f5"`

### Neutral Colors

- **grey1** - Light grey (string)
  - Default: `"#FAFAFA"`

- **grey2** - Medium grey (string)
  - Default: `"#E0E0E0"`

- **grey3** - Dark grey (string)
  - Default: `"#B8B7C6"`

- **font** - Default font color (string)
  - Default: `"#707070"`

## Themes Configuration

Control dark mode and theme preferences.

### Dark Theme

- **themes.dark.enabled** - Enable dark theme option (boolean)
  - Default: `true`

- **themes.dark.default** - Set dark theme as default (boolean)
  - Default: `false`

## Logo Configuration

Customize your application logo and branding.

- **logo.url** - URL to your logo image (string)
  - Example: `"https://your-domain.com/logo.png"`

- **logo.width** - Logo width in pixels (integer)
  - Example: `200`

- **logo.height** - Logo height in pixels (integer)
  - Example: `60`

- **logo.alt** - Alt text for logo (string)
  - Example: `"Company Logo"`

## Favicon Configuration

Set your application favicon.

- **favicon.url** - URL to favicon (string)
  - Example: `"https://your-domain.com/favicon.ico"`

## Font Configuration

Customize application fonts.

- **fonts.primary** - Primary font family (string)
  - Example: `"Roboto"`
  - Default: `"Roboto"`

- **fonts.secondary** - Secondary font family (string)
  - Example: `"Arial"`
  - Default: `"Arial"`

## Configuration Example

```json
{
  "colors": {
    "primary": "#1976d2",
    "secondary": "#dc004e",
    "primaryContrast": "#ffffff",
    "secondaryContrast": "#303030",
    "background": "#ffffff",
    "surface": "#f5f5f5",
    "error": "#f44336",
    "warning": "#ff9800",
    "info": "#2196f3",
    "success": "#4caf50",
    "positive": "#4caf50",
    "negative": "#f44336",
    "grey1": "#FAFAFA",
    "grey2": "#E0E0E0",
    "grey3": "#B8B7C6",
    "font": "#707070"
  },
  "themes": {
    "dark": {
      "enabled": true,
      "default": false
    }
  },
  "design": {
    "logo": {
      "url": "https://your-domain.com/logo.png",
      "width": 200,
      "height": 60,
      "alt": "Company Logo"
    },
    "favicon": {
      "url": "https://your-domain.com/favicon.ico"
    },
    "fonts": {
      "primary": "Roboto",
      "secondary": "Arial"
    }
  }
}
```

## Common Use Cases

### Corporate Branding

```json
{
  "colors": {
    "primary": "#003366",
    "secondary": "#0066cc",
    "primaryContrast": "#ffffff"
  },
  "design": {
    "logo": {
      "url": "https://company.com/logo.png"
    }
  }
}
```

### Dark Theme Default

```json
{
  "themes": {
    "dark": {
      "enabled": true,
      "default": true
    }
  }
}
```

### Custom Fonts

```json
{
  "design": {
    "fonts": {
      "primary": "Inter",
      "secondary": "Helvetica"
    }
  }
}
```

## Best Practices

1. **Ensure sufficient contrast** - Test primary/secondary colors with their contrast colors for accessibility
2. **Maintain brand consistency** - Use your official brand colors
3. **Test both themes** - If enabling dark mode, ensure colors work in both light and dark themes
4. **Optimize logo** - Use appropriate image dimensions and formats for fast loading
5. **Consider color psychology** - Choose semantic colors (error, success) that align with user expectations
