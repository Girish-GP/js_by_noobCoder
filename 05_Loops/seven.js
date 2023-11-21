//Map

const myNums = [1,2,3,4,5,6,7,8,9,10]
const copy = myNums.map((item)=>item+10)
// console.log(myNums)
// console.log(copy)


//Chaining
const newNums = myNums.map((item)=> item*10).filter((item)=>item%20 ===0)
console.log(newNums)//[ 20, 40, 60, 80, 100 ]

const newNums2 = myNums.map((item)=> item*10).filter((item)=>item%20 ===0).map((item)=>item+2)
console.log(newNums2)//[ 22, 42, 62, 82, 102 ]