---
date: 2018-09-17T15:21:22+02:00
title: Core resources
description: Rewards extension core resources.
weight: 3
---

There are three core resource in the reward extension that you need to know about in order to start creating campaigns.

### Campaigns

The reward campaigns object contains data related to how, when, where and why a reward is triggered or should be triggered. It allows you to setup event based rewards or rewards that have to be explicitly invoked by users.

Field | Description
--- | ---
id | Unique identifier for the product
name | Name of a campaign
description | Description of a campaign
start_date | Campaign start date
end_date | Campaign end date
currency | Campaign reward currency
account | Campaign reward fund
total | Campaign reward cap
fixed_amount | Fixed amount per campaign reward
percentage | A percentage amount per campaign reward
balance | Amount of funds left in the reward
type | Type of reward (`fixed`, `fixedpercentage`, `percentage`)
default_status | Default status of the reward (`pending`, `complete`)
users | List of users who can receive this reward
groups | List of groups that can receive this reward
max_per_user | Max number of times a user can receive this campaign reward
active | Whether the reward is active or not
visible | Whether the reward is visible to end users
claim | Whether users can claim this reward
expression | An expresison that can be evluated to decide whether this should be rewarded
event | The event that triggers this campaign reward
event_user | The user (in the event) that receives the reward
event_amount | The amounf (in the event) that the percent reward should be based on

### Rewards

The reward object contains data related to individual rewards as they were received by users. It also stores related Rehive transaction information.

Field | Description
--- | ---
id | Unique identifier for the product
user | User that the reward belongs to
campaign | The campiagn this reward is related to
currency | Currency this reward is in
amount | Amount of the reward
type | Type of reward (`fixed`, `fixedpercentage`, `percentage`)
status | Status of the reward (`pending`, `failed`, `complete`)
debit_tx | Related Rehive debit transaction
credit_tx | related Rehive credit transaction
metadata | Metadata object
