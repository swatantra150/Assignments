const prompt = require('prompt-sync')();
let str=prompt('Enter the string::')
const isPalindrome = (str) => {
    const lowerCaseWord=str.toLowerCase();
    let reversedWord = '';
    for (let i = lowerCaseWord.length - 1; i >= 0; i--) {
        reversedWord += lowerCaseWord[i];
    }
    return lowerCaseWord === reversedWord;
}
const check=isPalindrome(str)
console.log(isPalindrome(str));
