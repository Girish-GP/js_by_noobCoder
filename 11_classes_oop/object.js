function multiply(num){
    return num*3
}

multiply.power = 2;

console.log(multiply(5))
console.log(multiply.power)
console.log(multiply.prototype)

function createUser(username,score){
    this.username  = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
    return this.score
}

createUser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`)
}

const user1 = new createUser('xyz',23)
const user2 = new createUser('ggp',12)

console.log(user1.increment())
console.log(user2.increment())