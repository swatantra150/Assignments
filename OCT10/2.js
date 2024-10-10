const prompt = require('prompt-sync')();
let x = parseFloat(prompt('Enter the number'))
let n = parseFloat(prompt('Enter the nuber'))
const pow=(x,n)=>{
    if(n===0){
        return 1
    }
    else if (n<0){
        let a=pow(x,-n)
        return 1/a
    }
    return x*pow(x,n-1)
}
console.log(pow(x,n));
