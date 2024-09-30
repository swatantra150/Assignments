// const { data } = require("@remix-run/router/dist/utils");
// const { reject } = require("lodash");

// let promise=new Promise((resolve,reject)=>{
//     console.log('hi');
    
//   // resolve('promise is fullfilled')
//     reject('promise is not fullfilled')
// })
// promise.then((res)=>{
//     console.log('success');
    
// })
// .catch((err)=>{
//     console.log(`failed ${err}`);

// })


function getData(dataid){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`dataId ${dataid}`);
            resolve('failed while fetching')
        },2000)
    })
}
getData(123).then((res)=>{
    console.log(`data fetched ${res}`);    
}).catch((err)=>{
  console.log(`failed ${err}`);
})
