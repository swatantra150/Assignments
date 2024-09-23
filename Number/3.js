const prompt = require('prompt-sync')();
let a=parseFloat(prompt('Enter the number:'))
let b=parseFloat(prompt('Enter the number'))
let c=parseFloat(prompt('Enter the number'))
if(a>b & a>c ){
      if(b>c){
        console.log(`a:${a} is the largest number`);
        console.log(`c:${c} is smallest number`);
      }else{
        console.log(`a:${a} is the largest number`);
        console.log(`b:${b} is smallest number`);
      }
}
if(b>a & b>c){
    if(a>c){
        console.log(`b:${b} is largest element`);
        console.log(`c:${c} is smallest element`);   
    }else{
        console.log(`b:${b} is largest element`);
        console.log(`c:${a} is smallest element`);  
    }
} 
if(c>a & c>b){
    if(a>b){
        console.log(`c:${c} is largest element`);
        console.log(`b:${b} is smallest element`);
    }else{
        console.log(`c:${c} is largest element`);
        console.log(`a:${a} is smallest element`);
    }
}