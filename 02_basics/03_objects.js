//Objects

//Objects can be declared as literals or constructor

//Objects literals

const mySym = Symbol('key1')
const jsUsers = {
    name: "hityss",
    "full name" : 'hityss dbasdkh',
    age : 56,
    location: "jaipur",
    email: "xyz@emial.com",
    isLoggedIn: false,
    lastLoginDays: ['Monday','Saturday'],
    [mySym] : "mykey1"
}
// console.log(jsUsers)
// console.log(jsUsers.name)
// console.log(jsUsers['name'])
// console.log(jsUsers.'full name') // Not possible with dot notation
// console.log(jsUsers["full name"])

//bracket notation is essential in situations where property names are dynamic or include special characters not allowed in standard identifiers.

// console.log(jsUsers[mySym])
// console.log(typeof jsUsers[mySym])

// console.log("Email 1:",jsUsers.email)
jsUsers.email = '76e87y@gmiak.com'
// console.log("Email 2:",jsUsers.email)

//Not allowing the object key values to be changed
// Object.freeze(jsUsers)

// console.log("Name 1:", jsUsers.name)
jsUsers.name = 'dscsdfdff' // no change observed as object is freezed --- it will not show error
// console.log("Name 2:",jsUsers.name)

//adding functions to a object
jsUsers.greetings = function(){
    // console.log(`hello js user ${this.jsUsers.name}`) // incorrect
    console.log(`hello js user ${this.name}`)
}
// console.log(jsUsers.greetings) //undefined
console.log(jsUsers.greetings()) //The first line, console.log("hello js user"), is from the greetings function, and the second line, undefined, is the result of calling the function and logging its return value, which is undefined in this case.