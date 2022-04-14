function removeEveryOther(arr) {

    let total = arr.filter((a, b) => { return b % 2 === 0 })

    return total
}




/*
 
 
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!

*/
