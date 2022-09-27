var summation = function (num) {

    let newArr = []

    for (let i = 1; i <= num; i++) {

        newArr.push(i)

    }




    return newArr.reduce((a, b) => a + b, 0)

}