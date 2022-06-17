/* 



*/

function alternate(n, firstValue, secondValue) {
    let newArr = []
    for (let i = 0; i < n; i++) {
        i % 2 === 0 ? newArr.push(firstValue) : i % 2 === 1 ? newArr.push(secondValue) : n === 0 ? [] : null
    }
    return newArr
}
