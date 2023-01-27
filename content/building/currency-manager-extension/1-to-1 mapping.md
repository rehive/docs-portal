---
date: 2018-09-17T15:21:22+02:00
title: 1-to-1 mapping
description: High level transaction flows performed by a Currency Manager Extension in a 1-to-1 mapped setup.
weight: 5
---

A 1-to-1 mapped extension aims to replicate an external ledger within the Rehive ledger system. With the added requirement of the external ledgers accounts/balances being mapped to specific users accounts/balances within Rehive.

This is an especially useful method for keeping strict controls that ensure that user funds are available at all times.

To achieve a 1-to-1 mapped setup, both user changes and transaction changes need to be synced between Rehive and the external Ledger. For example, if a transaction occurs on the external ledger that moves funds between two user accounts the currency manager extension should find the equivalent Rehive user accounts and replicate that transfer between them.

### Can my third party ledger be mapped 1-to-1?
If the third party ledger can answer yes to the following questions, then it is possible to fit it into a 1-to-1 mapped structure.

1. It can generate a separate custodial account objects (bank account, custodial crypto account etc) for each Rehive user’s account.
2. Each account object on the third party stores a separate balance.
3. The third party can notify your extension when a transaction has affected an account object. 

Optionally for transfers the third party needs to answer yes to:
1. It can create transfers between the generated account entities.

### Handling user accounts
In a 1-to-1 mapped system, it is required that a Rehive account object for a user is linked directly to an account object in the third party ledger.

##### General account mapping
We recommend storing a middleman account object on the currency manager extension. This object should store both the Rehive account reference and the third party ledger account object id.

##### Webhook requirements
In addition to the currency manager webhooks, if your service requires account mapping then these additional Rehive webhooks should be created and handled:
1. account.create
2. account.update

##### Rehive created account flow
When a new account is created on Rehive an account.create event webhook will be sent to the currency manager extension. The extension should then:

1. Confirm that the user the account was created on can have a third party account created for them.
2. Create a third party account. If possible, store the Rehive account reference on the third party account object.
3. Store a middleman account object that includes a field for the Rehive account reference and the third party account id.
4. Once created, update the Rehive account object’s metadata field with `{service_{YOUR CURRENCY MANAGER}: {“account_id”: XYZ}}`.

##### Third party created account flow
When a new account object is created on the third party system, the currency manager extension should:
1. Confirm the user exists on Rehive.
2. Create a new account on Rehive for the user. Including the metadata: `{service_{YOUR CURRENCY MANAGER}: {“account_id”: XYZ}}`.
3. Store a middleman account object that includes a field for the Rehive account reference and the third party account id.
4. Add any currencies for balances it will track to the newly created Rehive account.

##### Non-user accounts
There are often times when standalone accounts need to be created within the Rehive company setup. These cannot be mapped to a specific user and so need to be handled differently. When creating a currency manager extension, there are two options to choose from which depend on the third party system. They are:

1. Standalone accounts are created under a user entity controlled by the Rehive company owner on the third party system.
2. Standalone accounts can be created as free-floating account objects on the third party system.

If the third party supports floating accounts, then 2 is the best option, otherwise 1 is a good fallback. In both cases the standard account syncing flows apply.

##### User registration and pre-existing accounts
When a user registers within Rehive they are automatically created accounts based on the Account Definitions and the user group. This means when a user is first registered or detected by the currency manager extension they will likely have accounts that need to be sync’d. The recommend flow is to:

1. Query Rehive for all existing user accounts
2. For each account the currency manager checks it’s internal stored accounts to check which do not have a corresponding third party account
3. If no third party account sync with the (Rehive account created flow)[Rehive created account flow]


##### User KYC with account creation
Third party systems might often require a user entity in a 1-to-1 mapped system to be KYC’d before they can create accounts. To handle this flow the currency manager should:

1. Ignore all account related Rehive webhooks for user’s that are not at the correct KYC level
2. Once the user has reached a KYC level within the currency managers third party system it should then trigger the account syncing logic as described in User registration and pre-existing accounts

For more information integrating an external KYC system see our general KYC integration guide.

### Transaction flows
##### Handling withdrawals
See the general withdrawals section.

##### Handling deposits
See the general deposits section.

##### Handling transfers
Transfers become more complex to handle in a 1-to-1 mapped system, as every Rehive transfer between accounts for the managed currencies needs to be re-played between the associated accounts on the third party system.

1. When receiving a transfer webhook, the currency manager extension should:
2. Check that the transaction is a transfer by checking the `partner_id` field is not null.
3. If a valid transfer, query its internal accounts data set to see it has valid entries for both Rehive accounts involved and that those accounts are mapped to accounts on the third party system.
4. Create the transfer on the third party system which replicates the transfer received from Rehive.
5. Complete the Rehive transaction collection that the transfer transaction is a part of.

##### Handling Temporary User Transaction Mapping
Rehive supports sending transactions to users that don’t yet exist on the system. This causes a temporary user object to be created for the user as the destination user for the transaction. Due to the nature of trying to sync all transactions in a 1-to1 mapped system these transactions need to be stored on the currency manager extension and replayed at a layer stage once the user has an appropriate account created. Firstly we handle the original webhook as follows:

1. Check the user within the transaction webhook data. If the `temporary` field is true, initiate the temporary logic, otherwise handle as a normal transfer.
2. Store the transaction on the currency manager extension and mark it as temporary
3. Store a basic user object and link it to the transaction

The next steps will depend on how the currency manager is integrated but a high level flow is as follows:
1. Once the user has an account object created for them on the third party ledger that maps to their primary/default account on Rehive trigger temporary transactions
2. Run through each transaction for that user marked as temporary and handle them as a transfer would normally be handled.
3. Mark as Complete or Failed.

