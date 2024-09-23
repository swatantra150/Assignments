
const prompt = require('prompt-sync')();
let min = parseFloat(prompt('Enter the first number: '));
let max = parseFloat(prompt('Enter the second number: '));
const  getRandomNumber=(min, max)=>{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNum = getRandomNumber(min, max);
console.log(randomNum);
