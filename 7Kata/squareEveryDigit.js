/*

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer





*/

function squareDigits(num) {
    let newArr = []
    String(num).split('').forEach((a, b) => newArr.push(Math.pow(a, 2)))

    return Number(newArr.join(''))
}




// So here we use the forEach method -> and add it to the newArr to square it and then we return that array 