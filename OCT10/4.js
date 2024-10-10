
const print=(arr)=>{
    setInterval(()=>{
        const printarr=(arr)=>{
            for(let i=0;i<arr.length;i++){
                console.log(arr[i]);
            }
        }
        printarr(arr)
    },5000)
}
const printre=(arr)=>{
    setInterval(()=>{
        const printreverse=(arr)=>{
            for(let i=arr.length-1;i>=0;i--){
                console.log(arr[i]);
            }
        }
        printreverse(arr)
    },5000)
}
let arr=[1,2,3,4,5,6,7,8,9,10]
print(arr)
printre(arr)