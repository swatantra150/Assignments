let user1={
    name:"swatantra",
    age:'21',
}
let user2={
    name:"amit",
    age:'21',
}
function printUserUsingCall(state,country){
    this.state=state
    this.country=country
  console.log(this);
}
//Call
printUserUsingCall.call(user1,'UP','India')
//printUser.call(user2)
//Apply
function printUserUsingApply(country,state){
    this.country=country
    this.state=state
    console.log(this);
}
printUserUsingApply.apply(user2,['Inida','U.P'])
//Bind
function printUserBind(){
    console.log(this);  
}
let printUser=printUserBind.bind(user1)
printUser()