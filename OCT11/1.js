const prompt = require('prompt-sync')();
let m = parseInt(prompt('Enter the length of array:'))
let arr = []
for (let i = 0; i < m; i++) {
    arr[i] = parseFloat(prompt(`Enter the ${i + 1}number:`))
}
let newArr=arr.filter(Boolean)
console.log(newArr);
