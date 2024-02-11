//Class

class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return `${this._email.toUpperCase()}123XYZ`;
    }

    set email(value){
        this._email = value;
    }
}
const user1 = new User('abc@gmail.com','xyzAcz')

// console.log(user1.email)//ABC@GMAIL.COM123XYZ --- > this email reference returns getter function value
// console.log(user1._email)//abc@gmail.com  ---> here the email reference returns actual email value


//Constructor function

function UserX(email,password){
    this._email = email;
    this._password = password;
  
    Object.defineProperty(this,'email',{
        get: function (){
            return `${this._email.toUpperCase()}CONSTRUCTORFUNCTION`;
        },
        set: function(value){
            this._email = value;
         }
    
    })

    Object.defineProperty(this,'password',{
        get: function(){
            return this._password;
        },
         
        set: function(value){
            this._password = value;
        }

    })
    
   
}
const user2 = new UserX('123@gmail.com','tttconstruc')
console.log(user2.email)//123@GMAIL.COMCONSTRUCTORFUNCTION
console.log(user2._email)//123@gmail.com


//Object

const userXYZ = {
    _email : 'xyz@ril.com',
    _password: 'adasdasfd',
    
    set email(value){
     this._email = value
    },

    get email(){
        return `${this._email}OBJECTGETSET` ;
    }
}

const user3 = Object.create(userXYZ);
console.log(user3.email)//xyz@ril.comOBJECTGETSET
console.log(user3._email)//xyz@ril.com



// Here's how the mechanism works:

// Initialization with Underscore Convention:

// Inside the constructor function User, the properties _email and _password are initialized directly on the instance (this) using underscore convention. These properties are effectively public and can be accessed from outside the object.
// Defining Getters and Setters:

// Object.defineProperty() is used to define getters and setters for the email and password properties.
// The set function for both properties assigns the value passed to the setter to the corresponding underscore-prefixed property (this._email or this._password).
// The get function for both properties returns the value of the corresponding underscore-prefixed property (this._email or this._password).
// Accessing Properties:

// When you access user1.email, the getter function for the email property is invoked, which returns the value of this._email.
// Similarly, when you access user1._email, you directly access the underscore-prefixed property _email initialized in the constructor.
// Both user1.email and user1._email return the same value because the getter for the email property simply returns the value of the underscore-prefixed property _email. However, it's conventional to access properties through the defined getters and setters (user1.email and user1.password) rather than directly accessing underscore-prefixed properties.





