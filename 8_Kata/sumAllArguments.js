/*

Write a function that finds the sum of all its arguments.

eg:

sum(1, 2, 3) // => 6
sum(8, 2) // => 10
sum(1, 2, 3, 4, 5) // => 15
TIPS:




*/

function sum() {
    return Array.prototype.reduce.call(arguments, function (a, b) { return a + b; }, 0);
}
