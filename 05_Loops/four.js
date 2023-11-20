const myObj ={
    js : "Javascript",
    cpp : "C++",
    rb : "Ruby",
    py : "Python"
}

//Iterating the objects by using 
//FOR IN LOOP
for(let key in myObj){
    // console.log(key) // gives all keys
    // console.log(myObj[key])//gives values
    // console.log(`${key} :- ${myObj[key]}`)
}

//FOR IN LOOP in arrays
const arr=['py','cpp','js','java']
for(let key in arr){
    // console.log(`Value at ${key}th index is ${arr[key]}`)
}

//FOR IN LOOP in Maps
const map = new Map()
map.set('name','ggp')
map.set('age','56')

// for (const key in map) {
//     console.log(key)
// }
//Not iterabel using forin

