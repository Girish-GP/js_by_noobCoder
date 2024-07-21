//1
const arr = [1,2,3,4,5]
arr.forEach((item)=> console.log(item))

//2
console.log(arr[0])
console.log(arr[arr?.length-1])

//3
arr.push('new element pushed')
console.log(arr)

//4
arr.pop()
console.log(arr)

//5
arr.unshift('first push')
console.log(arr)

//6
arr.shift()
console.log(arr)

//7
const newArr = arr.map(obj=>obj*2)
console.log(arr,newArr)

//8
const filteredArr= arr.filter(item=> item%2 === 0)
console.log(filteredArr)

//9
const sum = newArr.reduce((acc,cv)=>{
  acc = acc+cv
  return acc
},0)
console.log(sum)

//10
for(let i=0 ; i< newArr?.length; i++){
    console.log(newArr[i])
}

//11
newArr.forEach((item)=> console.log(item+10))

//12
const twoD = [[1,2],[5,6]]
console.log(twoD)

//13
console.log(twoD[0][1])
console.log(twoD[1][1])