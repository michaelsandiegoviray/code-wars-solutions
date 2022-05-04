/*

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.






*/
function getCount(str) {

    let separation = str.split('')
   
    let vowels = ['a','e','i','o','u']
     
   let end =  separation.filter(neem => vowels.includes(neem))
     
   
   return end.length
   
   
   }