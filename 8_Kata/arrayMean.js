/*

Find the mean (average) of a list of numbers in an array.

Information
To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

For an example list of 1, 3, 5, 7

1. Add all of the numbers

1+3+5+7 = 16
2. Divide by the number of values in the list. In this example there are 4 numbers in the list.

16/4 = 4
3. The mean (or average) of this list is 4





*/


var findAverage = function (nums) {



    return nums.reduce((a, b) => (a + b)) / nums.length

}

// so to find the mean of an array we can add all of them using a reduce array method to give us the sum then divide by the array's length to get the mean 
function adder(nums) {
    let sum

    for (let i = 0; i <= nums.length; i++) {

        sum += nums[i]
    }

    return sum


}
