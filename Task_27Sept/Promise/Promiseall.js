// const function1=()=>{
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//      const data=[1,2,3]
//      resolve(data)
//     },2000)
//   })
// }
// const function2=()=>{
//     return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//        const data=[4,5,6]
//        resolve(data)
//       },2000)
//     })
// }
// const function3=()=>{
//     return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//        const data=[7,8,9]
//        resolve(data)
//       },2000)
//     })
// }

// Promise.all([function1(),function2(),function3()])
// .then(dataArray=>{
//     console.log(`Data fetched succesfully ${dataArray}`);
// })
// .catch((err)=>{
//     console.log(`error in promise ${err}`); 
// })
const function1=()=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
       const data=[1,2,3]
       resolve(data)
      },2000)
    })
  }
  const function2=()=>{
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
         const data=[4,5,6]
         resolve(data)
        },3000)
      })
  }
  const function3=()=>{
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
         const data=[7,8,9]
         reject(data)
        },4000)
      })
  }
Promise.all([function1(),function2(),function3()])
.then(dataArray=>{
    console.log(`Data fetched succesfully ${dataArray}`);
})
.catch((err)=>{
    console.log(`error in promise ${err}`); 
})