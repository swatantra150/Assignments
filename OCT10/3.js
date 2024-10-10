const prompt = require('prompt-sync')();
let x = parseFloat(prompt('Enter the number'))
const paranthesis=(s,x,i,o,c)=>{
   if(i==2*x){
    console.log(s)
     return 
   }
   if(o<x){
    paranthesis(s+'(',x,i+1,o+1,c)
   }
  if(o>c){
    paranthesis(s+')',x,i+1,o,c+1)
   }
 
}
let s=''
paranthesis(s,x,0,0,0);


