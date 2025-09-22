/*
Q. Difference between var let const

1] Scope:
   var is global / functional scope
   let is blocked scope
   const is blocked scope

2] Re Declaration
   var can be redeclared
   let and const cant be redeclared

3] Updation
   var can be updated
   let can be updated
   const cant be updated if holding a primitive type but in case of arrays / objects their internal content can be updated

4] Initialization
  var is optional
  let is optional
  const is requried to be initialized during declaration or it gives SyntaxError

5] Hoisting 
   var is hoisted
   let and const are also hoisted but they are in temporal dead zone

6] Access before initialization
   var gives value undefined
   let and const throws ReferenceError: cant access before initialization


*/

function test() {
    console.log(a); // undedined
    // console.log(b); // ReferenceError cannot access b before init
    // console.log(c); // ReferenceError cannot access c before init

  if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
    var a = 40;
    // let b = 23; //cannot redeclare block scoped variable
    // let c = 23; //cannot redeclare block scoped variable
    console.log(a);
    console.log(b);
    console.log(c);
    a = 50;
    b = 90;
    console.log(b);
    // c = 39; //TypeError Assignment to constant variable
  }
  console.log(a); //10
//   console.log(b);  // ReferenceError : b is not defined
//   console.log(c); // ReferenceError : c is not defined
}

test();