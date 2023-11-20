//Loops for Array

//For of loop
// ['','','']
// [{},{},{}]
const str = 'ggp'
for(let item of str){
    console.log(item)
}
const arr = [1,2,3,4,5]
for(let item of arr){
    console.log(item)
}
const arr1 = [
    {
     name:'ggp',
     name:'ca',
     age:12
    },
    {
     name:'xyz',
     age:22
    },
    {
     name:'ghh',
     age:32
    }
]
for(let item of arr1){
    console.log(`Name is ${item.name} with Age ${item.age}`)
}

//Maps

const map = new Map()
map.set('name','ggp')
map.set('name','xyz')
console.log(map)
console.log(arr1)

for(const item of map){
    console.log(item) // ['name','xyz']
}
for(const [key,value] of map){
    console.log(value) // xyz
}

const obj = {
    'gameName1': 'PUBG',
    'gameName2': 'bgmi',
}
// for(let item of obj){
//   console.log(item) // objects not iterable
// }