var num1 = 34;
console.log(num1)

let str = "girish"
console.log(str)

const bool = true;
console.log(bool)

const obj = {
    number: 12,
    null: null,
    boolean: true,
    BigInt: 25555555,
    string: "233",
    symbol: Symbol("this is symbol"),
    undefined: undefined,
}
for (let item in obj){
    console.log(obj[item],typeof obj[item])
}
const arr= [1,23,2]
function hello(){
    console.log("hello")
}
console.log(typeof obj)//object
console.log(typeof arr)//object
console.log(typeof hello)//function

// null --> Object
// undefined --> undefined


let name = "ddaf";
console.log(name)
name ="ffff"
console.log(name)

const team = "323re"
// team = 4343 //typeError : Assignment to a constant variable

console.log(Object.keys(obj),Object.values(obj),Object.entries(obj))


for(let [key,value] of Object.entries(obj)){
    console.log(key+":"+String(value))
}
