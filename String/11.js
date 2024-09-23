const prompt = require('prompt-sync')();
let str=prompt('Enter the string::')
const trimWhitespace = (str) => {
    let start = 0;
    let end = str.length - 1;
    while (start <= end && (str[start] === ' ' || str[start] === '\n' || str[start] === '\t')) {
        start++;
    }
    while (end >= start && (str[end] === ' '||str[end] === '\n'||str[end] === '\t')) {
        end--;
    }
    return str.slice(start, end + 1);
}
console.log(trimWhitespace(str));
