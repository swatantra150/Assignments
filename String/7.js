const prompt = require('prompt-sync')();
let str=prompt('Enter the string::')
const splitArray=(str, delimiter)=>{
    const result = []; 
    let currentPart = ""; 
    for (let i = 0; i < str.length; i++) {
        
        if (str[i] === delimiter) {
            result.push(currentPart);
            currentPart = ""; 
        } else {
            currentPart += str[i];
        }
    }
    if (currentPart) {
        result.push(currentPart);
    }

    return result;
}
const getarray=splitArray(str,',')
console.log(getarray);
