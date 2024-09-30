//Call
const setUsername=(userName)=>{
 this.userName=userName
}
const createUser=(userName,email,password)=>{
   setUsername.bind(this,userName)
   this.email=email
   this.password=password
}
const user=createUser.call({},'swatantra','abc@gmail.com','123')

console.log(this);

//Apply
const user1=createUser.apply({},['swatantra','abc1@gmail.com','123'])
console.log(user1);
