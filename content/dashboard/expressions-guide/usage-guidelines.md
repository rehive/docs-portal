---
date: 2018-09-17T15:21:22+02:00
title: Usage guidelines and examples
description: Guidelines and examples for using expressions in Rehive
weight: 2
---
This section will provide guidelines and examples for using expressions in Rehive.

### Examples of output after values have been injected into variables {#examples-of-output-after-values-have-been-injected-into-variables}


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



### Using logical operators inside expressions {#using-logical-operators-inside-expressions}

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


### Formatting information {#formatting-information}



1. All variables should be surrounded by double curly brackets, e.g:
    1. `string:  '{{ city }}'`
    2. `boolean: {{ archived }}`
    3. `integer: {{ amount }}`
    4. `objects:  
'{{ user.email }}' ;
{{ user.archived }} ;
{{ currency.divisibility }} 
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


### How to use data, more examples {#how-to-use-data-more-examples}


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



### Step-by-step explanation examples {#step-by-step-explanation-examples}


#### Example 1 {#example-1}

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



#### Example 2 {#example-2}

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



#### Example 3 {#example-3}

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




