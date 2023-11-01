//Array
//JS array are resizable and can store any types
const myArray = [ 1, 'ggp' , null , undefined ,788]
const heros = ['bds','asd']
const myArr2 = new Array(1,2,3,2,45)
// console.log(myArr2[0])


//Array methods
myArr2.push(37)
// console.log(myArr2)//[ 1, 2, 3, 45, 37 ]
myArr2.pop()
// console.log(myArr2)// [ 1, 2, 3, 45 ]
myArr2.unshift(12)
// console.log(myArr2)// [ 12, 1, 2, 3, 45 ]
myArr2.shift()
// console.log(myArr2)// [ 1, 2, 3, 45 ]

// console.log(myArr2.includes(2))
// console.log(myArr2.indexOf(2))
// console.log(myArr2.lastIndexOf(2))
// console.log(myArr2.join('->'))
// console.log(typeof myArr2.join('->'))
// console.log(myArr2)


//Slice
console.log("A",myArr2)

const myn1 = myArr2.slice(1,3)
console.log("B",myArr2)

//splice changes original array
const myn2 = myArr2.splice(1,3)
console.log("B",myArr2)
console.log(myn1,myn2)