const prompt = require('prompt-sync')();
let str=prompt('Enter the string::')
const countVowels=(str)=>{
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]=='a' || str[i]=='e' || str[i]=='i'|| str[i]=='o'||  str[i]=='u'){
        count++
        }else{
            continue
        }
    }
    return count
}
const NumVowles=countVowels(str)
console.log(NumVowles);
