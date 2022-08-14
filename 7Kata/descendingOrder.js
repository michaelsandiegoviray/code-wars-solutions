/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

FUNDAMENTALSFUNCTIONSCONTROL FLOWBASIC LANGUAGE FEATURES
Suggest kata description edits







*/


function descendingOrder(n) {

    let newest = String(n).split('').sort((a, b) => b - a).join('')

    return Number(newest)
}


    // Here we are making the number into a String using String()
    // We are then using split('') to create a number array
    // We will then use sort method with an arrow function to sort the numbers from highest to lowest
    // We then use the join array to create a string
    // We use newest to make it look clean ish?
    // then we return newest variable as a Number -> of newest 
