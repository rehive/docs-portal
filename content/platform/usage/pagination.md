---
date: 2018-09-17T15:21:22+02:00
title: Pagination
description: Pagination.
weight: 3
---

On listing pages, the platform provides a way to paginate results. The default pagination method offered by the platform is page pagination, which allows navigation to a "paged based" point in a list of results as well as via `next` and `prev`attributes. The JSON format returned on paginated listing pages looks like this:

```json
 {
    "status": "success",
    "data": {
        "count": 1,
        "next": null,
        "previous": null,
        "results": []
    }
}
```

The default page size is 15 but can be changed by adding a `page_size` query parameter to the request URL. The max page size is 250.

### Cursor pagination

You should consider using cursor pagination if you want to retrieve results in a faster and more exact manner. Cursor pagination does not count the total results and instead only returns next/prev cursor points. This allows for much faster queries and also means that you will never see dplicate results on resources with high creation rates.

You can use cursor pagination by including a `pagination=cursor` GET param on any request to a paginated endpoint. The cursor pagination response looks like:

```json
 {
    "status": "success",
    "data": {
        "next": null,
        "previous": null,
        "results": []
    }
}
```

**Limitations**

Cursor pagination ordering can only be performed on incrementing, immutable, and unique (or close to unique) values. For this reason, only the following fields can be used for ordering:

- `created`
- `-created`
