/*







Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]


took the array x and passed through map to create a new array where x would the element would be multiplied by 2 and the total would be returned
 



*/

function maps(x) {


    let total = x.map(x => x * 2)
    return total
}
