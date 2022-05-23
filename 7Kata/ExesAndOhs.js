/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false



*/




function XO(str) {

    let team = ['x']
    let work = ['o']
    let newest = str.toLowerCase().split('').filter(item => team.includes(item))
    let second = str.toLowerCase().split('').filter(item => work.includes(item))
    return newest.length === second.length ? true : false

}

