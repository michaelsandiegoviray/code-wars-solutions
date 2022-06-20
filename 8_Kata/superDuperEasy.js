/*

Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

FUNDAMENTALS
Suggest kata description edits




*/




function problem(x) {

    return Number.isInteger(x) || typeof x !== 'string' ? (x * 50) + 6 : "Error"




}
