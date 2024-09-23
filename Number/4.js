const prompt = require('prompt-sync')();
let integerNumber =parseInt(prompt('enter the number'));  // Integer
let floatNumber =parseFloat(prompt('enter the number'))   // Floating-point number
let negativeNumber =parseInt(prompt('enter the number'));  // Negative number


let sum = integerNumber + floatNumber;      // Addition
let difference = integerNumber - floatNumber; // Subtraction
let product = integerNumber * floatNumber;    // Multiplication
let quotient = integerNumber / floatNumber;   // Division
let modulus = integerNumber % 3; 
console.log(`${sum}
${difference}  
${product}
${quotient}
${modulus}`);
