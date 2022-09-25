/*


Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"



*/

function spinWords(string) {
    // if letter is more than five letters -> reverse it 


    let splitter = string.split(' ')
    // turn into array of words 

    // let's do a linear type thing instead with a loop then check solutions 

    // test for see length of splitter 
    // console.log(splitter[0].length)



    // for loop to get splitter to be reverse if the length if >= 5 

    for (let i = 0; i < splitter.length; i++) {

        if (splitter[i].length >= 5) {

            splitter[i] = splitter[i].split('').reverse().join('')
        }



    }

    return splitter.join(' ')
}

    //LETS GOOOOOOOO
