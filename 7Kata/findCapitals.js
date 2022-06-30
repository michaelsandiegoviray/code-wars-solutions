/* 

Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );





*/


var capitals = function (word) {
    // split word into array 

    let beans = word.split('')

    // If the letter is capital return the index 
    let newArr = []
    for (let i = 0; i < beans.length; i++) {

        beans[i] === beans[i].toUpperCase() ? newArr.push(beans.indexOf(beans[i])) : null

    }

    return newArr

};
