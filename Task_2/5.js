const prompt = require('prompt-sync')();
let num=prompt('Enter the number::')

const sum=(num)=>{
    let ans=0
    while(num>0){
    ans+=num%10
    num=Math.floor(num/10)
    }
    return ans
}

console.log(sum(num));
