//Getters & setters before classes
function User(email,password){
    this._email = email;
    this._password = password;
  
    Object.defineProperty(this,'email',{
        set: function(value){
            this._email = value
        },

        get: function(){
         return this._email;
        }
    })

    Object.defineProperty(this,'password',{
        set: function(value){
            this._password = value
        },

        get: function(){
         return this._password;
        }
    })

}

const user1 = new User('xyz@ril.com',6788)

console.log(user1.email)
console.log(user1._email)


// In JavaScript, properties prefixed with an underscore convention (such as _email) are not inherently private or inaccessible. The use of an underscore is merely a convention to indicate that the property is intended to be treated as private or internal to the object. However, JavaScript does not enforce encapsulation or privacy, and any property can be accessed or modified from outside the object if it is accessible


// To encapsulate the _email property and ensure it is only accessible through getter and setter methods, you can modify the User constructor function to hide the _email property from direct access. You can achieve this by using closures to create private variables within the constructor and expose public methods (getters and setters) to interact with these private variables.


function User2(email, password) {
    let _email = email; // Private variable for email
    let _password = password; // Private variable for password
  
    Object.defineProperty(this, 'email', {
        set: function(value) {
            _email = value; // Set the value of the private variable
        },

        get: function() {
            return _email; // Return the value of the private variable
        }
    });

    Object.defineProperty(this, 'password', {
        set: function(value) {
            _password = value; // Set the value of the private variable
        },

        get: function() {
            return _password; // Return the value of the private variable
        }
    });
}

const user2 = new User2('xyz@ril.com', 6788);

console.log(user2.email); // Output: xyz@ril.com
console.log(user2._email); // Output: undefined (Property not accessible from outside)
