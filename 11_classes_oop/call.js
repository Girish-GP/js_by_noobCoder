//In JavaScript, the call() method is a function method that allows you to call a function with a specified this value and arguments provided individually. It is used to invoke a function and explicitly set the context (the value of this) for that function.

//idhar setIuserName ka joh bhi context hai usse ham ek explicit this object se attach karenge

//The first argument to call is the context object (this value), and subsequent arguments are passed as individual arguments to the function.

function setIUserName(userName){
  //Complex DB call
  this.userName = userName
}

function createUser(userName,password,age){
    // setIUserName(userName) // scenario 1
    setIUserName.call(this,userName) // scenario 2
    //Idhar hamne call use karke setIusername ko createUser ka this refer karne ko bola because of that the userName which is set in setIUserName function will be attach to this of createUser function
    this.password = password
    this.age = age
}

const user = new createUser('GGP','2233',24)

console.log(user) //createUser { password: '2233', age: 24 } scenario 1
//createUser { userName: 'GGP', password: '2233', age: 24 } scenario 2