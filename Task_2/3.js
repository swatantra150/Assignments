const prompt = require('prompt-sync')();
let str=prompt('Enter the string::')

const sum=(str)=>{
    let ans=0;
    for(let i=0;i<str.length;i++){
        let val=str[i]
        if(!isNaN(val)){
            ans+=parseInt(val)
        }else{
            continue;
        }
    }
    return ans
}

console.log(sum(str));
