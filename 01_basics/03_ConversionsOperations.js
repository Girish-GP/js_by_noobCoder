//****************Conversions of DataTypes*************

let score = true

// console.log(typeof score)

let numberValue= Number(score)
// console.log(typeof numberValue)
// console.log(numberValue)

//Conversion using Number() 
// Innitial value , Converted value , type
// "33" => 33 number
// "33abc" => NaN number
// undefined => NaN number
// null => 0 number
// true => 1 number
//false=> 0 number

let isLoggedIn = 1;
let isLoggedOut = 0;

let booleanIsLoggedIn = Boolean(isLoggedIn);
let booleanIsLoggedOut = Boolean(isLoggedOut);
// console.log(booleanIsLoggedIn,booleanIsLoggedOut)

// 1 => true 0=> false
// "" => false
// "ggp" => true


let sum = 33
// console.log(String(sum))
// console.log(typeof String(sum))

//**************Operations of DataTypes***************
let value = 3
let negValue = -value;
// console.log(value,negValue)
// + - * ** / %
let str1= "hello"
let str2= " ggp"
let str3 = str1 + str2
// console.log(str3)
// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + 2 + 2) 
// console.log(1 + 2 + "2") 

// console.log(+true) //conversion
// console.log(true+); error
// console.log(+"")

let gameCounter = 100
gameCounter++;
// console.log(gameCounter+1)
console.log(1+gameCounter++)
// console.log(1+(++gameCounter))
// ++gameCounter;
// console.log(gameCounter+1)