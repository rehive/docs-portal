---
date: 2023-05-09T15:21:22+02:00
title: Metadata
description: Metadata storage on resources.
weight: 11
---

Many resources in the platform have a `metadata` field that can be used to store miscellaneous custom information. This field is used by extensions and applications to store data like: UI/UX preferences, additional references and notes and relationships to extensions etc.  

The `metadata` field always defaults to `null` and when populated is a JSON object with some additional rules:

- Keys must only contain alphanumeric characters, numbers and single underscores.
- Keys may not contain double underscores like `__`. Double underscores are reserved for lookups on fields.
- Keys and values are merged using [JSON Merge Patch](https://datatracker.ietf.org/doc/html/rfc7386) when adding metadata to a field that already contains metadata.
- Values may not be `null` (this is required to support JSON Merge Patch).
- The max size of the entire `metadata` field (per resource) is capped at 104857 bytes.

<aside class="warning">
<b>Important:</b> The metadata field is visible to end-users so should not be used to store information that should be hidden from them. Additionally, it may be better to store extra data in an extension rather than the metadata if you intend to use said data to perform filters or data mutations.
</aside>

### JSON Merge Patch

In order to allow simultaneous and partial updates to `metadata` fields, the platform always runs a [JSON Merge Patch](https://datatracker.ietf.org/doc/html/rfc7386) when the `metadata` field is updated.

As a result, the metadata field can be used in the following ways:
- The metadata field can be partially updated without unsetting existing data.
- The metadata can be edited simultaneously without the risk of losing data between multiple edits.
- Keys can be explicitly unset by setting their value to `null`.

For example, if we have a resource with the following metadata:

```json
{
    "a": "x",
    "b": "y"
}
```

And we update the field with the following:

```json
{
    "b": null,
    "c": "y"  
}
```

The end result of the update will be:

```json
{
    "a": "x",
    "c": "y"  
}
```

As you can see, `b` was removed (because it was set to `null`), `c` was added, and `a` was kept (even though it was not explicitly included in the update data).
