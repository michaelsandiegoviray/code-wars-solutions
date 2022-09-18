/*

Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]
0 => [0]

*/
function digitize(n) {


    let array = n.toString().split('').reverse()


    let result = array.map((n => Number(n)))


    return result
}

    // reverse map then return result to change numbers to number 