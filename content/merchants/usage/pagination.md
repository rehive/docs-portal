---
date: 2018-09-17T15:21:22+02:00
title: Pagination
description: Pagination.
weight: 3
---

On listing pages, the API provides a way to paginate results. The default pagination method offered by the API is offset pagination, which allows navigation to an arbitrary point in a list of results as well as via `next` and `prev`attributes. The JSON format returned on paginated listing pages looks like this:

```shell
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

The default page size is 15 but can be changed by adding a `page_size` query parameter to the request URL.
