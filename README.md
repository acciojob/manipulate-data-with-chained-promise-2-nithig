# Manipulating Data with Chained Promises

Create a JavaScript function that returns a promise which resolves with an array of numbers after 3 seconds. Chain this promise with two more promises: one that filters out the odd numbers and another that multiplies the even numbers by 2. Use the final result to update the text of an HTML element with an ID of "output". This assignment requires the use of promises to transform the data and the DOM API to update the text of an HTML element.

## Acceptance Criteria

1. Take an array `[1, 2, 3, 4]` as input.
2. Resolve a promise after `3 seconds` after manipulating the array as follows.
3. First, filter out odd numbers and print the array in the div with the id of `output` after `1 second`
4. Then, multiply all even numbers by 2 and print the array in the div of id of `output` after `2 seconds`
