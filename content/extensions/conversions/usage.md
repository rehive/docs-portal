---
date: 2018-09-17T15:21:22+02:00
title: Usage
description: Conversion extension usage.
weight: 4
---

The conversion extension API is organized around the same RESTful principles as the Rehive platform. Many of the rules found in the patform docs are applicable to the conversion service. This is  specifically true of authorization, errors, filters, and pagination.

Similar to the platform the conversion extension is divided into two sections:

1. admin : admin endpoints are prefixed with `admin`
2. user : user endpoints are prefixed with `user`


### Admin

The admin section of the API provides an interface to adminsitrate (create, read, update and delete) the rates.

#### Company

**Retrieve company**

Get the company details associated to this "activation" of the conversion extension.

```bash
curl https://conversion.services.rehive.io/api/admin/company/
    -X GET
    -H "Authorization: token <token>"
    -H "Content-Type: application/json"
```

#### Currencies

**List currencies**

Get a list of currencies that the conversion extension can use.

```bash
curl https://conversion.services.rehive.io/api/admin/currencies/
    -X GET
    -H "Authorization: token <token>"
    -H "Content-Type: application/json"
```

#### Rates

**List rates**

Get a list of rates that the company has created.

```bash
curl https://conversion.services.rehive.io/api/admin/rates/
    -X GET
    -H "Authorization: token <token>"
    -H "Content-Type: application/json"
```

The rates can be filtered by `from_currency__code` and `to_currency__code`.

**Create rate**

Create a new rate for the company.

```bash
curl https://conversion.services.rehive.io/api/admin/rates/
    -X POST
    -H "Authorization: token <token>"
    -d '{"from_currency": "USD", "to_currency": "ZAR"}'
    -H "Content-Type: application/json"
```

<aside class="notice">
	An additional <code>fixed_rate</code> can be included to define a non dynamic rate for the currency pair.
</aside>

**Retrieve rate**

Get one rate in the company.

```bash
curl https://conversion.services.rehive.io/api/admin/rates/<id>/
    -X GET
    -H "Authorization: token <token>"
    -H "Content-Type: application/json"
```

**Update rate**

Update the rate data.

```bash
curl https://conversion.services.rehive.io/api/admin/rates/<id>/
    -X PATCH
    -H "Authorization: token <token>"
    -d '{"fixed_rate": "1"}'
    -H "Content-Type: application/json"
```

**Delete rate**

Delete one of the company rates.

```bash
curl https://conversion.services.rehive.io/api/admin/rates/<id>/
    -X DELETE
    -H "Authorization: token <token>"
    -H "Content-Type: application/json"
```

### User

The user section of the API provides an interface to view the rates.

#### Rates

**List rates**

Get a list of available rates for a company.

```bash
curl https://conversion.services.rehive.io/api/user/rates/
    -X GET
    -H "Authorization: token <token>"
    -H "Content-Type: application/json"
```

The rates can be filtered by `from_currency__code` and `to_currency__code`.

**Retrieve rate**

Get one rate in the company.

```bash
curl https://conversion.services.rehive.io/api/user/rates/<id>/
    -X GET
    -H "Authorization: token <token>"
    -H "Content-Type: application/json"
```
