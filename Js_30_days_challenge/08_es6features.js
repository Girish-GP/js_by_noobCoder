//1
const person ={
    name: "XYZ",
    age:23
}
console.log(`The person ${person?.name} is ${person?.age} years old.`)

//2
person.job = "UI Dev"
console.log(`The person ${person?.name} is ${person?.age} years old.
He/she is a ${person?.job} by profession.
    `)

//3
const  numbers = [23,21,35,32];
// (()=>console.log("hi"))()
const [num1,num2] = numbers;
console.log(num1,num2)

//4
const book = {
    title:"XYA",
    price:345
}
const {title,price} = book;
console.log(title,price)

//5 spread operator
const newArr = [...numbers,89,367,324]
console.log(newArr)

//6 rest operators/rest parameters
const sum  = (...argArray) =>{
    let sum = 0;
    argArray?.forEach(obj=> sum+=obj)
    console.log(`The sum of ${argArray} is ${sum}`)
}
sum(3,43,2)
sum(33,43,2,2)

//7
const product = (num1,num2=2) => console.log(num1*num2)
product(2)
product(21,2)

//8
let name = 'Hero'
let rating = 4.5
const movie = {
   name,rating,greet(){
    console.log("welcome")
   }
}
console.log(movie,typeof movie)


//9
const prop1 = "name"
const prop2 = "age"

const temp = {
    [prop1]:"imaan",
    [prop2]:45
}
console.log(temp)