const prompt = require('prompt-sync')();
let str=prompt('Enter the string::')
const getStringLength=(str)=>{
    let count = 0;
    for (let i = 0; str[i] !== undefined; i++) {
        count++;
    }

    return count;
}
const length=getStringLength(str)
console.log(length);
if(length>4){
    for (let i = 0; i<4; i++) {
        console.log(str[i])
     }
}
