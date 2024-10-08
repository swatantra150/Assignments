const prompt = require('prompt-sync')();
let n = parseFloat(prompt('Enter the number:'))
let m = parseFloat(prompt('Enter the length of array:'))
let arr=[]
let result=[]
for(let i=0;i<m;i++){
   arr[i]=parseFloat(prompt(`Enter the ${i+1}number:`))
}
const filter=(key,n)=>{
  return key>n
}
const customFilter=(arr,filter,result)=>{
  for(let i=0;i<m;i++){
    result.push(filter(arr[i],n))
  }
  return result
}
customFilter(arr,filter,result)
console.log(result);

