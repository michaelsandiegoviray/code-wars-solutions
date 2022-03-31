/*
You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.






Here I went with the Parse Integer and spcified on the number which was x by using the zero index to make sure I always got x and not any other numbers in the case that there were any 





*/


function getAge(inputString) {

    let final = parseInt(inputString[0])

    return final

}




