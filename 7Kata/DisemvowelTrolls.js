/*


Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.





*/



function disemvowel(str) {

    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']


    let divider = str.split('')

    let vowelsFiltered = divider.filter(f => !vowels.includes(f))

    return vowelsFiltered.join('')
}


// so here we are splitting vowels


// we are using divider so split the string and then filter if the vowels to not include f then we will return  