---
date: 2018-09-17T15:21:22+02:00
title: FAQs
description: Frequently asked questions config
weight: 7
---

Config key: `faqs`

This section configures the list of frequently asked questions in the apps help section

Types: (s) - string, (b) - boolean, (i) - integer

---

- `description`: (s: '') helper text displayed below FAQ header
- `questions`: ([{}]: []) array of question objects with the following fields
  - `question`: (s: '') title/question string
  - `answer`: (s: '') answer to the question

```json
"faqs": {
  "description": "",
  "questions": []
}
```
