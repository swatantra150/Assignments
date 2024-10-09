const prompt = require('prompt-sync')();
let m = parseFloat(prompt('Enter the length of array:'))
let arr = []
for (let i = 0; i < m; i++) {
    arr[i] = parseFloat(prompt(`Enter the ${i + 1}number:`))
}
const minimum=(arr)=>{
    let ans=Infinity
    let low=0,high=m-1
    while(low<=high){
       let mid=Math.floor((low+high)/2)
       if(arr[low]<=arr[high]){
        ans=Math.min(ans,arr[low])
       }
        if(arr[low]<=arr[mid]){
            ans=Math.min(ans,arr[low])
            low=mid+1
        }else{
            ans=Math.min(ans,arr[mid])
            high=mid-1
        }
    }
    return ans
}
let min=minimum(arr)
console.log(min);
