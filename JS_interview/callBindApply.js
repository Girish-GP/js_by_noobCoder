/*
call() --- invoked immediately with a specified this context with a list of arguments (invidual arguments)

apply() --- invoked immdediately with a specified this context with an array of arguments

bind() -- return a new funtion bounded with the this context can be invoked lettter
*/

const obj1 = {
    name: 'jack'
}
const obj2 = {
    name: 'bob'
}
function greet(greeting,punctuation){
    console.log(`${greeting},${this.name} ${punctuation}`)
}

greet.call(obj1,'Hello','!');
greet.call(obj2,'Hello','?');

greet.apply(obj1,['Namaste','!'])
greet.apply(obj2,['Namaste','!'])

const bindRef = greet.bind(obj1);
const bindRef2 = greet.bind(obj2);
// bindRef('Hello','!');
// bindRef2('Hello','?');







function greet2(greeting,punctuation){
    console.log(`${greeting},${this.name} ${punctuation}`)
}

const person1 = {name: 'ggp'}

greet2.call(person1,'Hello','#');

greet2.apply(person1,['Kaise Ho','?'])

const boundedRef = greet2.bind(person1);
boundedRef('Vanakam','!')