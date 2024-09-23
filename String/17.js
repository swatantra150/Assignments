const prompt = require('prompt-sync')();
let a=parseFloat(prompt('enter the number'))
const factorial=(a)=>{
     let ans=1
     for(let i=1;i<=a;i++){
        ans=ans*i
     }

     return ans
}
console.log(factorial(a));
