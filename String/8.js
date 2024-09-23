function customReplace(originalString, searchString, replaceString) {
    let result = "";
    let searchLength = searchString.length;
    let i = 0;

    while (i < originalString.length) {
        
        if (originalString.substr(i, searchLength) === searchString) {
            result += replaceString; 
            i += searchLength;
        } else {
            result += originalString[i];
            i++; 
        }
    }

    return result;
}

const prompt = require('prompt-sync')();
let str=prompt('Enter the string::')
console.log(customReplace(str,'world','hi'));

