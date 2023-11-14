//Arrow Functions

const user = {
    userName :'ggp',
    price: 100,

    welcomeMessage : function(){
        console.log(`Welcome ${this.userName}`);
        //Jab current context ko refer karte hai tab this keyword use karte hai
        console.log(this)
    }
}
user.welcomeMessage();   //Welcome ggp
user.userName = 'sam'
user.welcomeMessage()   //Welcome sam

console.log(this) // {} 

//But agar ham browser mai console.log(this) karenge toh woh hame window object dega

// function timePass(){
//     const user = 'XXX'
//     console.log(this)
//     console.log(this.user) //undefined
// }
// timePass()


const timePass = () => {
    const user = 'XXX'
    console.log('Arrow Function THIS keyword',this) //{}
    console.log(this.user) //undefined
}
timePass()

//Default declaration of arrow function

// const addX = (val1,val2) =>{
//     return val1 + val2
// }
//{ } use karenge tab return keyword use karna padta hai
const addX = (num1 ,num2) => (num1+num2) // Implicit arrow function
console.log(addX(3,5))

const myArray = [2,3,4]
const newArr = myArray.forEach((item)=>{
    return (item*item)
}  
)
console.log(myArray)
console.log(newArr)