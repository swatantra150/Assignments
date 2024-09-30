const { reject, result } = require("lodash")

Promise.prototype.customPromise = function (promises) {
    let states = promises.map(() => 'pending')
    return new Promise((resolve, reject) => {
        let result = []
        let completedPromises = 0
        promises.forEach((promise, index) => {
            promise
                .then((value) => {
                    result[index] = value
                    states[index] = 'fullfilled'
                    completedPromises++
                    if (completedPromises === promises.length) {
                        resolve({ result, states }); 
                    }
                })
                .catch((error) => {
                    states[index] = 'rejected'; 
                    reject({ error, states }); 
                });
        })
    })
}
const promise1=()=>{
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            const data1=[1,2,3]
            resolve(data1)
         },3000)
    })
}
const promise2=()=>{
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            const data2=[4,5,6]
            resolve(data2)
         },2000)
    })
}
const promise3=()=>{
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            const data3=[7,8,9]
            resolve(data3)
         },1000)
    })
}
new Promise(() => {}).customPromise([promise1(), promise2(), promise3()])
    .then(({ results, states }) => {
        console.log('All promises fulfilled:');
        console.log('Results:', results);
        console.log('States:', states);
    })
    .catch(({ error, states }) => {
        console.log('Error:', error);
        console.log('States:', states);
    });