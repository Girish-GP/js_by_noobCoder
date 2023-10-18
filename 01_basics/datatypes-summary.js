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

console.log(typeof score)//number
console.log(typeof scorevalue)//number
console.log(typeof isloggedin)//boolean
console.log(typeof outsidetemp)//object
console.log(typeof userEmail)//undefined
console.log(typeof id)//symbol
console.log(typeof bigNumber)//bigint





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

console.log(typeof heroes, typeof obj , typeof hello)// object object function
//function returns function but it is called object function