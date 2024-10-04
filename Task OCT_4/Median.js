const prompt = require('prompt-sync')();
let m = parseFloat(prompt('Enter the number:'))
let n = parseFloat(prompt('Enter the number'))
let l=m+n
let median=0
const arr1 = []
const arr2 = []
let arr3 = []
let i = 0
let j = 0
let k = 0
for (let i = 0; i < m; i++) {
    arr1[i] = parseFloat(prompt(`Enter the ${i + 1} number of element: `))
}
for (let i = 0; i < n; i++) {
    arr2[i] = parseFloat(prompt(`Enter the ${i + 1} number of element: `))
}
while (i < m & j < n) {
    if (arr1[i] < arr2[j]) {
        arr3[k] = arr1[i]
        i++
        k++
    } else {
        arr3[k] = arr2[j]
        k++
        j++
    }
}
while(i<m){
    arr3[k]=arr1[i]
    k++
    i++
}
while(j<n){
    arr3[k]=arr2[j]
    j++
    k++
}
if(l%2==0){
 median=(arr3[l/2]+arr3[(l/2)-1])/2
}else{
    median=arr3[(l/2)-0.5]
}
console.log(median);
