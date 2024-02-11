function init() {
    let name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();

//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.


//   init() creates a local variable called name and a function called displayName(). The displayName() function is an inner function that is defined inside init() and is available only within the body of the init() function. Note that the displayName() function has no local variables of its own. However, since inner functions have access to the variables of outer functions, displayName() can access the variable name declared in the parent function, init().
  

function outer(){
    let name = 'ggp'

    function displayName(){
     console.log(name)
    }

    return displayName
}

const getFunc = outer() // here the displayName along with the closure i.e reference of lexical env is passed


//Question: Here the reference of displayName is passed so does it hold the reference of name

//the outer function is removed from call stack but the displayName function remembers its outer function scope
console.log(getFunc())//ggp



