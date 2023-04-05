---
date: 2018-09-17T15:21:22+02:00
title: Events & available fields
description: Setting up your custom Conversion Extension Integrations directly on Rehive Conversion Service
weight: 4
---




### Transaction events {#transaction-events}


#### Transaction Create {#transaction-create}



* Transaction create event is triggered when a transaction is created. 
* Transaction create data sits inside the transaction resource object `transaction{}.`

Available webhook data fields you can use in an expression:

[https://docs.platform.rehive.com/tag/Admin#operation/admin_transactions_read](https://docs.platform.rehive.com/tag/Admin#operation/admin_transactions_read)

Example JSON with values


```
{
    "id": "b5bc8586-631f-40ed-b2d3-442ec966c058",
    "fee": 0,
    "fees": [],
    "note": "",
    "user": {
        "id": "2dd63505-7371-49cd-ab47-4139beed3e21",
        "email": "sam@rehive.com",
        "groups": [
            {
                "name": "individual",
                "label": "Individual"
            }
        ],
        "mobile": "+115550000",
        "profile": "https://storage.googleapis.com/platform-storage/company/647/users/profiles/e2ef011ba8964170958aa5cb2ae179d1_1647965316.png",
        "username": "samsasko",
        "last_name": "Nobumotoo",
        "temporary": false,
        "first_name": "Keiko"
    },
    "label": "Deposit manual",
    "amount": 10000,
    "parent": null,
    "status": "Initiating",
    "account": "ZRSJRYFGL8",
    "balance": 0,
    "created": 1648593702580,
    "partner": null,
    "subtype": "deposit_manual",
    "tx_type": "credit",
    "updated": 1648593702580,
    "archived": false,
    "currency": {
        "code": "EUR",
        "icon": null,
        "unit": "euro",
        "symbol": "€",
        "description": "Euro",
        "display_code": "EUR",
        "divisibility": 2
    },
    "executed": null,
    "metadata": {},
    "reference": "",
    "collection": "ec0e07aa-1a17-4fd4-9364-1d55a3692031",
    "total_amount": 10000
}
```



#### Transaction Update {#transaction-update}



* Transaction update event is triggered when an existing transaction is updated e.g. status changed, metadata edited.
* Transaction update data sits inside the transaction resource object `transaction{}.`
* **Because this is an update type event, the original value of all fields before the update will be available inside the original_transaction object inside the transaction object.**

Available webhook data fields you can use in an expression:

[https://docs.platform.rehive.com/tag/Admin#operation/admin_transactions_read](https://docs.platform.rehive.com/tag/Admin#operation/admin_transactions_read)

Example JSON with values


```
{
    "id": "b5bc8586-631f-40ed-b2d3-442ec966c058",
    "fee": 0,
    "fees": [],
    "note": "",
    "user": {
        "id": "2dd63505-7371-49cd-ab47-4139beed3e21",
        "email": "sam@rehive.com",
        "groups": [
            {
                "name": "individual",
                "label": "Individual"
            }
        ],
        "mobile": "+115550000",
        "profile": "https://storage.googleapis.com/platform-storage/company/647/users/profiles/e2ef011ba8964170958aa5cb2ae179d1_1647965316.png",
        "username": "samsasko",
        "last_name": "Nobumotoo",
        "temporary": false,
        "first_name": "Keiko"
    },
    "label": "Deposit manual",
    "amount": 10000,
    "parent": null,
    "status": "Complete",
    "account": "ZRSJRYFGL8",
    "balance": 171930,
    "created": 1648593702580,
    "partner": null,
    "subtype": "deposit_manual",
    "tx_type": "credit",
    "updated": 1648593702610,
    "archived": false,
    "currency": {
        "code": "EUR",
        "icon": null,
        "unit": "euro",
        "symbol": "€",
        "description": "Euro",
        "display_code": "EUR",
        "divisibility": 2
    },
    "executed": 1648593702604,
    "metadata": {},
    "reference": "",
    "collection": "ec0e07aa-1a17-4fd4-9364-1d55a3692031",
    "total_amount": 10000,
    "original_transaction": {
        "id": "b5bc8586-631f-40ed-b2d3-442ec966c058",
        "fee": 0,
        "fees": [],
        "note": "",
        "user": {
            "id": "2dd63505-7371-49cd-ab47-4139beed3e21",
            "email": "sam@rehive.com",
            "groups": [
                {
                    "name": "individual",
                "label": "Individual"
                }
            ],
            "mobile": "+115550000",
            "profile": "https://storage.googleapis.com/platform-storage/company/647/users/profiles/e2ef011ba8964170958aa5cb2ae179d1_1647965316.png",
            "username": "samsasko",
            "last_name": "Nobumotoo",
            "temporary": false,
            "first_name": "Keiko"
        },
        "label": "Deposit manual",
        "amount": 10000,
        "parent": null,
        "status": "Initiating",
        "account": "ZRSJRYFGL8",
        "balance": 0,
        "created": 1648593702580,
        "partner": null,
        "subtype": "deposit_manual",
        "tx_type": "credit",
        "updated": 1648593702580,
        "archived": false,
        "currency": {
            "code": "EUR",
            "icon": null,
            "unit": "euro",
            "symbol": "€",
            "description": "Euro",
            "display_code": "EUR",
            "divisibility": 2
        },
        "executed": null,
        "metadata": {},
        "reference": "",
        "collection": "ec0e07aa-1a17-4fd4-9364-1d55a3692031",
        "total_amount": 10000
    }
```



#### Transaction Initiate {#transaction-initiate}

[See Transaction Update - fields are the same.](https://docs.platform.rehive.com/tag/Admin#operation/admin_transactions_read)


#### Transaction Execute {#transaction-execute}

[See Transaction Update - fields are the same.](https://docs.platform.rehive.com/tag/Admin#operation/admin_transactions_read)


### Direct user events {#direct-user-events}


#### User Create {#user-create}



* User create event is triggered when a user is added. 
* User create data sits inside the user resource object `user{}`.

Available webhook data fields you can use in an expression:

[https://docs.platform.rehive.com/tag/Admin#operation/admin_users_read](https://docs.platform.rehive.com/tag/Admin#operation/admin_users_read)

Example JSON with values


```
{
    "id": "7147a26f-c719-44e8-8cee-819ac3e52be3",
    "email": "sam+test55@rehive.com",
    "title": null,
    "gender": null,
    "groups": [
        {
            "name": "individual",
            "label": "Individual"
        }
    ],
    "mobile": null,
    "status": "pending",
    "account": "SP5X3QBJA3",
    "balance": 0,
    "company": "wolfsrain",
    "created": 1648597210755,
    "profile": null,
    "updated": 1648597210775,
    "website": null,
    "archived": false,
    "currency": {
        "code": "EUR",
        "icon": null,
        "unit": "euro",
        "symbol": "€",
        "description": "Euro",
        "display_code": "EUR",
        "divisibility": 2
    },
    "language": "en",
    "metadata": {},
    "settings": {
        "allow_transactions": true,
        "allow_debit_transactions": true,
        "allow_credit_transactions": true,
        "disallowed_transaction_subtypes": []
    },
    "timezone": null,
    "username": "samdriver5",
    "verified": false,
    "id_number": null,
    "last_name": "Driver",
    "temporary": false,
    "birth_date": null,
    "first_name": "Sam",
    "last_login": null,
    "deactivated": false,
    "nationality": "US",
    "fathers_name": null,
    "mothers_name": null,
    "verification": {
        "email": false,
        "mobile": false
    },
    "business_name": null,
    "marital_status": null,
    "available_balance": 0,
    "grandfathers_name": null,
    "grandmothers_name": null,
    "central_bank_number": null
}
```



#### User Update {#user-update}



* User update event is triggered when a user is added. 
* User updatedata sits inside the user resource object `user{}`.
* **Because this is an update type event, the original value of all fields before the update will be available inside the original_user object inside the user object.**

Available webhook data fields you can use in an expression:

[https://docs.platform.rehive.com/tag/Admin#operation/admin_users_read](https://docs.platform.rehive.com/tag/Admin#operation/admin_users_read)

Example JSON with values


```
{
    "id": "7147a26f-c719-44e8-8cee-819ac3e52be3",
    "email": "sam+test55@rehive.com",
    "title": "mx",
    "gender": "female",
    "groups": [
        {
            "name": "individual",
            "label": "Individual"
        }
    ],
    "mobile": null,
    "status": "pending",
    "account": "SP5X3QBJA3",
    "balance": 0,
    "company": "wolfsrain",
    "created": 1648597210755,
    "profile": null,
    "updated": 1648597335168,
    "website": null,
    "archived": false,
    "currency": {
        "code": "EUR",
        "icon": null,
        "unit": "euro",
        "symbol": "€",
        "description": "Euro",
        "display_code": "EUR",
        "divisibility": 2
    },
    "language": "en",
    "metadata": {},
    "settings": {
        "allow_transactions": true,
        "allow_debit_transactions": true,
        "allow_credit_transactions": true,
        "disallowed_transaction_subtypes": []
    },
    "timezone": null,
    "username": "samdriver5",
    "verified": false,
    "id_number": "1234567890",
    "last_name": "Driver",
    "temporary": false,
    "birth_date": null,
    "first_name": "Sam",
    "last_login": null,
    "deactivated": false,
    "nationality": "US",
    "fathers_name": null,
    "mothers_name": null,
    "verification": {
        "email": false,
        "mobile": false
    },
    "business_name": null,
    "original_user": {
        "id": "7147a26f-c719-44e8-8cee-819ac3e52be3",
        "email": "sam+test55@rehive.com",
        "title": null,
        "gender": null,
        "groups": [
            {
                "name": "individual",
                "label": "Individual"
            }
        ],
        "mobile": null,
        "status": "pending",
        "account": "SP5X3QBJA3",
        "balance": 0,
        "company": "wolfsrain",
        "created": 1648597210755,
        "profile": null,
        "updated": 1648597210775,
        "website": null,
        "archived": false,
        "currency": {
            "code": "EUR",
            "icon": null,
            "unit": "euro",
            "symbol": "€",
            "description": "Euro",
            "display_code": "EUR",
            "divisibility": 2
        },
        "language": "en",
        "metadata": {},
        "settings": {
            "allow_transactions": true,
            "allow_debit_transactions": true,
            "allow_credit_transactions": true,
            "disallowed_transaction_subtypes": []
        },
        "timezone": null,
        "username": "samdriver5",
        "verified": false,
        "id_number": null,
        "last_name": "Driver",
        "temporary": false,
        "birth_date": null,
        "first_name": "Sam",
        "last_login": null,
        "deactivated": false,
        "nationality": "US",
        "fathers_name": null,
        "mothers_name": null,
        "verification": {
            "email": false,
            "mobile": false
        },
        "business_name": null,
        "marital_status": null,
        "available_balance": 0,
        "grandfathers_name": null,
        "grandmothers_name": null,
        "central_bank_number": null
    },
    "marital_status": null,
    "available_balance": 0,
    "grandfathers_name": null,
    "grandmothers_name": null,
    "central_bank_number": null
}
```



### User resource events {#user-resource-events}


#### User Password Reset {#user-password-reset}



* User password reset event is triggered either by an admin or a user resetting a password.

Example JSON with values


```
{
    "uid": "Njc5ODQ5",
    "url": "https://app.rehive.com/password/reset/confirm/?uid=Njc5ODQ5&token=b32n8v-f34c7a28f94220ea6002d995205c3528&email=sam+test55@rehive.com",
    "user": {
        "id": "7147a26f-c719-44e8-8cee-819ac3e52be3",
        "email": "sam+test55@rehive.com",
        "title": "mx",
        "gender": "female",
        "groups": [
            {
                "name": "individual",
                "label": "Individual"
            }
        ],
        "mobile": null,
        "status": "pending",
        "account": "SP5X3QBJA3",
        "balance": 0,
        "company": "wolfsrain",
        "created": 1648597210755,
        "profile": null,
        "updated": 1648597335168,
        "website": null,
        "archived": false,
        "currency": {
            "code": "EUR",
            "icon": null,
            "unit": "euro",
            "symbol": "€",
            "description": "Euro",
            "display_code": "EUR",
            "divisibility": 2
        },
        "language": "en",
        "metadata": {},
        "settings": {
            "allow_transactions": true,
            "allow_debit_transactions": true,
            "allow_credit_transactions": true,
            "disallowed_transaction_subtypes": []
        },
        "timezone": null,
        "username": "samdriver5",
        "verified": false,
        "id_number": "1234567890",
        "last_name": "Driver",
        "temporary": false,
        "birth_date": null,
        "first_name": "Sam",
        "last_login": null,
        "deactivated": false,
        "nationality": "US",
        "fathers_name": null,
        "mothers_name": null,
        "verification": {
            "email": false,
            "mobile": false
        },
        "business_name": null,
        "marital_status": null,
        "available_balance": 0,
        "grandfathers_name": null,
        "grandmothers_name": null,
        "central_bank_number": null
    },
    "force": false,
    "token": "*****-0p0e2k1bfba5xee0c64d4b1eb86****"
}
```



#### User Password Set {#user-password-set}



* User password set event is triggered when a user is added for the first time and has not set their password yet. Generally this happens when an admin adds a user,

Example JSON with values


```
{
    "uid": "Njc5ODQ5",
    "url": "https://app.rehive.com/password/reset/confirm/?uid=Njc5ODQ5&token=b32n30-3b3e2a1bfba5cee0c24d4b1eb86886ec&email=sam+test55@rehive.com",
    "user": {
        "id": "7147a26f-c719-44e8-8cee-819ac3e52be3",
        "email": "sam+test55@rehive.com",
        "title": null,
        "gender": null,
        "groups": [
            {
                "name": "individual",
                "label": "Individual"
            }
        ],
        "mobile": null,
        "status": "pending",
        "account": "SP5X3QBJA3",
        "balance": 0,
        "company": "wolfsrain",
        "created": 1648597210755,
        "profile": null,
        "updated": 1648597210775,
        "website": null,
        "archived": false,
        "currency": {
            "code": "EUR",
            "icon": null,
            "unit": "euro",
            "symbol": "€",
            "description": "Euro",
            "display_code": "EUR",
            "divisibility": 2
        },
        "language": "en",
        "metadata": {},
        "settings": {
            "allow_transactions": true,
            "allow_debit_transactions": true,
            "allow_credit_transactions": true,
            "disallowed_transaction_subtypes": []
        },
        "timezone": null,
        "username": "samdriver5",
        "verified": false,
        "id_number": null,
        "last_name": "Driver",
        "temporary": false,
        "birth_date": null,
        "first_name": "Sam",
        "last_login": null,
        "deactivated": false,
        "nationality": "US",
        "fathers_name": null,
        "mothers_name": null,
        "verification": {
            "email": false,
            "mobile": false
        },
        "business_name": null,
        "marital_status": null,
        "available_balance": 0,
        "grandfathers_name": null,
        "grandmothers_name": null,
        "central_bank_number": null
    },
    "force": false,
    "token": "*****-3b3e2j1bfba5xee0c64d4b1eb86****"
}
```



#### User Email Verify {#user-email-verify}



* User email verify event is triggered when a user email is added to a user for the first time or an admin resends a verification event. 

Example JSON with values


```
{
    "key": "****WFpbCI6NjM1MDA3fQ:1nZLZL:osAHOxlwSk0****mvAz4gUSZGvG8AQO1JDNoB7jrHHA",
    "url": "https://app.rehive.com/email/verify/?key=eyJlbWFpbCI6NjM1MDA3fQ:1nZLZL:osAHOxlwSk0gmB2mvAz4gUSZGvG8AQO1JDNoB7jrHHA&email=sam+test5555@rehive.com",
    "user": {
        "id": "7147a26f-c719-44e8-8cee-819ac3e52be3",
        "email": "sam+test55@rehive.com",
        "title": "mx",
        "gender": "female",
        "groups": [
            {
                "name": "individual",
                "label": "Individual"
            }
        ],
        "mobile": null,
        "status": "pending",
        "account": "SP5X3QBJA3",
        "balance": 0,
        "company": "wolfsrain",
        "created": 1648597210755,
        "profile": null,
        "updated": 1648597335168,
        "website": null,
        "archived": false,
        "currency": {
            "code": "EUR",
            "icon": null,
            "unit": "euro",
            "symbol": "€",
            "description": "Euro",
            "display_code": "EUR",
            "divisibility": 2
        },
        "language": "en",
        "metadata": {},
        "settings": {
            "allow_transactions": true,
            "allow_debit_transactions": true,
            "allow_credit_transactions": true,
            "disallowed_transaction_subtypes": []
        },
        "timezone": null,
        "username": "samdriver5",
        "verified": false,
        "id_number": "1234567890",
        "last_name": "Driver",
        "temporary": false,
        "birth_date": null,
        "first_name": "Sam",
        "last_login": null,
        "deactivated": false,
        "nationality": "US",
        "fathers_name": null,
        "mothers_name": null,
        "verification": {
            "email": false,
            "mobile": false
        },
        "business_name": null,
        "marital_status": null,
        "available_balance": 0,
        "grandfathers_name": null,
        "grandmothers_name": null,
        "central_bank_number": null
    },
    "email": "sam+test55@rehive.com"
}
```



#### User Mobile Verify {#user-mobile-verify}



* User mobile verify event is triggered when a user mobile number is added and is not verified. 

Available webhook data fields you can use in an expression:

[https://docs.platform.rehive.com/tag/Admin#operation/admin_users_mobiles_read](https://docs.platform.rehive.com/tag/Admin#operation/admin_users_mobiles_read)

Example JSON with values


```
{
    "key": "60444",
    "user": {
        "id": "567c0532-087d-44c7-9ad0-6df6262e8929",
        "email": "sam+nana@rehive.com",
        "title": null,
        "gender": "not_specified",
        "groups": [
            {
                "name": "individual",
                "label": "Individual"
            }
        ],
        "mobile": "+00112223333",
        "status": "pending",
        "account": "EF257DC5V6",
        "balance": 84827,
        "company": "wolfsrain",
        "created": 1519763199917,
        "profile": null,
        "updated": 1648598452051,
        "website": null,
        "archived": false,
        "currency": {
            "code": "EUR",
            "icon": null,
            "unit": "euro",
            "symbol": "€",
            "description": "Euro",
            "display_code": "EUR",
            "divisibility": 2
        },
        "language": "en",
        "metadata": {},
        "settings": {
            "allow_transactions": true,
            "allow_debit_transactions": true,
            "allow_credit_transactions": true,
            "disallowed_transaction_subtypes": []
        },
        "timezone": null,
        "username": "nana",
        "verified": true,
        "id_number": null,
        "last_name": "Hama",
        "temporary": false,
        "birth_date": "1990-01-01",
        "first_name": "Sama",
        "last_login": 1646072287944,
        "deactivated": false,
        "nationality": "",
        "fathers_name": null,
        "mothers_name": null,
        "verification": {
            "email": true,
            "mobile": false
        },
        "business_name": null,
        "marital_status": null,
        "available_balance": 81147,
        "grandfathers_name": null,
        "grandmothers_name": null,
        "central_bank_number": null
    },
    "mobile": "+00112223333"
}
```



#### User MFA SMS Verify {#user-mfa-sms-verify}



* User MFA SMS verify is triggered when a user begins to set up SMS MFA.

Example JSON with values


```
{
    "user": {
        "id": "567c0532-087d-44c7-9ad0-6df6262e8929",
        "email": "sam+nana@rehive.com",
        "title": null,
        "gender": "not_specified",
        "groups": [
            {
                "name": "individual",
                "label": "Individual"
            }
        ],
        "mobile": "+11223334444",
        "status": "pending",
        "account": "EF257DC5V6",
        "balance": 84827,
        "company": "wolfsrain",
        "created": 1519763199917,
        "profile": null,
        "updated": 1648598723225,
        "website": null,
        "currency": {
            "code": "EUR",
            "icon": null,
            "unit": "euro",
            "symbol": "€",
            "description": "Euro",
            "display_code": "EUR",
            "divisibility": 2
        },
        "language": "en",
        "metadata": {},
        "settings": {
            "allow_transactions": true,
            "allow_debit_transactions": true,
            "allow_credit_transactions": true,
            "disallowed_transaction_subtypes": []
        },
        "timezone": null,
        "username": "nana",
        "verified": true,
        "id_number": null,
        "last_name": "Hama",
        "temporary": false,
        "birth_date": "1978-01-01",
        "first_name": "Sama",
        "nationality": "",
        "fathers_name": null,
        "mothers_name": null,
        "verification": {
            "email": true,
            "mobile": false
        },
        "business_name": null,
        "marital_status": null,
        "available_balance": 81147,
        "grandfathers_name": null,
        "grandmothers_name": null,
        "central_bank_number": null
    },
    "token": "******",
    "mobile": "+11223334444"
}
```



#### User Email Create {#user-email-create}



* User email create event is triggered when a user email is added to a user for the first time. 
* User email create data sits inside the resource object `email{}`.

Available webhook data fields you can use in an expression:

[https://docs.platform.rehive.com/tag/Admin#operation/admin_users_emails_read](https://docs.platform.rehive.com/tag/Admin#operation/admin_users_emails_read)

Example JSON with values


```
{
    "id": 635007,
    "user": {
        "id": "7147a26f-c719-44e8-8cee-819ac3e52be3",
        "email": "sam+test55@rehive.com",
        "groups": [
            {
                "name": "individual",
                "label": "Individual"
            }
        ],
        "mobile": null,
        "profile": null,
        "username": "samdriver5",
        "last_name": "Driver",
        "temporary": false,
        "first_name": "Sam"
    },
    "email": "sam+test5555@rehive.com",
    "created": 1648597691770,
    "primary": false,
    "updated": 1648597691770,
    "verified": false,
    "temporary": false
}
```



#### User Email Update {#user-email-update}



* User email update is triggered when an admin or user updates an email address, usually to set it as primary or not.
* User email update data sits inside the resource object `email{}`.
* **Because this is an update type event, the original value of all fields before the update will be available inside the original_email object inside the email object.**

Available webhook data fields you can use in an expression:

[https://docs.platform.rehive.com/tag/Admin#operation/admin_users_emails_read](https://docs.platform.rehive.com/tag/Admin#operation/admin_users_emails_read)

Example JSON with values


```
{
    "id": 635005,
    "user": {
        "id": "7147a26f-c719-44e8-8cee-819ac3e52be3",
        "email": "sam+test555@rehive.com",
        "groups": [
            {
                "name": "individual",
                "label": "Individual"
            }
        ],
        "mobile": null,
        "profile": null,
        "username": "samdriver5",
        "last_name": "Driver",
        "temporary": false,
        "first_name": "Sam"
    },
    "email": "sam+test555@rehive.com",
    "created": 1648597633774,
    "primary": true,
    "updated": 1648644032251,
    "verified": false,
    "temporary": false,
    "original_email": {
        "id": 635005,
        "user": {
            "id": "7147a26f-c719-44e8-8cee-819ac3e52be3",
            "email": "sam+test555@rehive.com",
            "groups": [
                {
                    "name": "individual",
                    "label": "Individual"
                }
            ],
            "mobile": null,
            "profile": null,
            "username": "samdriver5",
            "last_name": "Driver",
            "temporary": false,
            "first_name": "Sam"
        },
        "email": "sam+test555@rehive.com",
        "created": 1648597633774,
        "primary": false,
        "updated": 1648597633774,
        "verified": false,
        "temporary": false
    }
}
```



#### User Mobile Create {#user-mobile-create}



* User mobile create event is triggered when a user mobile number is added for the first time. 
* User mobile create data sits inside the resource object `mobile{}`.

Available webhook data fields you can use in an expression:

[https://docs.platform.rehive.com/tag/Admin#operation/admin_users_mobiles_read](https://docs.platform.rehive.com/tag/Admin#operation/admin_users_mobiles_read)

Example JSON with values


```
{
    "id": 59944,
    "user": {
        "id": "567c0532-087d-44c7-9ad0-6df6262e8929",
        "email": "sam+nana@rehive.com",
        "groups": [
            {
                "name": "individual",
                "label": "Individual"
            }
        ],
        "mobile": "+00112223333",
        "profile": null,
        "username": "nana",
        "last_name": "Hama",
        "temporary": false,
        "first_name": "Sama"
    },
    "number": "+00112223333",
    "created": 1648598723338,
    "primary": true,
    "updated": 1648598723338,
    "archived": false,
    "verified": false,
    "temporary": false
}
```



#### User Mobile Update {#user-mobile-update}



* User mobile update event is triggered when a user mobile number is edited e.g. made primary or not.
* User mobile update data sits inside the resource object `mobile{}`.
* **Because this is an update type event, the original value of all fields before the update will be available inside the original_mobile object inside the mobile object.**

Available webhook data fields you can use in an expression:

[https://docs.platform.rehive.com/tag/Admin#operation/admin_users_mobiles_read](https://docs.platform.rehive.com/tag/Admin#operation/admin_users_mobiles_read)

Example JSON with values


```
{
    "id": 60121,
    "user": {
        "id": "567c0532-087d-44c7-9ad0-6df6262e8929",
        "email": "sam+nana@rehive.com",
        "groups": [
            {
                "name": "individual",
                "label": "Individual"
            }
        ],
        "mobile": "+00112223333",
        "profile": null,
        "username": "nana",
        "last_name": "Hama",
        "temporary": false,
        "first_name": "Sama"
    },
    "number": "+00112223333",
    "created": 1648743036031,
    "primary": true,
    "updated": 1648743086915,
    "archived": false,
    "verified": false,
    "temporary": false,
    "original_mobile": {
        "id": 60121,
        "user": {
            "id": "567c0532-087d-44c7-9ad0-6df6262e8929",
            "email": "sam+nana@rehive.com",
            "groups": [
                {
                    "name": "individual",
                "label": "Individual"
                }
            ],
            "mobile": "+00112223333",
            "profile": null,
            "username": "nana",
            "last_name": "Hama",
            "temporary": false,
            "first_name": "Sama"
        },
        "number": "+00112223333",
        "created": 1648743036031,
        "primary": false,
        "updated": 1648743036031,
        "archived": false,
        "verified": false,
        "temporary": false
    }
}
```



#### Address Create {#address-create}



* Address create event is triggered when an address is added to a user for the first time. 
* Address create data sits inside the address resource object `address{}`.

Available webhook data fields you can use in an expression:

[https://docs.platform.rehive.com/tag/Admin#operation/admin_users_addresses_read](https://docs.platform.rehive.com/tag/Admin#operation/admin_users_addresses_read)

Example JSON with values


```
{
    "id": 14300,
    "city": "Tokyo",
    "type": "billing",
    "user": {
        "id": "2dd63505-7371-49cd-ab47-4139beed3e21",
        "email": "keiko@keiko.com",
        "groups": [
            {
                "name": "individual",
                "label": "Individual"
            }
        ],
        "mobile": "+11111111111",
        "profile": "https://storage.googleapis.com/platform-storage/company/647/users/profiles/e2ef011ba8964170958aa5cb2ae179d1_1647965316.png",
        "username": "keiko",
        "last_name": "Nobumotoo",
        "temporary": false,
        "first_name": "Keiko"
    },
    "line_1": "Minato City",
    "line_2": "Tokyo",
    "status": "pending",
    "country": "JP",
    "created": 1647955241132,
    "updated": 1647955241132,
    "archived": false,
    "postal_code": "1008602",
    "state_province": "Tokyo"
}
```



#### Address Update {#address-update}



* Address update event is triggered when an existing address on a user is edited.
* Address update data sits inside the address resource object `address{}`.
* **Because this is an update type event, the original value of all fields before the update will be available inside the original_address object inside the address object.**

Available webhook data fields you can use in an expression:

[https://docs.platform.rehive.com/tag/Admin#operation/admin_users_addresses_read](https://docs.platform.rehive.com/tag/Admin#operation/admin_users_addresses_read)

Example JSON with values


```
{
    "id": 14300,
    "city": "Osaka",
    "type": "billing",
    "user": {
        "id": "2dd63505-7371-49cd-ab47-4139beed3e21",
        "email": "keiko@keiko.com",
        "groups": [
            {
                "name": "individual",
                "label": "Individual"
            }
        ],
        "mobile": "+11111111111",
        "profile":   "https://storage.googleapis.com/platform-storage/company/647/users/profiles/e2ef011ba8964170958aa5cb2ae179d1_1647965316.png",
        "username": "keiko",
        "last_name": "Nobumotoo",
        "temporary": false,
        "first_name": "Keiko"
    },
    "line_1": "3 Chrome-r-138 Sugimoto",
    "line_2": "Sumiyoshi Ward",
    "status": "pending",
    "country": "JP",
    "created": 1647955241132,
    "updated": 1647955241132,
    "archived": false,
    "postal_code": "1008602",
    "state_province": "Osaka",
    "original_address": {
        "id": 14300,
   "city": "Tokyo",
         "type": "billing",
         "user": {
             "id": "2dd63505-7371-49cd-ab47-4139beed3e21",
             "email": "keiko@keiko.com",
             "groups": [
                 {
                "name": "individual",
                "label": "Individual"
                 }
                  ],
             "mobile": "+11111111111",
             "profile": "https://storage.googleapis.com/platform-storage/company/647/users/profiles/e2ef011ba8964170958aa5cb2ae179d1_1647965316.png",
             "username": "keiko",
             "last_name": "Nobumotoo",
             "temporary": false,
             "first_name": "Keiko"
         },
         "line_1": "Minato City",
         "line_2": "Tokyo",
         "status": "pending",
         "country": "JP",
         "created": 1647955241132,
         "updated": 1647955241132,
         "archived": false,
         "postal_code": "1008602",
         "state_province": "Tokyo"
         }
}
```



#### Document Create {#document-create}



* Document create event is triggered when a document is added to a user. 
* Document create data sits inside the document resource object `document{}`.

Available webhook data fields you can use in an expression:

[https://docs.platform.rehive.com/tag/Admin#operation/admin_users_documents_read](https://docs.platform.rehive.com/tag/Admin#operation/admin_users_documents_read)

Example JSON with values


```
{
    "id": 24514,
    "file": "https://storage.googleapis.com/platform-storage/company/647/documents/ba141415d08c43cf8f35b1cd6454890a_1647965677.png",
    "note": null,
    "user": {
        "id": "2dd63505-7371-49cd-ab47-4139beed3e21",
        "email": "keiko@keiko.com",
        "groups": [
            {
                "name": "individual",
                "label": "Individual"
            }
        ],
        "mobile": "+11111111111",
        "profile": "https://storage.googleapis.com/platform-storage/company/647/users/profiles/e2ef011ba8964170958aa5cb2ae179d1_1647965316.png",
        "username": "keiko",
        "last_name": "Nobumotoo",
        "temporary": false,
        "first_name": "Keiko"
    },
    "status": "verified",
    "created": 1647965677302,
    "expires": null,
    "updated": 1647965677302,
    "archived": false,
    "metadata": {},
    "document_type": "bank_statement",
    "document_category": "proof_of_address"
}
```



#### Document Update {#document-update}



* Document update event is triggered when an existing document is edited.
* Document update data sits inside the document resource object `document{}`.
* **Because this is an update type event, the original value of all fields before the update will be available inside the original_document object inside the document object.**

Available webhook data fields you can use in an expression:

[https://docs.platform.rehive.com/tag/Admin#operation/admin_users_documents_read](https://docs.platform.rehive.com/tag/Admin#operation/admin_users_documents_read)

Example JSON with values


```
{
    "id": 1172,
    "file": "https://storage.googleapis.com/platform-storage/users/23166/documents/2260128d8f224a7eb262a675a262c647_1552061543.png",
    "note": null,
    "user": {
        "id": "2dd63505-7371-49cd-ab47-4139beed3e21",
        "email": "sam@rehive.com",
        "groups": [
            {
                "name": "individual",
                "label": "Individual"
            }
        ],
        "mobile": "+11111111111",
        "profile": "https://storage.googleapis.com/platform-storage/company/647/users/profiles/e2ef011ba8964170958aa5cb2ae179d1_1647965316.png",
        "username": "samsasko",
        "last_name": "Nobumotoo",
        "temporary": false,
        "first_name": "Keiko"
    },
    "status": "incomplete",
    "created": 1552061543220,
    "expires": null,
    "updated": 1648598854623,
    "archived": false,
    "metadata": {
        "rehive_context": {
            "full_document": true,
            "image_quality": true,
            "color_document": true
        }
    },
    "document_type": "id_confirmation",
    "document_category": "advanced_proof_of_identity",
    "original_document": {
        "id": 1172,
        "file": "https://storage.googleapis.com/platform-storage/users/23166/documents/2260128d8f224a7eb262a675a262c647_1552061543.png",
        "note": null,
        "user": {
            "id": "2dd63505-7371-49cd-ab47-4139beed3e21",
            "email": "sam@rehive.com",
            "groups": [
                {
                    "name": "individual",
                    "label": "Individual"
                }
            ],
            "mobile": "+11111111111",
            "profile": "https://storage.googleapis.com/platform-storage/company/647/users/profiles/e2ef011ba8964170958aa5cb2ae179d1_1647965316.png",
            "username": "samsasko",
            "last_name": "Nobumotoo",
            "temporary": false,
            "first_name": "Keiko"
        },
        "status": "pending",
        "created": 1552061543220,
        "expires": null,
        "updated": 1637224865710,
        "archived": false,
        "metadata": {
            "hello": "world",
            "rehive_context": {
                "full_document": true,
                "image_quality": true,
                "color_document": true
            }
        },
        "document_type": "id_confirmation",
        "document_category": "advanced_proof_of_identity"
    }
}
```



#### Bank account Create {#bank-account-create}



* Bank account create event is triggered when a bank account is added to a user. 
* Bank account create data sits inside the bank account resource object `bank_account{}`.

Available webhook data fields you can use in an expression:

[https://docs.platform.rehive.com/tag/Admin#operation/admin_users_bank-accounts_read](https://docs.platform.rehive.com/tag/Admin#operation/admin_users_bank-accounts_read)

Example JSON with values


```
{
    "id": 7313,
    "bic": null,
    "code": "bank_account_kPjAIRPMTuin",
    "iban": null,
    "name": "Main account",
    "type": "check",
    "user": {
        "id": "7147a26f-c719-44e8-8cee-819ac3e52be3",
        "email": "sam+test55@rehive.com",
        "groups": [
            {
                "name": "individual",
                "label": "Individual"
            }
        ],
        "mobile": null,
        "profile": null,
        "username": "samdriver5",
        "last_name": "Driver",
        "temporary": false,
        "first_name": "Sam"
    },
    "swift": null,
    "number": "1234567890",
    "status": "pending",
    "created": 1648599046082,
    "updated": 1648599046082,
    "archived": false,
    "metadata": {},
    "bank_code": "11111",
    "bank_name": "Revolut",
    "currencies": [],
    "branch_code": "000555",
    "branch_address": null,
    "routing_number": null
}
```



#### Bank account Update {#bank-account-update}



* Bank account update event is triggered when an existing bank account is edited.
* Bank account update data sits inside the bank account resource object `bank_account{}`.
* **Because this is an update type event, the original value of all fields before the update will be available inside the original_bank_account object inside the bank account object.**

Available webhook data fields you can use in an expression:

[https://docs.platform.rehive.com/tag/Admin#operation/admin_users_bank-accounts_read](https://docs.platform.rehive.com/tag/Admin#operation/admin_users_bank-accounts_read)

Example JSON with values


```
{
    "id": 7313,
    "bic": null,
    "code": "bank_account_kPjAIRPMTuin",
    "iban": null,
    "name": "Main account",
    "type": "check",
    "user": {
        "id": "7147a26f-c719-44e8-8cee-819ac3e52be3",
        "email": "sam+test55@rehive.com",
        "groups": [
            {
                "name": "individual",
                "label": "Individual"
            }
        ],
        "mobile": null,
        "profile": null,
        "username": "samdriver5",
        "last_name": "Driver",
        "temporary": false,
        "first_name": "Sam"
    },
    "swift": "REVOGB2L",
    "number": "1234567890",
    "status": "pending",
    "created": 1648599046082,
    "updated": 1648599121692,
    "archived": false,
    "metadata": {},
    "bank_code": "11111",
    "bank_name": "Revolut",
    "currencies": [
        {
            "code": "EUR",
            "icon": null,
            "unit": "euro",
            "symbol": "€",
            "description": "Euro",
            "display_code": "EUR",
            "divisibility": 2
        }
    ],
    "branch_code": "000555",
    "branch_address": null,
    "routing_number": null,
    "original_bank_account": {
        "id": 7313,
        "bic": null,
        "code": "bank_account_kPjAIRPMTuin",
        "iban": null,
        "name": "Main account",
        "type": "check",
        "user": {
            "id": "7147a26f-c719-44e8-8cee-819ac3e52be3",
            "email": "sam+test55@rehive.com",
            "groups": [
                {
                    "name": "individual",
                    "label": "Individual"
                }
            ],
            "mobile": null,
            "profile": null,
            "username": "samdriver5",
            "last_name": "Driver",
            "temporary": false,
            "first_name": "Sam"
        },
        "swift": null,
        "number": "1234567890",
        "status": "pending",
        "created": 1648599046082,
        "updated": 1648599046082,
        "archived": false,
        "metadata": {},
        "bank_code": "11111",
        "bank_name": "Revolut",
        "currencies": [
            {
                "code": "EUR",
                "icon": null,
                "unit": "euro",
                "symbol": "€",
                "description": "Euro",
                "display_code": "EUR",
                "divisibility": 2
            }
        ],
        "branch_code": "000555",
        "branch_address": null,
        "routing_number": null
    }
}
```



#### Crypto Account Create {#crypto-account-create}



* Crypto account create event is triggered when a crypto account is added to a user. 
* Crypto account create data sits inside the crypto account resource object `crypto_account{}`.

Available webhook data fields you can use in an expression:

[https://docs.platform.rehive.com/tag/Admin#operation/admin_users_crypto-accounts_read](https://docs.platform.rehive.com/tag/Admin#operation/admin_users_crypto-accounts_read)

Example JSON with values


```
{
    "id": 8235,
    "code": "crypto_account_Jdc4gxyYHALR",
    "name": null,
    "user": {
        "id": "7147a26f-c719-44e8-8cee-819ac3e52be3",
        "email": "sam+test55@rehive.com",
        "groups": [
            {
                "name": "individual",
                "label": "Individual"
            }
        ],
        "mobile": null,
        "profile": null,
        "username": "samdriver5",
        "last_name": "Driver",
        "temporary": false,
        "first_name": "Sam"
    },
    "status": "pending",
    "address": "3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5",
    "created": 1648599358438,
    "network": "mainnet",
    "updated": 1648599358438,
    "archived": false,
    "metadata": {},
    "currencies": [],
    "crypto_type": "bitcoin"
}
```



#### Crypto Account Update {#crypto-account-update}



* Crypto account update event is triggered when a crypto account is  updated. 
* Crypto account update data sits inside the crypto account resource object `crypto_account{}`.
* **Because this is an update type event, the original value of all fields before the update will be available inside the original_crypto_account object inside the crypto account object.**

Available webhook data fields you can use in an expression:

[https://docs.platform.rehive.com/tag/Admin#operation/admin_users_crypto-accounts_read](https://docs.platform.rehive.com/tag/Admin#operation/admin_users_crypto-accounts_read)

Example JSON with values


```
{
    "id": 8235,
    "code": "crypto_account_Jdc4gxyYHALR",
    "name": null,
    "user": {
        "id": "7147a26f-c719-44e8-8cee-819ac3e52be3",
        "email": "sam+test55@rehive.com",
        "groups": [
            {
                "name": "individual",
                "label": "Individual"
            }
        ],
        "mobile": null,
        "profile": null,
        "username": "samdriver5",
        "last_name": "Driver",
        "temporary": false,
        "first_name": "Sam"
    },
    "status": "declined",
    "address": "3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5",
    "created": 1648599358438,
    "network": "mainnet",
    "updated": 1648599422649,
    "archived": false,
    "metadata": {},
    "currencies": [],
    "crypto_type": "bitcoin",
    "original_crypto_account": {
        "id": 8235,
        "code": "crypto_account_Jdc4gxyYHALR",
        "name": null,
        "user": {
            "id": "7147a26f-c719-44e8-8cee-819ac3e52be3",
            "email": "sam+test55@rehive.com",
            "groups": [
                {
                    "name": "individual",
                    "label": "Individual"
                }
            ],
            "mobile": null,
            "profile": null,
            "username": "samdriver5",
            "last_name": "Driver",
            "temporary": false,
            "first_name": "Sam"
        },
        "status": "pending",
        "address": "3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5",
        "created": 1648599358438,
        "network": "mainnet",
        "updated": 1648599358438,
        "archived": false,
        "metadata": {},
        "currencies": [],
        "crypto_type": "bitcoin"
    }
}
```

