/*
this is a special keyword in js which represents the cuurent context or current object where the code is executing
its value changes depending upon how it been called

*/

//Normal function --> global object (undefined in strict mode ; window in browser)
function foo(){
    console.log(this);
}
foo()

//When called as method on a object
const person = {
    name: 'girish',
    greet: function(){
        console.log(`Hello ${this.name}`);
    }
}
person.greet() // Hello girish

//Arrow functions
var text = "lexical this"
const x = {
    text: 'dummy',
    myArrow: () => console.log(this.text),
    method: function(){
        this.myArrow();
    }
}
x.method(); //undefined

function f(){
    console.log(this.personName)
}
f.call({personName:'abc'}) //abc

//Constructor function this refers to the newly created object instance
function Student(name){
    this.name = name
}

Student.prototype.greet = function(){
    console.log(`Hello ${this.name}`)
}

const student1 = new Student('ggp');

student1.greet();