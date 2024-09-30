const { resolve } = require("lodash");
function getFunctiondata(data){
  return  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`${data}`);
            resolve('success')
        },2000)
    }) 
}
getFunctiondata(123)
.then((res)=>{
    return getFunctiondata(456)
})
.then((res)=>{
    console.log(`succefully fetched ${res}`);
})