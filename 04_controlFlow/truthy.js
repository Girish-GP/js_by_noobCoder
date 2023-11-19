const userEmail = "h@hdajh.ai" //trur value
const userEmail2 = "" //false value
const userEmail3 = [] //true value

if(userEmail3.length){
    console.log(`User Email is ${userEmail}`)
} else {
    console.log("Not found")
}

//falsy Values
// false, 0 , '' , "" ,-0 ,BigInt 0n, null , undefined , NaN

//truthy Values
// true, "0" , 'false' , [] , " " , ' ' , {} , function(){}

const emptyObject = {}
if(Object.keys(emptyObject).length){
    console.log("Object is not empty")
} else {
    console.log("Object is empty")
}

// false == 0 --> true
// false == '' --> true
// 0 == '' --> true

//Nullish Coalescing Operator (??) : null undefined

let val1;

// val1 = 5 ?? 10 --> 5
// val1 = null ?? 10  ---> 10
// val1 = undefined ?? 14 --> 14
console.log(val1)

let val2
val2 = null ?? 20 ?? 30 //Here 20
console.log(val2)


// ?: --> ternary 
//condition ? true : false
let x = 10 > 9 ? "Yes":"No";
console.log(x)//Yes


const display = (num) =>{
  const x = 4 | num
  console.log(x)
}

display() // 4
display(7) // 7