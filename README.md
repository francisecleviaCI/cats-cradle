# Cat's Cradle - A String Looping Exercise

### Introduction

Let's do some really advanced looping, using string indices. Hopefully you won't get quite as loopy with strings as these people!:

![co-operative cats cradle](./assets/cats-cradle.jpg)


### Setup

For this exercise, we don't need to run tests. But we **DO** need to create our JavaScript file, and then we'll use our `node` command to run it and see what gets printed out to our terminal.


### Tools You Could Think About Using

* While loops.
* String indices.
* [String interpolation](https://dmitripavlutin.com/string-interpolation-in-javascript/).
* The String method `includes`.
* Boolean comparisons of strings.


### Challenges


0. Once again, write a function that accepts a number and prints out a banner with the words "Challenge" and the number in it. Use [String interpolation](https://dmitripavlutin.com/string-interpolation-in-javascript/) if you want! **Call it before calling each function. Don't call it again if you need to print twice to test a function.**

1. Write a function that prints out only the vowels from a given string. Do not use regular expressions ("regex"). Now call it with "Regular expressions are for term 2.". You should see an "e" printed, followed by a "u", followed by an "a", and so on.

2. Write a function that prints out the first 5 vowels from the given string. Continue to not use 'regexes'. Now call it with "Regular expressions are for term 2.". You should see an "e" printed, followed by a "u", followed by an "a", followed by an "e", followed by another "e", and then nothing else. Now call it again with "Hello!" You should see only an "e" and an "o" print.

3. Write a function that prints out every third character, _without_ examining every character. In other words, you may _not_ increment your index by one and decide whether to print based on the result of a modulus operation on that index. (A standard solution for this.). **HINT:** you'll need to play with how our counter/index variable changes with each loop. Now call it with "I am the alfalfa and the omelette." You should see "a", followed by "t", followed by a space, and so on. An "e" should be the last thing printed, with no `undefined` values showing up.

4. Write a function that prints out the first four characters after the given index in the given string, or, if there are fewer characters remaining from, prints only the remaining ones. Now call it with 'Oh hi, I didn't see you there. Welcome.' and `4` as your parameters. You should see 'i', followed by ',', followed by a space, followed by an 'I'. Now call it again with 'Oh hi, I didn't see you there. Welcome.' and `38` as your parameters. You should 'm', 'e', and '.' printed, and no fourth printing.

5. Write a function that prints out the index of every `u` it finds in the given string. Do not use `indexOf`. Now call it with `'You picked the wrong house, bub.'`. You should see `2`, `23`, and `29` printed out.

6. Write a function that prints out the first index of the letter `u` in the given string. Do not use `indexOf`. Now call it with `'You picked the wrong house, bub.'` You should see the number `2` printed, and only that.

7. Write a function that prints out the first index of the letter `u` in the given string, with a `-1` printed if it doesn't find it. Do not use `indexOf`. Now call it with `'You picked the wrong house, bub.'` You should see the number `2` printed, and only that. Now call it with `"I'm Canadian."` You should see `-1` print out.
