const prompt = require('prompt-sync')();
let m = parseFloat(prompt('Enter the length of array:'))
let arr = []
for (let i = 0; i < m; i++) {
    arr[i] = parseFloat(prompt(`Enter the ${i + 1}number:`))
}
const maxSubarray = (arr) => {
    let subarray = []
    let sum = 0
    let maxi = -Infinity
    let start = 0
    let ansend=-1
    let ansStart=-1
    for (let i = 0; i < m; i++) {
     
        if (sum == 0) {
            start = i
        }
        sum += arr[i]
    if(sum>maxi){
        maxi=sum
        ansStart=start
        ansend=i
    }
        if (sum < 0) {
            sum = 0
        }
        
    }
    for(let i=ansStart;i<=ansend;i++){
        console.log(arr[i]);  
    }
    return maxi
}
let sum = maxSubarray(arr)
console.log(sum);
