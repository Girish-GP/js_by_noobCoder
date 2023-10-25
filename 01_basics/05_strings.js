const name = "ggp"
const repoCount = 50
console.log(name + repoCount + "value")//dont use this syntax
console.log(`${name}${repoCount} value`)//modern way using backticks ``

const gameNew = new String('ggpoxvc')
console.log(gameNew) //[String: 'ggp']
console.log(typeof gameNew) //object

//Here js coerces the name string into a object like structure whenever bracket notation is used
console.log(name[0])//g 
console.log(name['0'])//g
// console.log(name.0) shows error as name is not an actual object
console.log(name.__proto__)

console.log(gameNew.length)
console.log(gameNew.toUpperCase())
console.log(gameNew.charAt(2))
console.log(gameNew.indexOf('p'))

const newStr = gameNew.substring(0,3)// 0 index se 3 characters
console.log(newStr)

const newStr1 = gameNew.slice(-7,3);
console.log(newStr1)

const newStr2 = " hhj "
console.log(newStr2)
console.log(newStr2.length)
console.log(newStr2.trim())
console.log(newStr2.length)
console.log(newStr2.trimEnd())
console.log(newStr2.trimStart())

const url = "https//xyz.com/hish%20cgh"
console.log(url.replace('%20',' '))

console.log(url.includes('https'))
console.log(url.split('/'))