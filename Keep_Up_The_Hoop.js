/*



Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
If he doesn't get 10 hoops, return the string "Keep at it until you get it".








*/




// My input 

function hoopCount(n) {
    if (n >= 10) { return ("Great, now move on to tricks") }
    else { return ("Keep at it until you get it") }
}


// Look into this solution 

function hoopCount(n) {
    return (n < 10) ? 'Keep at it until you get it' : 'Great, now move on to tricks';
}



// tried using a ternary however it didn't work initially and looked something like 

hoopCount(n){


    n >= 10 ? 'Keep at it until you get it' : 'Great, now move on to tricks'


}


// I was missing the return as ternary functions DO NOT have implicit returns
// What may have implicit returns would be arrow functions 