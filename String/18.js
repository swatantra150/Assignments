const prompt = require('prompt-sync')();
let a=parseFloat(prompt('enter the number'))
const fibonacci=(a)=>{
    if(a==1){
        return 1
    }
    if(a==0){
        return 0
    }
    else{
        return fibonacci(a-1)+fibonacci(a-2)
    }
}
console.log(fibonacci(a));
