const function1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = [1, 2, 3]
            resolve(data)
        }, 2000)
    })
}
const function2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = [4, 5, 6]
            resolve(data)
        }, 3000)
    })
}
const function3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = [7, 8, 9]
            reject(data)
        }, 4000)
    })
}
Promise.allSettled([function1(),function2(),function3()])
.then((result)=>{
    result.forEach(result=>{
        if(result.status==='fulfilled'){
        console.log(`value ${result.value}`);
        }else{
            console.error(`reason for rejection ${result.reason}`);
            
        }
    })
})
