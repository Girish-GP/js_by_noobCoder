// console.log( 2> 1)
// console.log( 2 < 1)
// console.log( 2 >= 1)
// console.log( 2 <= 1)
// console.log( 2 != 1)


//No predictable results when comparing two different data types
// console.log("2" > 1)
// console.log("02" > 1)

// console.log(null > 0)//false
// console.log(null < 0)//false
// console.log(null == 0)//false
// console.log(null >= 0) //true
// console.log(null <= 0) //true
//In javascripy the equality check == and comparisions  > < >= <= works differently
//comparisions convert null to a number treating it as 0
// So thats why null == 0 is false but null >= 0 is true

// console.log(undefined > 0)//false
// console.log(undefined < 0)//false
// console.log(undefined == 0)//false
// console.log(undefined >= 0)//false
// console.log(undefined <= 0)//false

//strict check === checks value & datatypes also
console.log("2" == 2)//true
console.log("2" === 2)//false

