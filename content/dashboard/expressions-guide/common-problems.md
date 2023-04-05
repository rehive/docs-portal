---
date: 2018-09-17T15:21:22+02:00
title: Common problems
description: Basic overview of an example flow to facilitate end-user deposits via bank transfer.
weight: 3
---
This section will provide an overview of problems commoonly experienced when using expressions and ways to resolve them.x

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


``
