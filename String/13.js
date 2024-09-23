const prompt = require('prompt-sync')();
let str=prompt('Enter the string::')
const reverseString = (str) => {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString(str));
