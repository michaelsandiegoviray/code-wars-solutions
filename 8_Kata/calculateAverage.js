/*



Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.


Here I took the total of the array and placed it within total then made a conditional where
I would return the total/array.length if it doesn't equal 0 and the falsy value being 0 





*/


function find_average(array) {

    let total = array.reduce((a, b) => a + b, 0)

    return total != 0 ? total / array.length : 0;
}

// we can find the average by reducing then taking the array length 