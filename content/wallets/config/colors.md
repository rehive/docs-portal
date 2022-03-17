---
date: 2018-09-17T15:21:22+02:00
title: Colors
description: Colors config
weight: 6
---

The theming in the app is based on using two main colors (it used to be four, as shown below with the strikethrough - these may be added again at a later stage), where each of these colors is applied to different parts of the app (headers / buttons / icons) and each has a "Contrast" color for any text / item that needs to be legible against the color.

- primary: dark brand color, used for most of the app (headers, drawers, main buttons)
- secondary: light brand color, used anywhere else color is needed and usually provides contrast to the primary color
- other colors: this config also provides setting colors for text, error, warning, success, positive and negative styling when the default colors clash with the brand colors

```json
{
  "primary": "#5969F6",
  "secondary": "#A4A5F5",

  "primaryContrast": "#f6f6f6",
  "secondaryContrast": "#303030",

  "warning": "#FC8755",
  "error": "#f44336",
  "success": "#4CAF50",
  "positive": "#4CAF50",
  "negative": "#f44336",

  "grey1": "#FAFAFA",
  "grey2": "#E0E0E0",
  "grey3": "#B8B7C6",
  "font": "#707070"
}
```
