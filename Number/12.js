const prompt = require('prompt-sync')();
let n = parseFloat(prompt('Enter the number of element: '));
const arr=[]
for(let i=0;i<n;i++){
    arr[i]=parseFloat(prompt(`Enter the ${i+1} number of element: `))
}
const minElement=(arr)=>{
    let mini=Infinity
  for(let i=0;i<n;i++){
    mini=Math.min(arr[i],mini)
  }
  return mini
}
console.log(minElement(arr));

const maxElement=(arr)=>{
   let max=-Infinity
   for(let i=1;i<n;i++){
    max=Math.max(arr[i],max)
  }
  return max
}
console.log(maxElement(arr));
