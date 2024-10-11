const prompt = require('prompt-sync')();
let m = parseInt(prompt('Enter the length of array:'))
let arr = []
for (let i = 0; i < m; i++) {
    arr[i] = parseFloat(prompt(`Enter the ${i + 1}number:`))
}
const largest=(arr)=>{
    let large=-Infinity
    for(let i=0;i<m;i++){
        if(large<arr[i]){
            large=arr[i]
        }
    }
    return large
}
const secondLarge=(arr)=>{
 let large=largest(arr)
 let second=-Infinity
 for(let i=0;i<m;i++){
    if(arr[i]>second && arr[i]!==large){
        second=arr[i]
    }
 }
 return second
}
let ans=secondLarge(arr)
console.log(ans);
