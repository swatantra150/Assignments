const getFunctionData=(data)=>{
  return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        console.log(`${data}`);
        resolve('success')
      },4000)
  })
}
const getAllFunctionData=async()=>{
    console.log('data1 is fetching');
    await getFunctionData(1)
    console.log('45')
    
    console.log('data2 is fetching');
    await getFunctionData(2)
    console.log('data3 is fetching');
    await getFunctionData(3)
}
const data=getAllFunctionData()
