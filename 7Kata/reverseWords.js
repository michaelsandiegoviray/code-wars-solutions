/*


Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"




*/


function reverseWords(str) {
  let result = str.split(' ').map(word => word.split('').reverse().join('')).join(' ')
  return result;
}


      // Reverse word -> map and then split reverse join ->split reverse 






      // Reverse the words and then push it throughx