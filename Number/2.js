const prompt = require('prompt-sync')();
let a=parseFloat(prompt('Enter the number:'))
let b=parseFloat(prompt('Enter the number'))
if(a>b){
    console.log(`a:${a} is greater than b:${b}`);
}else{
    console.log(`b:${b} is greater than a:${a}`);
    
}