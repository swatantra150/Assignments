const prompt = require('prompt-sync')();
let length = parseInt(prompt('Enter the number of characters to extract: '));
let str = prompt('Enter the string: ');
let start = parseInt(prompt('Enter the starting index for the substring: '));

const extractSubstring = (str, start, length) => {
    let result = '';
    if (start < 0) {
        start = str.length + start; 
    }
    for (let i = 0; i < length; i++) {
        if (start + i < str.length && start + i >= 0) {
            result += str[start + i];
        } else {
            break; 
        }
    }

    return result;
}

const ans = extractSubstring(str, start, length);
console.log(ans);
