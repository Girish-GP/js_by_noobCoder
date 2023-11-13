//Functions -- joh bhi aapne code likha hai usko aapne ek package mai wrap kar giya hai jisse aap bahot jagah pe use kar sakte ho

function sayMyName(){
    // console.log("I am a function");
}
sayMyName();
// console.log(typeof sayMyName); //This will return "Function" because it is a type of object in JavaScript


//Function Definition : here num1 & num2 are known as parameters
const addTwoNumbers=(num1,num2)=>{
    // console.log(num1 + num2)
    // default returns undefined
}
const addTwoNumbers2=(num1,num2)=>{
    return num1+num2 // default returns undefined
    // console.log("bjajsdba") //unreachable code
}

const result = addTwoNumbers(3,3) // here its arguments
const result1 = addTwoNumbers2(3,3) // here its arguments
addTwoNumbers(3,'3')
addTwoNumbers(3,'a')
addTwoNumbers(3,null)
// console.log(typeof +'3')
// console.log(`Addition of two numbers is ${result}`)//Addition of two numbers is undefined
// console.log(`Addition of two numbers is ${result1}`) // Addition of two numbers is 6


const userLoginMsg = (userName = 'userX')=>{
    if(userName){
        return `${userName} just logged in`
    } else{
        return 'User not found'
    }   
}

// console.log(userLoginMsg('ggp'))
// console.log(userLoginMsg())

//Here ...num1 is rest paramaters
const calculateCartPriceDefault = (val1 , val2 ,...num1) =>{
    return num1 
}
console.log(calculateCartPriceDefault(200,800,56,67)) //[ 56, 67 ]
const calculateCartPrice = (...num1) =>{
    let totalPrice = 0;
    num1.forEach((item) =>{
      totalPrice += item;
    })
    return totalPrice
}

console.log(calculateCartPrice(3,400,25))

//Passing an Object as an Argument to a function
const user = {
    name: "xyz",
    age:23
}

const handleObj = ({name:temp1,age:temp2}) =>{
    return `User Name is ${temp1} and his/her age is ${temp2}`
}
const handleObj1 = (anyObj) =>{
    return `User Name is ${anyObj.name} and his/her age is ${anyObj.age}`
}
console.log(handleObj(user))//User Name is xyz and his/her age is 23
console.log(handleObj1(user))//User Name is xyz and his/her age is 23
console.log(handleObj({name:'asgvas',age:45}))//User Name is asgvas and his/her age is 45



//Arrays as an argument
function returnArr(arr){
    return arr[1] // returns second value of an array
}
console.log(returnArr([1,2,3])) //2