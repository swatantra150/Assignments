const prompt = require('prompt-sync')();
let num=prompt('Enter the number::')

const calsqrt=(num)=>{
    let ans=0
    if(!isNaN(num)){
        ans=Math.sqrt(num)
      }
      return ans
}

console.log(calsqrt(num));
