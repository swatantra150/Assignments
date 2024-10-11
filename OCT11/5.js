const prompt = require('prompt-sync')();
let m = parseFloat(prompt('Enter the length of array:'))
let arr = []
for (let i = 0; i < m; i++) {
    arr[i] = parseFloat(prompt(`Enter the ${i + 1}number:`))
}
const reverse = (arr, start, end) => {
    while (start <= end) {
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++
        end--
    }
}
const rotate = (arr,d) => {
    d = d % arr.length; 
     reverse(arr,0,d-1)
     reverse(arr,d,m-1)
    reverse(arr,0,m-1)
     console.log(arr);
}
rotate(arr,2)
