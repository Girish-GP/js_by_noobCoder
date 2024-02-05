const person = {
    name: "XYZ",
    sayHello : function () {
        console.log(this.name)
        
    }
   }
   
   person.sayHello() //XYZ


//In your specific example, where person is an object with a method sayHello, the use of bind() might not be necessary. The this value inside the sayHello method is already bound to the person object due to the way it's invoked directly on person.

//However, the need for bind() typically arises in situations where the method is passed around or used as a callback, and you want to ensure that it retains its connection to a specific object, regardless of how it's called. Let's consider an example:


// Assume we have a function that takes a callback
function callCallback(callback) {
    callback();
  }
  
  // Now, if we pass person.sayHello directly, the context might be lost
  callCallback(person.sayHello); // Outputs: undefined (loses the context)
  
  // Using bind to explicitly set the context
  const boundCallback = person.sayHello.bind(person);
  console.log(boundCallback)
  callCallback(boundCallback); //[Function: bound sayHello]
//   when you console.log the result of person.sayHello.bind(person), you see [Function: bound sayHello]. This indicates that you have created a new function using bind() where the context (this value) is permanently set to the person object.

// So, when you use boundCallback (which is the function returned by bind()), it will behave as if you are calling person.sayHello(), ensuring that the this inside sayHello refers to the person object.



//In the example above, when person.sayHello is passed as a callback directly to callCallback, it loses its connection to the person object, and this becomes undefined. This is because the context is not preserved when the method is detached from the object.

// By using bind(), you can create a new function with the context explicitly set to the person object, ensuring that it works correctly even when used as a callback. In practice, this is more common when working with event handlers, asynchronous callbacks, or passing methods as arguments to other functions.



//Why not use call

const boundCallback2 = person.sayHello.call(person);
console.log(boundCallback2) // undefined
// callCallback(boundCallback2); 