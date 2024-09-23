const prompt = require('prompt-sync')();
let n = parseFloat(prompt('Enter the number of element: '));
const areArraysEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
       
        if (arr1[i] !== arr2[i]) {
            return false; 
        }
    }
    return true;
}

const arr1=[]
for(let i=0;i<n;i++){
    arr1[i]=parseFloat(prompt(`Enter the ${i+1} number of element: `))
}
let arr2=[]
for(let i=0;i<n;i++){
    arr2[i]=parseFloat(prompt(`Enter the ${i+1} number of element: `))
}
console.log(areArraysEqual(arr1,arr2));
