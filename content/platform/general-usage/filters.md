---
date: 2018-09-17T15:21:22+02:00
title: Filters
description: Filters.
weight: 3
---

The platform provides a way to filter and/or sort on listing pages. All filtering and sorting is done via query parameters in the GET request.

To filter by a field, include it in the URL as a standard query parameter with a `?` delimiting the URL and the start of the query parameters and a `&` between each filtered field. This can be seen below:

```shell
curl https://api.rehive.com/3/admin/transactions/?status=complete&tx_type=debit&orderby=created \
  -X GET \
  -H "Authorization: Token {token}" \
  -H "Content-Type: application/json"
```

To sort results, an endpoint will often also include an optional `orderby` query parameter.

### Complex Filter Fields

There are several filter field types in the API that offer more complex interactions:

#### Date Fields

Date fields can be further narrowed down by filtering on ranges using the greater than (`__gt`) and less than (`__lt`) suffixes (eg. `created__gt`).

Dates in the platform are always represented as millisecond UNIX timestamps. When querying by dates or date ranges you will need to always do so using a millisecond UNIX timestamp as well (eg. `1647447399000`).

#### Metadata Fields

Custom metadata fields can be filtered on their first level children by adding the child attribute as a suffix (`__child_attribute`). So if metadata contains a JSON object with an attribute `name` it can
be filtered using `?metadata__name=joshua`.
