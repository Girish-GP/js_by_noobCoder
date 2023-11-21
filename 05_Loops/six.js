const codding = ['js','py','cpp','ng']

//forEach does not return any value
const values = codding.forEach((item)=>{
//   console.log(item)
  return item
})
console.log(values)



const myNums = [1,2,3,4,5,6,7,8,9,10]


//Filter returns value
const filterdNums = myNums.filter((item)=> item%2 === 0)
console.log(myNums)
console.log(filterdNums)//[ 2, 4, 6, 8, 10 ]

const copyNums = []
myNums.forEach((item)=>{
    if(item%2 === 0){
        copyNums.push(item)
    }
})
console.log(copyNums)//[ 2, 4, 6, 8, 10 ]

const dataBooks = [
    {
        title: "XYZ" , genre:'History' , publish : 1899
    },
    {
        title: "ABC" , genre:'hcsiduc', publish : 1899
    },
    {
        title: "ttt" , genre:'History', publish : 2000
    },
    {
        title: "ijk" , genre:'Histfdewory', publish : 1899
    },
    {
        title: "XYZ" , genre:'fwdf', publish : 2000
    }
]
//books of genre history
const filteredBooks = dataBooks.filter((item)=> item?.genre.toLowerCase() === 'history')
console.log(filteredBooks)
// [
//     { title: 'XYZ', genre: 'History', publish: 1899 },
//     { title: 'ttt', genre: 'History', publish: 2000 }
//   ]

//books publish 2000 or more
const filteredBooks2 = dataBooks.filter((item)=> item?.publish >= 2000)
console.log(filteredBooks2)
// [
// { title: 'ttt', genre: 'History', publish: 2000 },
//     { title: 'XYZ', genre: 'fwdf', publish: 2000 }
//   ]

//genre history & publish 2000 or more
const ftbooks = dataBooks.filter((item) => item?.genre.toLowerCase() === 'history' && item?.publish >= 2000)
console.log(ftbooks) //[ { title: 'ttt', genre: 'History', publish: 2000 } ]