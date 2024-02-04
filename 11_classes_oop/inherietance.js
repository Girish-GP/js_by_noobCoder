
class Animal {
    constructor(type){
        this.type = type;
    }

    displayType(){
        console.log(`Type of animal : ${this.type}`)
    }

    static createID(){
        return '1223'
    }
}

class Bird extends Animal{
    constructor(type,name){
        super(type);
        this.name = name
    }

    fly(){
        console.log(`Bird ${this.name} of type ${this.type} is flying`)
    }
}

const bird1 = new Bird('Bird','crow')

bird1.fly();
bird1.displayType();

console.log(bird1 === Bird) //false
console.log(bird1 === Animal)//false
console.log(bird1 instanceof Bird)//true
console.log(bird1 instanceof Animal)//true

bird1.createID() // as it is a static method it is not accessible to instances made from parent or its child