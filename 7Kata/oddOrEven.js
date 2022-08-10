/*

Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"





*/



function oddOrEven(array) {
    return array.reduce((a, b) => a + b, 0) % 2 === 0 ? "even" : "odd";
}
// Here we are using the Array reduce function and we add the sum using it.

// We then take the result and use modulus function and if it is === to 0 we will return even and otherwise odd

// Also to note we use a ternary 











