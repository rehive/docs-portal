---
date: 2018-09-17T15:21:22+02:00
title: 1. Authentication
description: Authenticating with Rehive
weight: 2
---

The customer arrives on your web page in the browser and selects the _Pay with Rehive_ checkout option. The customer is prompted to authenticate their Rehive account by providing their email and password.  

### Endpoints
URL | methods
---|---
`https://api.rehive.io/3/auth/login/` | `POST`

### Javascript example code:
```
rehive.auth.login({
    user: "joe@example.com",
    company: "rehive_prod",
    password: "joe1234"
}).then(function(user){
    ...
},function(err){
    ...
})
```

<aside class="notice">Note: the <b>company</b> field should be hardcoded to the value <i>"rehive_prod"</i>, while the <b>user</b> and <b>password</b> fields are inputs from the login form</aside>

 The API will return a success response with the user details and the javascript SDK will handle the storing of the authentication token for use on subsequent requests.








