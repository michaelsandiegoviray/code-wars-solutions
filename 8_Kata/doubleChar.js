/*


Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!








*/
function doubleChar(str) {
    let splitter = str.split('')
    let doubledChar = []
    for (let i = 0; i < splitter.length; i++) {

        doubledChar += str[i] + str[i]
    }

    return doubledChar

}