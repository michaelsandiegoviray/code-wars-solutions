/*



Description:
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.





Mapped out the array and returned a new array with the power of two then reduced the array by summing it all together


*/

function squareSum(numbers) {

    let newNums = numbers.map(a => Math.pow(a, 2))


    let newerNums = newNums.reduce((a, b) => a + b, 0)

    return newerNums

}
