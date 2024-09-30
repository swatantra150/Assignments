// const function1=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log('Fetched data1 succesfully');
//         resolve('Success')
//     })
// }
// const function2=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log('Fetched data2 successfully');
//         resolve('Success')
//     })
// }
// const function3=(params)=>{
//     return new Promise((resolve,reject)=>{
//         console.log('Fetched data3 successfully');
//         resolve('Success')
//     })
// }
// Function to create a custom Promise.all-like behavior with state tracking
Promise.swatantra = function (promises) {
    let states = promises.map(() => 'pending'); // Track states of each promise
    
    return new Promise((resolve, reject) => {
        let results = [];
        let completedPromises = 0;
        promises.forEach((promise, index) => {
            promise
                .then((value) => {
                    results[index] = value;
                    states[index] = 'fulfilled'; // Update the state to 'fulfilled'
                    completedPromises++;
                    if (completedPromises === promises.length) {
                        resolve({ results, states }); // Resolve with both results and states
                    }
                })
                .catch((error) => {
                    states[index] = 'rejected'; // Update the state to 'rejected'
                    reject({ error, states }); // Reject with error and current states
                });
        });
    });
};
// Example Promises
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
            reject(data3)
         },1000)
    })
}
// Using Promise.custom
Promise.swatantra([promise1(), promise2(), promise3()])
    .then(({ results, states }) => {
        console.log('All promises fulfilled:');
        console.log('Results:', results); // Output: Results from all promises
        console.log('States:', states); 
        })
    .catch(({ error, states }) => {
        console.log('Error:', error);     // Outputs the error from the first rejected promise
        console.log('States:', states);   // Outputs the state of each promise
    });
