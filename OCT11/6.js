const prompt = require('prompt-sync')();
let m = parseFloat(prompt('Enter the length of array:'))
let arr = []
for (let i = 0; i < m; i++) {
    arr[i] = parseFloat(prompt(`Enter the ${i + 1}number:`))
}
const removeDuplicate=(arr)=>{
    let j=1,i=0
    //1 1 2 3
    while(j<m){
        if(arr[i]!=arr[j]){
            i++
            arr[i]=arr[j]
        }
        j++
    }
    arr.pop()
    return arr
}
let ans=removeDuplicate(arr)
console.log(ans);

