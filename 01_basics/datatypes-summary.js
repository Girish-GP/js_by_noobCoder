//primitive 
//call by value
//7 types : String , Number , Boolean , null , undefined , symbol , BigInt

//JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.
const score = 100
const scorevalue = 100.3

const isloggedin = false
const outsidetemp = null

let userEmail;

const id = Symbol('123')
const id2 = Symbol('123')
console.log(id === id2)

const bigNumber = 345092201091934n

// console.log(typeof score)//number
// console.log(typeof scorevalue)//number
// console.log(typeof isloggedin)//boolean
// console.log(typeof outsidetemp)//object
// console.log(typeof userEmail)//undefined
// console.log(typeof id)//symbol
// console.log(typeof bigNumber)//bigint





//Non primitive or Reference type

//Array , Objects , Functions
const heroes = ['xxx','hdhw']
const obj = {
    name: 'jdkw',
    age: 19
}

const hello = function(){
    console.log("hello world")
}

// console.log(typeof heroes, typeof obj , typeof hello)// object object function
//function returns function but it is called object function


//**************************************** *//

//Stack Memory(Primitive) , Heap Memory(Non-Primitive)


//For primitive datatypes we use stack 
let str1 = "ggpXX"
let str2 = str1 // here the st1 value copy is assigned to str2 so when st2 changes it does not impact str1 
console.log(str2,str1)
str2="XXY"
console.log(str2,str1)


//For non primitive datatypes we use heap
let user1 ={
    name:"XXX"
}
let user2 = user1; // here the memory reference of user1 is assigned to user2 so when user2 changes it also changes the user1
console.log(user1, user2)
user1.name = "TTT"
console.log(user1, user2)