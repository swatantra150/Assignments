const prompt = require('prompt-sync')();
let m = parseFloat(prompt('Enter the number:'))
let reverse=''
let isNegative = false; 
if (m < 0) {
    isNegative = true;
    m = Math.abs(m);
}
while(m>0){
    reverse+=m%10
    m=Math.floor(m/10)
}
reverse=parseInt(reverse)
if (isNegative) {
    reverse= -reverse;
}

if (reverse < Math.pow(-2, 31) || reverse> Math.pow(2, 31) - 1) {
    reverse= 0;
}
console.log(reverse);

