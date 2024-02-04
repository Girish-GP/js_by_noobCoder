//ES6
//In JavaScript, classes provide a way to create blueprints for objects with properties and methods. They were introduced in ECMAScript 6 (ES6) and provide a more familiar syntax for those coming from class-based languages like Java or C++. Despite the syntax, JavaScript's classes are still built on top of the prototype-based inheritance system that JavaScript has always had.
class parentUserOrg{
    constructor(org){
        this.org = org
    }

    disPlayOrg(){
        return this.org
    }
}

class user extends parentUserOrg {
    constructor(org,userName,email,password){
      super(org)
      this.userName = userName;
      this.email = email;
      this.password = password;
    } 

    encryptPassword(){
        return `${this.password}abcxyz`;
    }

    decryptPassword(){
        return this.password;
    }

    changeUserName(){
        return this.userName?.toUpperCase()
    }

    //
}

const user1 = new user('JIO','Ggp','gp@ril.com','jdbdbkf4556')
console.log(user1)
console.log(user1.encryptPassword()) //jdbdbkf4556abcxyz
console.log(user1.disPlayOrg()) //jdbdbkf4556abcxyz


//JavaScript classes support inheritance, allowing you to create a hierarchy of classes.

//In this example, the user class extends the parentUserOrg class, inheriting its properties and methods. The super keyword is used to call the constructor of the parent class. The user class introduces its own property (userName ,email , password) and methods (encrypt , decyrt). Instances of user have access to both the user and parentUserOrg methods.
console.log(user1.changeUserName())








//BEHIND THE SCENCE
console.log("BEHIND THE SCENCE IN JS")
function UserX(userName,email,password){
    this.userName = userName;
    this.email = email;
    this.password = password;
    
    // This function is not accessible outside the constructor
    // function encryptPassword(){
    //     return `${this.password}abcxyz`;
    // }
    //Using this inside encryptPassword: Inside the encryptPassword function, the usage of this can lead to unexpected behavior. In JavaScript, the value of this depends on how a function is called. If encryptPassword is called as a standalone function, this might not refer to the intended object. To ensure that this refers to the instance of userX, you can use arrow functions or explicitly bind this.
    // Not exposing encryptPassword: The encryptPassword function is currently not accessible from outside the constructor. If you want to make it accessible to instances of the object, you should attach it to this.

    //
        // If you declare a function inside the UserX constructor without attaching it to the object using this, that function will not be accessible as a method on instances of UserX. Instead, it will be a local variable within the constructor scope.

        this.getEncryptedPassword = function() {
        // Calling the locally declared function
        return encryptPassword();
    };

    //

    this.encryptPassword = function(){
                return `${this.password}abcxyz`;

    }
    // this.encryptPassword = () =>{
    //             return `${this.password}abcxyz`;

    // }
}
UserX.prototype.getEmail = function (){
    return this.email
}
const userTemp = new UserX('tyson','ty@gmail.com','233434')
console.log(userTemp.encryptPassword())

console.log(userTemp.getEmail())