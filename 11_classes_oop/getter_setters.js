class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    set password(pass){
    //   this.password = pass;
      this._password = pass; // For eliminating the rangeError
    }

    get password(){
        // return this.password.toUpperCase()
        return this._password.toUpperCase();
    }

    set email(value){
        this._email = value
    }

    get email(){
        return this._email.toUpperCase()
    }
}

const user1 = new User('dbjd@ril.com','21312')

console.log(user1.password) //21312 - for second scenario
//What happens here constructor and set password both are attempting to set a password which results into a race and which in turn results in RangeError 
// RangeError: Maximum call stack size exceeded
//     at set password [as password] (/workspaces/js_by_noobCoder/11_classes_oop/getter_setters.js:8:21)
//     at set password [as password] (/workspaces/js_by_noobCoder/11_classes_oop/getter_setters.js:8:21)
//     at set password [as password] (/workspaces/js_by_noobCoder/11_classes_oop/getter_setters.js:8:21)
//     at set password [as password] (/workspaces/js_by_noobCoder/11_classes_oop/getter_setters.js:8:21)
//     at set password [as password] (/workspaces/js_by_noobCoder/11_classes_oop/getter_setters.js:8:21)
//     at set password [as password] (/workspaces/js_by_noobCoder/11_classes_oop/getter_setters.js:8:21)
//     at set password [as password] (/workspaces/js_by_noobCoder/11_classes_oop/getter_setters.js:8:21)
//     at set password [as password] (/workspaces/js_by_noobCoder/11_classes_oop/getter_setters.js:8:21)
//     at set password [as password] (/workspaces/js_by_noobCoder/11_classes_oop/getter_setters.js:8:21)
//     at set password [as password] (/workspaces/js_by_noobCoder/11_classes_oop/getter_setters.js:8:21)

// Node.js v20.10.0


// In the provided code, it sets the value of this._password instead of directly setting this.password. This is to avoid a "RangeError: Maximum call stack size exceeded" error that could occur due to the circular reference between the setter and getter of password.


// A circular reference occurs when two or more objects or properties refer to each other in a way that creates an infinite loop or cycle. In JavaScript, circular references can lead to unexpected behavior, memory leaks, or stack overflow errors.

// In the context of the provided code, a circular reference could occur if the getter and setter methods of a property are directly referencing each other.

// In this example, the getter and setter methods of the value property directly reference each other (this.value), creating a circular reference. When attempting to set a new value to example.value, it results in a stack overflow error because the assignment statement in the setter method leads to an infinite loop of method calls.

// To prevent circular references, it's important to use separate internal variables for storing property values, as demonstrated in the provided code by using _password and _email instead of directly referencing this.password and this.email inside the getter and setter methods.