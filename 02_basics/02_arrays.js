const heros1 = ['abc','xyz']
const heros2 = ['ghyt','bxjs']


//here push updates the original array heros1
//It adds new element arr2 in the arr1 as a array 
// heros1.push(heros2)
// console.log(heros1,heros2) //[ 'abc', 'xyz', [ 'ghyt', 'bxjs' ] ] [ 'ghyt', 'bxjs' ]
// console.log(heros1[2][1]) //bxjs

//here concat creates a new array 
// const newHeros = heros1.concat(heros2)
// console.log(heros1) //[ 'abc', 'xyz' ]
// console.log(newHeros) //[ 'abc', 'xyz', 'ghyt', 'bxjs' ]

//spread operator
const allNewheros = [...heros1,...heros2] //ab sab spread hogaye hai so woh ab arrays nahi hai but indivisual element hai
// console.log(allNewheros)

//Rare - flat methods
const newArr4 = [1 ,2 , 3 , [4,5,6],7,[6,7,[4,5]]]
const usableArr = newArr4.flat(Infinity)
// console.log(usableArr)

//Check if Array
console.log(Array.isArray('girish'))
console.log(Array.isArray(['girish']))

//Convert to Array
console.log(Array.from('hdvhsf')) //[ 'h', 'd', 'v', 'h', 's', 'f' ]
console.log(Array.from({name: 'ggp'})) // [] -- Interesting case

let scrore1 = 100
let scrore2 = 200
let scrore3 = 300

console.log(Array.of(scrore1,scrore2,scrore3)) //[ 100, 200, 300 ]