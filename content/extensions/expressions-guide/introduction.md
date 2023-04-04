---
date: 2018-09-17T15:21:22+02:00
title: Introduction
description: Introduction to building third-party integrations for common fintech flows.
weight: 1
---
#### What is an expression? {#what-is-an-expression}

The expression field allows admins to add logic to specify conditions that need to be met in order for a reward campaigns, notification, or webhook to be triggered. An entire expression must evaluate to “true” in order for it to trigger. You can use expressions to build more granular and configurable reward campaigns, notifications or webhooks. Expressions use the data sent in a webhook


#### What are events? {#what-are-events}

The Rehive platform has a collection of internal events that can be configured to trigger webhooks. These events consist of actions that occur on resources in the platform. Examples of events are user document create (adding a document to a user), address update (updating a user's address), user update (updating a field on the user object such as their email address), transaction execute (creating a transaction) etc. 

[Read more about events and webhooks.](https://docs.rehive.com/platform/usage/events/)


#### What are webhooks? {#what-are-webhooks}

A webhook is a method by which the platform API sends data to the extensions (or other web services). The platform API sends data to the extensions when a specific event takes place. Webhooks are used so that the extensions don't have to repeatedly request data - they only receive the data when they need it, i.e. when an event they are configured to receive data for occurs.


#### What is webhook data? {#what-is-webhook-data}

Webhook data refers to all of the information sent in a webhook from the platform API. It is always sent as a JSON object and its contents depend on which event triggered it. 


#### How do expressions work? {#how-do-expressions-work}

XXXX INSERT IMAGE XXXX

Data is sent to each extension, or external web service, in the form of webhook data when an event is triggered (e.g. user update). A webhook must be configured for the extension to receive it. Variables representing fields and their values in the webhook data can be used in your expressions to evaluate whether the notification, reward campaign or webhook should trigger. The extension (notifications or reward) will inject values from the webhook data into the variables inside the expression before the system evaluates the expression and decides whether to send the notification or reward. 

Example: For event user update, a snippet of webhook data is:


```
"archived": false,
"first_name": "Samantha"
```


Taking the above data into consideration, if your expression is:  \
 \
`'{{ first_name }}' and not {{ archived }}`

The relevant extension will look at the data in the webhook it receives, and inject the following values into the above variables, which the system will then evaluate to decide if the reward/notification will trigger: \
 \
`'Samantha' and (not (archived == true))`

The reward/notification will only trigger if the first name field does not have an empty value and the user's archived status is false, i.e. they are not an archived user. Since this user's first name field is not null and they are not an archived user, this expression will evaluate as true and will trigger the relevant notification or reward.

The system evaluates the expression as:


```
True and (not(false))
True and true
True
```


[Read more about truth tables.](https://en.wikipedia.org/wiki/Truth_table)

#### Usage guidelines and examples {#usage-guidelines-and-examples}


##### Examples of output after values have been injected into variables {#examples-of-output-after-values-have-been-injected-into-variables}


<table>
  <tr>
   <td><strong>Variable type</strong>
   </td>
   <td><strong>Example expression variable</strong>
   </td>
   <td><strong>Example values injected</strong>
   </td>
  </tr>
  <tr>
   <td><code>boolean</code>
   </td>
   <td><code>{{ archived }}</code>
   </td>
   <td>False
   </td>
  </tr>
  <tr>
   <td><code>string</code>
   </td>
   <td><code>'{{ first_name }}'</code>
   </td>
   <td>'Samantha'
   </td>
  </tr>
  <tr>
   <td><code>string enum</code>
   </td>
   <td><code>'{{ type }}'</code>
   </td>
   <td>'billing'
   </td>
  </tr>
  <tr>
   <td><code>integer</code>
   </td>
   <td><code>{{ amount }}</code>
   </td>
   <td>500
   </td>
  </tr>
  <tr>
   <td rowspan="3" ><code>object</code>
   </td>
   <td><code>'{{ user.email }}'</code>
   </td>
   <td>'sam@rehive.com'
   </td>
  </tr>
  <tr>
   <td><code>{{ currency.divisibility }}</code>
   </td>
   <td>2
   </td>
  </tr>
  <tr>
   <td><code>{{ user.archived }}</code>
   </td>
   <td>False
   </td>
  </tr>
</table>



##### Using logical operators inside expressions {#using-logical-operators-inside-expressions}

You can use logical operators inside your expressions to build more complex conditions. 


<table>
  <tr>
   <td><strong>Operator</strong>
   </td>
   <td><strong>Usage</strong>
   </td>
  </tr>
  <tr>
   <td rowspan="2" ><code>and</code>
   </td>
   <td>Use <code>and</code> when multiple variables all need to be present or true in order for the expression to trigger.
   </td>
  </tr>
  <tr>
   <td><code>'{{ first_name }}' and not {{ temporary }}</code>
<p>
Expression must only trigger if <code>first_name</code> is not blank and if the user is not a temporary user.
   </td>
  </tr>
  <tr>
   <td rowspan="2" ><code>or</code>
   </td>
   <td>Use <code>or</code> when any number of specified variables can be present  in order for the expression to trigger.
   </td>
  </tr>
  <tr>
   <td><code>'{{ first_name }}' or '{{ nationality }}'</code>
<p>
Expression must only trigger if <code>first_name</code> is not blank or if nationality is not blank.
   </td>
  </tr>
  <tr>
   <td rowspan="2" ><code>not</code>
   </td>
   <td>Use <code>not</code> in front of <code>boolean </code>variables to specify that a boolean variable needs to evaluate as false in order for the expression to trigger.
   </td>
  </tr>
  <tr>
   <td><code>not {{ temporary }} and not {{ archived }}</code>
<p>
Temporary and Archived are boolean values which can be true or false. This Expression must only trigger if <code>temporary</code> and <code>archived</code> are false, i.e. the user is not a temporary user and is not archived.
   </td>
  </tr>
  <tr>
   <td rowspan="2" ><code>==</code>
   </td>
   <td>Use <code>==</code>  (is equal to) when you need to compare two values and have that comparison evaluate as true, i.e. a specific field must have a specific value in order for the expression to trigger.
   </td>
  </tr>
  <tr>
   <td><code>'{{ user.groups.0.name }}' == 'individual'</code>
<p>
Expression must only trigger if the user is in the group named “individual”.
   </td>
  </tr>
  <tr>
   <td rowspan="2" ><code>!==</code>
   </td>
   <td>Use <code>!==</code> (is not equal to) when you need to compare two values and have that comparison evaluate as false, i.e. a specific field must not have a specific value in order for the expression to trigger.
   </td>
  </tr>
  <tr>
   <td><code>'{{ user.groups.0.name }}' !== 'admin'</code>
<p>
Expression must only trigger if the user is <strong>not</strong> in the group named “admin”.
   </td>
  </tr>
  <tr>
   <td rowspan="2" ><code>></code>
   </td>
   <td>Use <code>></code> (is greater than) when you only want an expression to evaluate as true if a value is greater than the value or variable it's compared to.
   </td>
  </tr>
  <tr>
   <td><code>'{{currency.code }}' == 'USD' and {{ amount }} > 1000</code> \
Expression must only trigger if the currency code is USD and the amount is greater than $10.
   </td>
  </tr>
  <tr>
   <td rowspan="2" ><code>&lt;</code>
   </td>
   <td>Use <code>&lt;</code> (is lesser than) when you only want an expression to evaluate as true if a value is lesser than the value or variable it's compared to.
   </td>
  </tr>
  <tr>
   <td><code>'{{currency.code }}' == 'EUR' and {{ amount }} &lt; 500</code> \
Expression must only trigger if the currency code is EUR and the amount is greater than €5.
   </td>
  </tr>
  <tr>
   <td rowspan="2" ><code>>=</code>
   </td>
   <td>Use <code>>=</code> (is greater than or equal to) when you only want an expression to evaluate as true if a value is greater than or equal to the value or variable it's compared to.
   </td>
  </tr>
  <tr>
   <td><code>'{{currency.code }}' == 'USD' and {{ amount }} >= 1000</code> \
Expression must only trigger if the currency code is USD and the amount is greater than $10.
   </td>
  </tr>
  <tr>
   <td rowspan="2" ><code>&lt;=</code>
   </td>
   <td>Use <code>&lt;</code> (is lesser than) when you only want an expression to evaluate as true if a value is lesser than or equal to the value or variable it's compared to.
   </td>
  </tr>
  <tr>
   <td><code>'{{currency.code }}' == 'EUR' and {{ amount }} &lt;= 500</code> \
Expression must only trigger if the currency code is EUR and the amount is greater than €5.
   </td>
  </tr>
</table>


## Formatting information {#formatting-information}



1. All variables should be surrounded by double curly brackets, e.g:
    1. `string:  '{{ city }}'`
    2. `boolean: {{ archived }}`
    3. `integer: {{ amount }}`
    4. `objects:  \
'{{ user.email }}' \
{{ user.archived }} \
{{ currency.divisibility }} \
 \
`
2. Any `string` variable_ _needs to be surrounded by single quotes in order to be parsed after _values_ have been injected into the variables. **Ensure that the correct quote character is being used - word processing programs often insert their own quote character which cannot be parsed correctly. \
**

<table>
  <tr>
   <td>
<strong>Correct</strong>
   </td>
   <td>' '
   </td>
  </tr>
  <tr>
   <td rowspan="3" ><strong>Incorrect</strong>
   </td>
   <td><strong>' '</strong>
   </td>
  </tr>
  <tr>
   <td><strong>" "</strong>
   </td>
  </tr>
  <tr>
   <td><strong>“ ”</strong>
   </td>
  </tr>
</table>



    ** \
**Adding a `string` variable_ _to your expression will indicate that a non-null _value _must exist (i.e. it can't be blank) in that field in order for the notification or reward to trigger, e.g:



    5. `'{{ line_1 }}'  \
`Expression must only trigger if `line_1` is not blank. \

3. Any `string` _value_ being compared to a `string` variable should be surrounded by quotes but have **no **curly brackets, e.g.:
    6. `'{{ city }}' == 'Cape Town'` \
Expression must only trigger if the `city` field is equal to Cape Town. \

4. In any **update** event, you can check if the _value_ of a variable is different to its previous _value_. **Update** event data contains an original values object named `original_{resource name}` e.g. `original_address`, `original_user, original_transaction` etc.
    7. E.g. in address update:` \
'{{ city }}' !== '{{ original_address.city }}' \
`Expression must only trigger if the new value of `city` is different to the original value of `city`. \

    8. E.g. in user update:` \
'{{ first_name }}' !== '{{ original_user.first_name }}' \
`Expression must only trigger if the new value of `first_name` is different to the original value of `first_name`. \

5. `boolean` and `integer` variables do not need quotes in order for their values to be parsed, e.g: 
    9. `{{ user.temporary }}  \
`Expression must only trigger if the user is a temporary user.
    10. `'{{currency.code }}' == 'USD' and {{ amount }} > 1000 \
`Expression must only trigger if the currency code is USD and the `amount` is greater than $10. \

6. All amounts related to a currency are always `Integer` values and never decimals. For a currency with a divisibility of 2, like USD, $10.00 would be represented as 1000. The number should always take into account the currency's divisibility, e.g.:
    11. `'{{currency.code }}' == 'USD' and {{ amount }} > 1000` \
Expression must only trigger if the currency code is USD and the `amount` is greater than $10. \

7. Data that is inside `objects` in the main resource data object can be targeted in your expression. The  Below is an example of a value being evaluated against a specific variable inside an `object`, e.g:
    12.  `'{{ currency.code }}' == 'EUR'  \
`Expression must only trigger if the currency code is “EUR”. \

8. Be mindful of when you are using a direct user event vs a user resource event. When using a direct user event (user create, user update), you do not need to prepend fields with `user.{field name}` when targeting a field in the user object, as you are already working within the user object. When using a user resource event (e.g. document update, address create, etc), you will need to prepend fields with `user.` when targeting a field in the user object, e.g. `user.email,` in order to target a field in the user object. The user object is always returned in user resource event data. \

9. When targeting a status, the first letter of the _value_ should always be a capital e.g.  \
`'{{ status }}' == 'Complete'` 


## How to use data, more examples {#how-to-use-data-more-examples}


<table>
  <tr>
   <td>Expression must trigger only if a specific field is present:
<p>
 \
<code>'{{ line_1 }}' \
</code>Expression must only trigger if <code>line_1</code> is not blank.
   </td>
  </tr>
  <tr>
   <td>Expression must trigger only if a user has added all of a number of specific fields:
<p>
<code>'{{ line_1 }}' and '{{ line_2 }}' and '{{ city }}'</code>
<p>
Expression must only trigger if <code>line_1</code>, <code>line_2</code> and <code>city</code> are all not blank.
   </td>
  </tr>
  <tr>
   <td>Expression must trigger only if any of a number of specific fields is present:
<p>
<code>'{{ line_1 }}' or '{{ line_2 }}' or '{{ city }}'</code>
<p>
Expression must only trigger if <code>line_1</code>, <code>line_2</code> or <code>city</code> is not blank.
   </td>
  </tr>
  <tr>
   <td>Expression must trigger only where it has at least one of a number of fields and at least one of a number of other fields:
<p>
<code>('{{ line_1 }}' or '{{ line_2 }}') and ('{{ city }}' or '{{ state_province }}'</code>
<p>
Expression must only trigger as long as either <code>line_1</code> or <code>line_2</code> is not blank, and as long as either <code>city</code> or <code>state_province</code> is not blank.
   </td>
  </tr>
  <tr>
   <td>Expression must trigger only if one or more fields are blank:
<p>
<code>not '{{ line_1 }}' or not '{{ line_2 }}'</code>
<p>
Expression must only trigger if <code>line_1</code> or <code>line_2</code> is blank.
   </td>
  </tr>
  <tr>
   <td>Targeting list values in an expression. Example: expression must trigger only if user is in specific group (in this case, the “Individual” group):
<p>
 \
<code>'{{ user.groups.0.name }}' == 'individual' </code>
<p>
Expression must only trigger if the user whose address was created or updated (depending on which event was selected) is in the group named “individual”.
   </td>
  </tr>
  <tr>
   <td>Expression must trigger only if user is not temporary:
<p>
<code>not {{ user.temporary }}</code>
<p>
Expression must only trigger if the user is not a temporary user.
   </td>
  </tr>
  <tr>
   <td>Expression must trigger only if a field has a specific value:
<p>
<code>'{{ city }}'  == 'Cape Town'</code>
<p>
Expression must only trigger if the value in the <code>city</code> field is Cape Town.
   </td>
  </tr>
  <tr>
   <td>Expression must trigger only if a field does not have a specific value:
<p>
<code>'{{ city }}'  !== 'Cape Town'</code>
<p>
Expression must only trigger if the value in the <code>city</code> field is <strong>not</strong> Cape Town.
   </td>
  </tr>
  <tr>
   <td>Comparing previous values to current values in an update event. Example: expression must trigger only if an updated field does not have the same value as it did before:
<p>
<code>'{{ city }}' !== '{{ original_address.city }}' \
</code>Expression must only trigger if the new value of <code>city</code> is different to the original value of <code>city</code>.
   </td>
  </tr>
</table>



## Step-by-step explanation examples {#step-by-step-explanation-examples}


### Example 1 {#example-1}

A notification example.


<table>
  <tr>
   <td><strong>Webhook data received</strong>
   </td>
  </tr>
  <tr>
   <td><code>{</code>
<p>
<code>"first_name": "Keiko",</code>
<p>
<code>"last_name": "Nobumoto",</code>
<p>
<code>"temporary": false,</code>
<p>
<code>"archived": false,</code>
<p>
<code>"nationality": "JP",</code>
<p>
<code>}</code>
   </td>
  </tr>
  <tr>
   <td><strong>Expression</strong>
   </td>
  </tr>
  <tr>
   <td><code>'{{ first_name }}' and '{{ last_name }}' and '{{ nationality }}' !== 'ZA' and not {{ temporary }} </code>
   </td>
  </tr>
  <tr>
   <td><strong>Values injected from webhook data</strong>
   </td>
  </tr>
  <tr>
   <td><code>'Keiko' and 'Nobumoto' and 'JP' !== 'ZA' and not (temporary == False) </code>
   </td>
  </tr>
  <tr>
   <td><strong>Expression written out in plain English</strong>
   </td>
  </tr>
  <tr>
   <td>Trigger this notification only when a user's first and last name are present, their nationality is not ZA, and they are not a temporary user.
   </td>
  </tr>
  <tr>
   <td><strong>Expression evaluated against webhook data</strong>
   </td>
  </tr>
  <tr>
   <td>True and True and True and not (False) →
<p>
True and True and True and True →
<p>
True
   </td>
  </tr>
  <tr>
   <td><strong>Explanation</strong>
   </td>
  </tr>
  <tr>
   <td>The notification with the above expression will trigger given the above webhook data. The entire expression evaluates as “true” because each individual condition inside the expression was true: 
<ol>

<li>The user's first name is not blank <strong>✓</strong>

<li>The user's last name is not blank <strong>✓</strong>

<li>The user's nationality is not ZA <strong>✓</strong>

<li>The user is not a temporary user <strong>✓</strong>
</li>
</ol>
   </td>
  </tr>
</table>



### Example 2 {#example-2}

A notification example.


<table>
  <tr>
   <td><strong>Webhook data received</strong>
   </td>
  </tr>
  <tr>
   <td><code>{</code>
<p>
<code>"first_name": "",</code>
<p>
<code>"last_name": "Obama",</code>
<p>
<code>"temporary": false,</code>
<p>
<code>"archived": false,</code>
<p>
<code>"nationality": "US",</code>
<p>
<code>}</code>
   </td>
  </tr>
  <tr>
   <td><strong>Expression</strong>
   </td>
  </tr>
  <tr>
   <td><code>'{{ first_name }}' and '{{ last_name }}' and '{{ nationality }}' !== 'ZA' and not {{ temporary }} </code>
   </td>
  </tr>
  <tr>
   <td><strong>Values injected</strong>
   </td>
  </tr>
  <tr>
   <td><code>'' and 'Obama' and 'US' !== 'ZA' and not (temporary == False) </code>
   </td>
  </tr>
  <tr>
   <td><strong>Expression written out in plain English</strong>
   </td>
  </tr>
  <tr>
   <td>Trigger this notification only when a user's first and last name are present, their nationality is not ZA, and they are not a temporary user.
   </td>
  </tr>
  <tr>
   <td><strong>Expression evaluated against webhook data</strong>
   </td>
  </tr>
  <tr>
   <td>False and True and True and not (False) →
<p>
False and True and True and True →
<p>
False <strong>✖</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Explanation</strong>
   </td>
  </tr>
  <tr>
   <td>The notification with the above expression will <strong>not</strong> trigger given the above webhook data. The entire expression evaluates as “false” because one of the conditions evaluates as false, and the expression logic requires that <strong>all</strong> conditions need to be true:
<ol>

<li>The user's first name it not blank <strong>✖</strong>

<li>The user's last name it not blank <strong>✓</strong>

<li>The user's nationality is not ZA <strong>✓</strong>

<li>The user is not a temporary user <strong>✓</strong>
</li>
</ol>
   </td>
  </tr>
</table>



### Example 3 {#example-3}

A notification example.


<table>
  <tr>
   <td><strong>Webhook data received</strong>
   </td>
  </tr>
  <tr>
   <td><code>{</code>
<p>
<code>"first_name": "",</code>
<p>
<code>"last_name": "Obama",</code>
<p>
<code>"temporary": false,</code>
<p>
<code>"archived": false,</code>
<p>
<code>"nationality": "US",</code>
<p>
<code>}</code>
   </td>
  </tr>
  <tr>
   <td><strong>Expression</strong>
   </td>
  </tr>
  <tr>
   <td><code>('{{ first_name }}' or '{{ last_name }}') and '{{ nationality }}' !== 'ZA' and not {{ temporary }} </code>
   </td>
  </tr>
  <tr>
   <td><strong>Values injected</strong>
   </td>
  </tr>
  <tr>
   <td><code>('' or 'Obama') and 'US' !== 'ZA' and not (temporary == False) </code>
   </td>
  </tr>
  <tr>
   <td><strong>Expression written out in plain English</strong>
   </td>
  </tr>
  <tr>
   <td>Trigger this notification only when a user's first or last name is present, their nationality is not ZA, and they are not a temporary user.
   </td>
  </tr>
  <tr>
   <td><strong>Expression evaluated against webhook data</strong>
   </td>
  </tr>
  <tr>
   <td>(False or True) and True and not (False) →
<p>
True and True and True →
<p>
True <strong>✓</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Explanation</strong>
   </td>
  </tr>
  <tr>
   <td>The notification with the above expression will trigger given the above webhook data. The entire expression evaluates as “true” because although the user's first name is blank, the condition uses an “or” operator, meaning that only one of the conditions inside that parenthesis needs to evaluate as true for the entire parenthesis condition to be considered true.
<ol>

<li>The user's first name is blank but the user's last name is not blank, and we only need one of them not to be blank for this condition to be true <strong>✓</strong>

<li>The user's nationality is not ZA <strong>✓</strong>

<li>The user is not a temporary user <strong>✓</strong>
</li>
</ol>
   </td>
  </tr>
</table>



# Common problems {#common-problems}

Your reward, notification or webhook is not triggering and you're not sure why. The issue could lie in several places, and the expression is a common culprit. Below are some common issues and how to fix them.



1. Targeting `string` values or variables in your expression and **not **encasing them in single quotation marks. [See formatting information](#formatting-information) point 2.
2. Using the incorrect character for quotation marks. [See formatting information](#formatting-information) point 2.
3. Targeting `integer` or `boolean` values or variables and encasing them in single quotation marks. [See formatting information](#formatting-information) point 1.
4. Misspelling words in the expression. Typos.
5. Using an incorrect field name. Check your expression against the fields in the webhook data.
6. Targeting an `object` when you are already working inside that `object` e.g. you are using event user update (a direct user event) and targeting the email field by using `'{{ user.email }}'` instead of `'{{ email }}'` . By adding `user` you are looking for a `user` `object` while already inside the `user` `object`. You only need to target user fields by using the `user` `object` when using user resource events, as they contain the `user` `object` inside of their resource objects. [See formatting information](#formatting-information) point 8.
7. The converse of the above, not correctly targeting an `object` e.g. trying to target currency code by using  \
`'{{ code }}'` **✖** \
instead of  \
`'{{ currency.code }}'` **✓**  
8. Using the wrong event e.g. create instead of update, or wrong event entirely.
9. There is no webhook for the event in the extension or other web service you are using. Check the [webhooks page](https://dashboard.rehive.com/#/developers/webhooks/list) to ensure you have a webhook set up for that event. 
10. Your expression logic is wrong e.g. targeting a credit subtype, while also having a condition that the transaction type must be debit.
11. Targeting the wrong subtype in your expression e.g. manual_deposit instead of deposit_manual, or targeting a credit subtype instead of a debit subtype.
12. Using wrong operator or using operator incorrectly e.g.   \
<code>!== {{ temporary }} <strong>✖ </strong></code>  \
instead of  \
<code>not {{ temporary }} <strong>✓</strong></code>
13. Missing brackets around a <code>string </code>variable e.g.  \
<code>' city ' == 'Cape Town' <strong>✖</strong></code>
14. Having brackets around a <code>string </code>value (they should only be around the variable) e.g.  \
<code>'{{ city }}' == '{{ Cape Town }}' <strong>✖</strong></code>
15. Not using a capital letter for a status value when targeting a status, e.g.  \
<code>'{{ status }}' == 'complete'</code> <strong>✖  \
</strong>instead of  \
<code>'{{ status }}' == 'Complete' <strong>✓</strong></code>


# FAQ {#faq}


## How do I add a check for a specific value in an expression? {#how-do-i-add-a-check-for-a-specific-value-in-an-expression}

[See formatting information](#formatting-information) points 3, 5 and 6.


## How do I make an expression only trigger if fields are not blank? {#how-do-i-make-an-expression-only-trigger-if-fields-are-not-blank}

[See formatting information](#formatting-information) point 2.


## How do I check if a user is in a specific group? {#how-do-i-check-if-a-user-is-in-a-specific-group}


```
'{{ user.groups.0.name }}' == 'individual' 
```


Replace “individual” with the name of the group you would like to check against.


## How do I compare new values in an update event to the original values? {#how-do-i-compare-new-values-in-an-update-event-to-the-original-values}

[See formatting information](#formatting-information) point 4.


## Can I use more than one condition in my expression? {#can-i-use-more-than-one-condition-in-my-expression}

Yes, you can use logical operators to link your conditions together in your required format. See [Using logical operators inside expressions.](#using-logical-operators-inside-expressions)


## Which API documentation is best to use in conjunction with this guide? {#which-api-documentation-is-best-to-use-in-conjunction-with-this-guide}

[https://docs.platform.rehive.com/](https://docs.platform.rehive.com/)


## What parses expressions? {#what-parses-expressions}

Python.


## What injects the variables? {#what-injects-the-variables}

Django template language.


## Where can I see webhook log data? {#where-can-i-see-webhook-log-data}

[Webhook logs inside the admin Dashboard.](https://dashboard.rehive.com/#/developers/webhooks/logs)


## Where can I see available fields for use in my expression? {#where-can-i-see-available-fields-for-use-in-my-expression}

[Events & available fields to use](#events-&-available-fields-to-use)

The Events & available fields to use section in this document links to the specific event section of the below API docs.

[https://docs.platform.rehive.com/](https://docs.platform.rehive.com/)

[https://docs.rehive.com/platform/usage/events/](https://docs.rehive.com/platform/usage/events/)


# Events & available fields to use {#events-&-available-fields-to-use}


## Transaction events {#transaction-events}


### Transaction Create {#transaction-create}



* Transaction create event is triggered when a transaction is created. 
* Transaction create data sits inside the transaction resource object `transaction{}.`

Available webhook data fields you can use in an expression:

[https://docs.platform.rehive.com/tag/Admin#operation/admin_transactions_read](https://docs.platform.rehive.com/tag/Admin#operation/admin_transactions_read)

Example JSON with values


```json
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



### Transaction Update {#transaction-update}



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



### Transaction Initiate {#transaction-initiate}

[See Transaction Update - fields are the same.](https://docs.platform.rehive.com/tag/Admin#operation/admin_transactions_read)


### Transaction Execute {#transaction-execute}

[See Transaction Update - fields are the same.](https://docs.platform.rehive.com/tag/Admin#operation/admin_transactions_read)


## Direct user events {#direct-user-events}


### User Create {#user-create}



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



### User Update {#user-update}



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



## User resource events {#user-resource-events}


### User Password Reset {#user-password-reset}



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



### User Password Set {#user-password-set}



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



### User Email Verify {#user-email-verify}



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



### User Mobile Verify {#user-mobile-verify}



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



### User MFA SMS Verify {#user-mfa-sms-verify}



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



### User Email Create {#user-email-create}



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



### User Email Update {#user-email-update}



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



### User Mobile Create {#user-mobile-create}



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



### User Mobile Update {#user-mobile-update}



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



### Address Create {#address-create}



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



### Address Update {#address-update}



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



### Document Create {#document-create}



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



### Document Update {#document-update}



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



### Bank account Create {#bank-account-create}



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



### Bank account Update {#bank-account-update}



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



### Crypto Account Create {#crypto-account-create}



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



### Crypto Account Update {#crypto-account-update}



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



