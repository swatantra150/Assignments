const prompt = require('prompt-sync')();
function getStringLength(str) {
    let count = 0;
    for (let i = 0; str[i] !== undefined; i++) {
        count++;
    }

    return count;
}
let str=prompt('Enter the string::')
console.log(getStringLength(str));

