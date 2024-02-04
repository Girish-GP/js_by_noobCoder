// function multiply(num){
//     return num*3
// }

// multiply.power = 2;

// console.log(multiply(5))
// console.log(multiply.power)
// console.log(multiply.prototype)

// function createUser(username,score){
//     this.username  = username;
//     this.score = score;
// }

// createUser.prototype.increment = function(){
//     this.score++;
//     return this.score
// }

// createUser.prototype.printMe = function(){
//     console.log(`Score is ${this.score}`)
// }

// const user1 = new createUser('xyz',23)
// const user2 = new createUser('ggp',12)

// console.log(user1.increment())
// console.log(user2.increment())

const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,101,102,103,104,105,106,107,108,109,110]
const divisibleBy = [2,3,4,5,6,7,8,9]
const temp =arr.reduce((accumulator,currentValue)=>{
    let isPrime = true;
  divisibleBy.forEach((item)=>{
     if(currentValue > 1 && currentValue !== item && currentValue % item === 0){
        isPrime = false
     } 

  })
  if(isPrime){
    accumulator.push(currentValue)
  } 

  return accumulator;
},[])

console.log(temp)