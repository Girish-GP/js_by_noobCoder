const animal = {
    eat: true,
    greet: function(){
        console.log('Hi i am of class animal')
    }
}

const dog = Object.create(animal);

dog.bark = function(){
    console.log('Dog is barking');
    
}


console.log(dog.eat); // true
dog.bark();
dog.greet();



const grandParent = { grandParentName: 'Hi i am grand parent'};
const parent = Object.create(grandParent);
parent.parentName = 'Hi i am parent'
const child = Object.create(parent);
child.childName = 'Hi i am child';


console.log(child.childName); // property found in original object
console.log(child.parentName);// property found in prototype
console.log(child.grandParentName); // property found in prototype chain


//Object Literal
const obj1 = {name:'abc'}

//Constructor function
function Animal(name){
    this.name = name;
}
const obj2 = new Animal('tommy');

//Object.create()
const obj3 = Object.create({test:'xyz'});

//using new Object()
const obj4 = new Object()
obj4.greet = function(){
    console.log('Object created')
}

//Using class
class User{
    constructor(name){
        this.name = name;
    }

    greet() {
        console.log(`Hi ${this.name}`)
    }
}