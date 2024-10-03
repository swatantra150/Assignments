const apiFetch=async()=>{
   let result='https://jsonplaceholder.typicode.com/posts'
   result=await fetch(result)
   result=await result.json()
   return result 
}
let data=apiFetch()
data.then(()=>{
    console.log(data); 
})

const apifetch1 = async () => {
    try {
        let result = 'https://jsonplaceholder.typicode.com/posts'
        result = await fetch(result)
        result = await result.json()
        return result
    } catch (error) {
        console.log(error)
    }
}
let data1=apifetch1()
data.then((resolvedData)=>{
 resolvedData.map((item)=>{
    console.log(item.id);
   })
})

const apiFetch2=()=>{
   return new Promise((resolve,reject)=>{
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response)=>{
        if(!response.ok){
            reject(`error ${response.status}`)
        }
        return response.json()
      })
      .then((data)=>{
        resolve(data)
      }).catch((err)=>{
        reject(err)
      })
   })
}
let result=apiFetch2()
result.then((res)=>{
    res.map((item)=>{
        console.log(`${item.id}=>${item.body}`); 
    })
}).catch((err)=>{
    console.log(err); 
})

