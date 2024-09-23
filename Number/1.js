
const prompt = require('prompt-sync')();
let a = parseFloat(prompt('Enter the first number: '));
let b = parseFloat(prompt('Enter the second number: '));

const add = (a, b) => {
    return a + b;
};
let sum = add(a, b);
console.log(sum);
 
const sub=(a,b)=>{
    return a-b
}
let subtract=sub(a,b)
console.log(subtract);

const mul=(a,b)=>{
  return a*b
}

console.log(mul(a,b));

const modulo=(a,b)=>{
   return a%b
}
console.log(modulo(a,b));
