//Scopes in JS
// let vs var vs const

// var c=300
let a = 300
let temp = 500
{ 
    //Block Scope
    let a = 10
    const b = 20
    // var c = 30 // global var changed
    temp = 600
    console.log(a) // 10 for block scope
}

console.log(a) //300 for global scoped
// console.log(b)
// console.log(c) //var is global scoped
console.log(temp) // 600 Here globally it is 500 with let but as in block scope there is no declaration of new varaible the temp there refer to the globally referenced temp and respectively changes its value

//Node env mai and browser mai global scope alag alag hota hai

//Nested Scope

const one = ()=>{
    const userName = 'ggp'
    const two = ()=>{
        const website = 'youtube'
        console.log(userName)
        //Child function parent function ka varaible access kar sakta hai
    }
    // console.log(website) Error -- Website is not defined
    two()
}
one()


if(true){
    const user = 'xyz'
    if(user){
        const web = ' xbh'
        console.log(user + web)
    }
    // console.log(web) error
}
// console.log(user) error


//***********************INTERESTING************ */

//JS mai variables kuch bhi hold kar sakte hai json , funct ,etc

// console.log(addOne(5)) //Cannot access 'addOne' before initialization
//Idhar hamne function ko as an expression declare kiya hai so ham usse initialization ke pehle call nahi kar sakte
const addOne = (num) =>{
    return num + 1
}
console.log(addOne(5))

//Idhar woh error nahi deta
console.log(tempX(8))
function tempX(val){
    return val+2
}

