---
date: 2018-09-17T15:21:22+02:00
title: Sliders
description: Sliders config
weight: 14
---

This section contains multiple arrays of slide objects that are displayed at different locations in the app. 

Types: (s) - string, (b) - boolean, (i) - integer

---

Currently available in the following locations:

- preAuth - in grey label it's after choosing the app ID, in white label it's after first start up
- auth - carousel on the landing page
- postAuth - after successful registration flow

Each slide object has the following properties

- id: (i) unique identifier of slide
- title: (s) title to be displayed on slide
- description: (s) description to be displayed on slide
- image: (s) image to be displayed on the slide. Image file must be located in `/assets/icons` Note: this is not currently working - also needs to be improved to fetch the images from a web server instead of local storage.
