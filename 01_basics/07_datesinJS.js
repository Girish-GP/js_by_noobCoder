//Date in JS

let myDate = new Date()
// console.log(myDate)
// console.log('toString Method',myDate.toString())
// console.log('toISOString Method',myDate.toISOString())
// console.log('toJSON Method',myDate.toJSON())
// console.log('toLocaleDateString Method',myDate.toLocaleDateString())
// console.log('toLocaleString Method',myDate.toLocaleString())

// //The toJSON and toISOString methods of the Date object produce the same output when called because they both return a string representation of the date and time in the ISO 8601 format. The reason they provide the same result is that the ISO 8601 format is a standardized date and time representation, and both methods are designed to conform to this standard.

// console.log(myDate.getDay())
// console.log(myDate.getDate())
// console.log(myDate.getHours())
// console.log(myDate.getFullYear())
// console.log(myDate.getTime())
// console.log(myDate.getMonth())

// myDate.setFullYear(2000,2,23)
// console.log(myDate.getDate())
// console.log(myDate.getFullYear())
// console.log(myDate.getMonth())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(typeof myDate) //object

// let myCreatedDate = new Date(2023 , 0 ,23 , 15 , 3 ,3) //month starts with zero in js
// console.log(myCreatedDate.toLocaleDateString())
// console.log(myCreatedDate.toLocaleString())

let newCreatedDate = new Date("11-01-2023") // format mm-dd-yyyy
console.log(newCreatedDate.toLocaleDateString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)//milliseconds
console.log(newCreatedDate.getTime())//milliseconds

console.log(Math.floor(Date.now()/1000))

//Most used method
console.log(newCreatedDate.toLocaleString('default',{
   weekday: "long",
}))