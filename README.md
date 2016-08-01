# JaroshJS-l10n

Internationalization (i18n) and localization (l10n) of JavaScript applications
may seem easy enough when you think of it from English language perspective.
You may think there's nothing easier then taking lexems off of your either HTML
or JS code and place them in a separate file as an associative array under
shortened keys... unless you faced other languages with half a dozen of noun
cases, conjugation of adjectives  depending on number of associated noun
etc. etc. etc.

This tiny library was invented with few major ideas in mind:
- application's code shouldn't care about inflections and conjugations;
- inflection and conjugation rules should be tightly incorporated into language
packages they belong to and be as primitive as possible;
- backend portability does matter.

***

Here's how it works. Every language pack is an object (associative array in
terms of PHP if you;ll decide to store your packs using PHP to be able easily
access all the lexems on server side etc.) Top level keys are used for grouping
of lexems. One top level key have a special meaning however.


__-fun__ subobject contains all the formatting and conjugation rules for a given
language pack. Each rule corresponds to an array addressed by a named key within
__-fun__ and consists of arbitrary number of elements. Every element corresponds
to some small and simple condition. The good practice is to put `'1'` as the
latest element thus providing a sort of a default value when all the conditions
above failed.

__Condition__ may contain any JS code that won't make evaluator fail :) 
However you should consider limiting yourself to usage of variables, literals,
comparison operators and string methods invocations combined in easily
understandable conditions.

__Variables__ inside conditions are refering keys within 'param' argument
(the 4th one) passed to a `Jarosh.l10n` function. You may refer those either by
their direct names or by index number appended to 'x' ('x' itself is a synonym
of 'x1').


Check for Demo where an edge case of localization of non-trivial phrases.
**Some examples may seem politically incorrect, but I'm dumb when it comes to
composing good examples, so imagine yourself writing dating service for people
concerned about BMI (Body Mass Index) or something like that, and excuse me in
advance.**
