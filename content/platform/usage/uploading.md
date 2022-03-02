---
date: 2022-02-09T15:21:22+02:00
title: Uploading
description: Upploading files and images.
weight: 8
---

Many resources in Rehive have file or image properties (documents, icons, profile images etc.). In order to populate these properties you will have to upload files through the the API. 

Uploads in Rehive should be done using a `POST`, `PUT` or `PATCH` (depending on the endpoint) HTTP method with a `Content-Type` of `multipart/form-data`. Individual files myst be smaller than 5MB (5242880 bytes).

The following sections describe some common methods that can be used to upload files. A user document upload is used as the example in all cases.

## cURL

When testing, you can use [cURL](https://curl.se/):

```shell
curl https://api.rehive.com/3/user/documents/ \
  -X POST -H "Authorization: Token {token}" \
  -H "Content-Type: multipart/form-data" \
  -F file=@localfilename.ext \
  -F document_type=other
```

## JavaScript

Within a web browser context, you can upload files using the [Rehive JavaScript SDK](https://www.npmjs.com/package/rehive):

```javascript
const rehive = new Rehive({
    apiVersion: 3, 
    // Add your API token here.
    apiToken: "{token}"
});

var fileSelected = document.getElementById("fileInput").files[0],
    formData = new FormData;

formData.append('file', fileSelected);
formData.append('document_type', document_type);
formData.append('metadata', JSON.stringify(metadata));

rehive.user.documents.create(formData).then(function (res) {
    ...
}, function (err) {
    ...
});
```

Or alternatively, when in NodeJS, you can combine the [Rehive JavaScript SDK](https://www.npmjs.com/package/rehive) and [Form-Data](https://www.npmjs.com/package/form-data) libraries:

```javascript
const FormData = require('form-data');
const fs = require('fs');
const Rehive = require('rehive');

const rehive = new Rehive({
    apiVersion: 3, 
    // Add your API token here.
    apiToken: "{token}"
});

const filePath = 'test.png';
fs.readFile(filePath, (err, imageData) => {
  if (err) {
    throw err;
  }

  const form = new FormData();

  // Take note that the filename must be included.
  form.append('file', imageData, {
    contentType: 'image/png',
    filename: 'test.png',
  });
  form.append('document_type', 'other');

  rehive.user.documents.create(form).then(function (res) {
    console.log(res);
  }, function (err) {
    console.log(err);
  });
});
```

## Python

You can use the [Rehive Python SDK](https://pypi.org/project/rehive/) to upload files:

```python
from rehive import Rehive

# Add your API token here.
rehive = Rehive("{token}")

rehive.user.documents.upload(
    document_type='other',
    # Note: The file argument should be the full path of the file.
    file=file
)
```
