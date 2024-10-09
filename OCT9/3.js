const prompt = require('prompt-sync')();
let m = parseFloat(prompt('Enter the length of array:'))
let arr = []
for (let i = 0; i < m; i++) {
    arr[i] = parseFloat(prompt(`Enter the ${i + 1}number:`))
}
const maxAmmount = (arr) => {
    let max = 0
    let max1 = 0
    let max2 = 0
    if (arr.length % 2 == 0) {
        for (let i = 0; i <= m - 2; i = i + 2) {
            max1 += arr[i]
        }
        for(let j=1;j<=m-1;j=j+2){
            max2+=arr[j]
        }
    } else {
        for (let i = 0; i <= m - 1; i=i+2) {
            max1 += arr[i]
        }
        for(let j=1;j<=m-2;j=j+2){
            max2+=arr[j]
        }
    }
    max=Math.max(max1,max2)
    return Math.max(max)
}
let ans=maxAmmount(arr)
console.log(ans);
