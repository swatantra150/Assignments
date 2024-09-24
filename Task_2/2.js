const prompt = require('prompt-sync')();
let names = []
let len = prompt('Enter the number::')
for (let i = 0; i < len; i++) {
    let str = prompt('Enter the string::')
    names[i] = str
}
const finalans=(names)=>{
  
let ans = 0;
let allEqual = true
for (let i = 0; i < len; i++) {
    let count = 0;
    if (count < names[i].length) {
        count = Math.max(count, names[i].length);
        final = names[i]
    }
    if (ans < count) {
        ans = count
    }
    if (i > 0 && names[i].length !== names[0].length) {
        allEqual = false;
    }
}
if(allEqual){
    console.log(`All of have same length`);
    
}else{
    console.log(`${final}:${ans}`);
}
}
finalans(names)


