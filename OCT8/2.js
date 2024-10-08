const prompt = require('prompt-sync')();
let m = parseFloat(prompt('Enter the length of array:'))
let arr=[]
let init=0

const fn=(ele,val)=>{
    return ele+val
  }
const customreduce=(nums,fn,init)=>{
    let ans=init
    for(let i=0;i<m;i++){
        ans=fn(nums[i],ans)
    }
    return ans
}
for(let i=0;i<m;i++){
    arr[i]=parseFloat(prompt(`Enter the ${i+1}number:`))
 }

console.log(customreduce(arr,fn,init));
