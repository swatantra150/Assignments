const res = require('express/lib/response');

const prompt = require('prompt-sync')();
let m = parseFloat(prompt('Enter the length of array:'))
let arr = []
let result = []
for (let i = 0; i < m; i++) {
    arr[i] = parseFloat(prompt(`Enter the ${i + 1}number:`))
}
const plusone = (elem) => {
    return elem + 1
}

const customOne = (arr, plusone, result) => {
    for (let i = 0; i < m; i++) {
        result.push(plusone(arr[i]))
    }
    return result
}
customOne(arr,plusone,result)
console.log(result);
