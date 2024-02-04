//Class syntax

class Designation {
    constructor(designation) {
      this.designation = designation;
    }
  
    getDesignation() {
      return `Designation: ${this.designation}`;
    }
  }

//function constructor syntax

function Designation1(designation) {
    this.designation = designation;
  
    this.getDesignation = function () {
      return `Designation: ${this.designation}`;
    };
  }


//Differences:

// Syntax:
// The class syntax is introduced in ECMAScript 2015 (ES6) and provides a more concise and expressive way to define constructor functions and methods.
// The function constructor syntax is the traditional way of defining constructor functions.


// prototype Property:
// In the class syntax, methods are automatically added to the prototype of the class. So, getDesignation is attached to Designation.prototype.
// In the function constructor syntax, methods are created for each instance of the object. So, getDesignation is attached directly to each instance of Designation.

// Memory Usage:
// With the class syntax, methods are shared among instances, leading to better memory efficiency. There is only one copy of the method in the prototype.
// With the function constructor syntax, each instance has its own copy of the method, potentially using more memory.

// in the class syntax in JavaScript, the methods are shared among instances through the prototype chain, which results in memory efficiency. Each instance doesn't have its own copy of methods; instead, they share a single copy via the prototype.




//Revised Function COnstructor

function Designation2(designation) {
    this.designation = designation;
  }
  
  // Attaching the method to the prototype
  Designation2.prototype.getDesignation = function () {
    return `Designation: ${this.designation}`;
  };

//In the revised function constructor, we attach the getDesignation method to the prototype explicitly to make it more comparable to the class syntax in terms of memory usage.


//Conclusion:
// The class syntax is generally considered more modern, readable, and in line with the principles of object-oriented programming.
// The function constructor syntax is an older approach and may lead to more memory usage if methods are not attached to the prototype.
  