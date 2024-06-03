---
date: 2018-09-17T15:21:22+02:00
title: Documents
description: Documents in the platform.
weight: 6
---

Documents are used by users to upload any documentation that a company may require. Usually documents are used to upload KYC related files such as proof of identity, proof of funds, proof of residence etc.

### Document types

The Platform provides a way for admins to specify a list of custom document types supported by their company. By default, companies will come preloaded with a known list of common documents but it is often useful for companies to upload additional document types that they are interested in.

Once configured, document types can be used within the tier and tier requirements system to ensure a user uploads certain documents required by the company's business-case.

### Verification

The Platform provides facilities (via the API) to manually review and verify documents but it does not perform any verification/validation itself. To verify documents you will need to use one of the followng methods:

- Manual verification by your team.
- Automatic verification via the Rehive supported Onfido extension ().
- Automatic verification via your choice of provider by creating your own custom extension.

It is important to note, that even with the automatic approaches, some amount of manual intervention may be required as the automated verification tools do not always provide entirely certain evluations on document uploads.
