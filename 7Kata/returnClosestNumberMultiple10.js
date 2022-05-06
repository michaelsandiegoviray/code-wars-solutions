/*
Given a number return the closest number to it that is divisible by 10.

Example input:

22
25
37
Expected output:

20
30
40



*/




const closestMultiple10 = num => {
    let divider = num % 10
    return divider >= 5 ? 10 - divider + num : num - divider



};
