const score = 400 //implicit type number
console.log(score)

const balance = new Number(100)
console.log(balance,typeof balance) //[Number: 100] object

console.log(balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed(2))//precision value 100.00

const otherNumber = 23.8978
console.log(otherNumber.toPrecision(2)) //will convert 23.8978 to a precised 2 digit only with .8 rounding off to 24
console.log(otherNumber.toPrecision(3))//23.9

const num1 = 20;
let num2 = num1;
console.log(num1,num2)
num2= 45;
console.log(num1,num2)

const num3 = new Number(30)
let num4 = num3
console.log(num3,num4)
num4 = new Number(67)
console.log(num3,num4)