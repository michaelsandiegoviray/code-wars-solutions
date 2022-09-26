var comparator = function (a, b) {


    let lines = [
        '12 drummers drumming,',
        '11 pipers piping,',
        '10 lords a leaping,',
        '9 ladies dancing,',
        '8 maids a milking,',
        '7 swans a swimming,',
        '6 geese a laying,',
        '5 golden rings,',
        '4 calling birds,',
        '3 French hens,',
        '2 turtle doves and',
        'a partridge in a pear tree.'

    ]

    // lines into an array IN ORDER 
    console.log(a)
    console.log(b)
    return lines.indexOf(a) - lines.indexOf(b)

    // 
}
