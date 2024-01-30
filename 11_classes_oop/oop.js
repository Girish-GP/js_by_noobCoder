
// Object literal -- basic unit of objects below
const user = {
    userId: 2,
    signedIn: true,
    getUserDetails: function (){
        // return {userId: this.userId}
        console.log(this) //gives current context object
    }
}

// console.log(user.getUserDetails())


//contructor 

function User(userId,userName,signedIn){
    this.userId = userId;
    this.userName = userName;
    this.signedIn = signedIn;

    this.greeting = function (){
        console.log(`Welcome ${this.userName}`)
    }
    // return this;// agar ye nahi likha tabhi bhi by default return hota hai
}
//new keyword use karne pe ek empty isntance object create hota hai woh constructor function jaisa
const user1 = new User(123,'GGp',true)
const user2 = new User(12334,'XYZ',false)

console.log("User 1 : ",user1)//User 1 :  User { userId: 123, userName: 'GGp', signedIn: true }
console.log("User 2 : ",user2) // User 2 :  User { userId: 12334, userName: 'XYZ', signedIn: false }

console.log(user1.greeting())
console.log(user2.greeting())

console.log("User Constructor",user1.constructor) //User Constructor [Function: User]
//Constructor property is reference of itself 