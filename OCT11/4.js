const prompt = require('prompt-sync')();
const input1 = prompt("Enter your name:");
const input2 = prompt("Enter your name:");
const isEqual=(input1,input2)=>{
    let arr1=input1.split('')
    arr1.sort()
    let final1=arr1.join()
    console.log(final1);
    let arr2=input2.split('')
    arr2.sort()
    let final2=arr2.join()
console.log(final2);
    if(final1==final2){
        return true
    }
    return false
}
let ans=isEqual(input1,input2)
console.log(ans);

