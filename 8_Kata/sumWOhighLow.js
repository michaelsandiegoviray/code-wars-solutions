/*


Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6


*/


function sumArray(array) {

    return decider = array === null || array === undefined || array === [] || array.length < 3 ? 0 : array.sort((a, b) => a - b).filter((element, index) => index > 0 && index < array.length - 1).reduce((a, b) => a + b, 0)
}






function dewer(arrays) {




}

