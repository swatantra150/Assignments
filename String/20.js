const prompt = require('prompt-sync')();
let a=parseFloat(prompt('enter the number'))
const isPrime=(a)=>{
   for(let i=2;i<a;i++){
    if(a%i==0){
        return false
    }
   }
   return true
}
console.log(isPrime(a));
