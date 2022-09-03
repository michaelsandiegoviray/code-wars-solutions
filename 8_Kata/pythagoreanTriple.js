/*

Given an array of 3 non-negative integers a, b and c, determine if they form a pythagorean triple.

A pythagorean triple is formed when:

c2 = a2 + b2
where c is the largest value of a, b, c.

For example: a = 3, b = 4, c = 5 forms a pythagorean triple, because 52 = 32 + 42

Return Values
1 if a, b and c form a pythagorean triple
0 if a, b and c do not form a pythagorean triple
For Python: return True or False
For JavaScript: return true or false


*/


function isPythagoreanTriple(integers) {

    let a = Math.pow(integers[0], 2)
    let b = Math.pow(integers[1], 2)
    let c = Math.pow(integers[2], 2)


    return a + b === c ? true : c + b === a ? true : c + a === b ? true : false


}
