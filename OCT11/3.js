const prompt = require('prompt-sync')();
let m = parseInt(prompt('Enter the length of array:'))
let arr = []//1 2  3 4 5
for (let i = 0; i < m; i++) {
    arr[i] = parseFloat(prompt(`Enter the ${i + 1}number:`))
}
const unique=(arr)=>{
    let ans=0;
    ans=arr[0]^arr[1]
    for(let i=2;i<m;i++){
        ans^=arr[i]
    }
    return ans
}
console.log(unique(arr));
