---
date: 2018-09-17T15:21:22+02:00
title: Permissions
description: Permissions.
weight: 5
---

The Platform supports fine-grained permission control on users and groups. This is done via a preset list of permissions that can be applied on groups and users. Permissions attached to a group are applicable to all users in that group. Permissions attached to a user can add additional permissions on top of those granted by the group.

The default company configuration in the platform provides sensible group and user permissions, but depending on the use-case it may be necessary to modify the defaults. The easiest way to manage permissions is via the [dashboard](https://dashboard.rehive.com) but it is possible to manage permissions programmtically through the API as well.

<aside class="notice">
It is important to note that while you can configure permissions on both the user and admin section APIs, you cannot override API limitations. For instance, the user API does not offer an endpoint or method for adding permissions (to a user or group). Thus, no amount of permissions will allow a user to add permissions via the user API.
</aside>

### Property level permissions (beta)

In addition to offering permissions on resources as a whole, the API provides a way to modify the property level permissions on resources. This can be used to deny access to certain properties processed by the API. For instance, when storing `metadata` on a transaction you might want to hide certain values from your end users while still allowing your admin team to access them.

<aside class="warning">
This is a beta feature that is still under active development.
</aside>

Property level permissions are configured by adding keys to a `properties` field available on all group and user permissions. Each key represents a property on a resource (permission type) that should be denied/allowed when that permissions level (view, add, change) is relevent. For instance if the permission level is `view` then any keys in the property object will be removed when returing the resource in an API response. On the otherhand, property keys related to the permission levels `add` or `change` are removed from the request body during request parsing.

The `properties` field is formatted like this:

```json
{
	"properties": {
		"{key}": "{action}"
	}
}
```

The `key` can be any string value that represents a dotted path to a JSON property. The `action` must be either `deny` or `allow`. The `allow` keyword is only relevent if you want to allow access to a property on a user but the group they are in has a deny action applied to that property already.

Correctly configured property level permissions will look like this:

```json
{
	"properties": {
		"metadata.example_field_1": "deny",
		"metadata.example_field_2": "deny",
	}
}
```

#### Limitations

The following limitations apply to property level permissions currently:

- Only `transaction` type permissions can have properties configured on them.
- Only sub properties of the `metadata` field can be specified.

Both of these limitations will be removed as we roll out future iterations on this feature.
