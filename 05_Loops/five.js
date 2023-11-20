//foreach loops in ARRAYS

const codding = ['js','py','cpp','ng']

console.log(codding.find(item => item.includes('c')))

codding.forEach((item)=>{
 // console.log(item) // js py cpp ng
})

const printMe = (item) =>{
    console.log(item)
}
// codding.forEach(printMe);


codding.forEach((item,index,arr)=>[
    // console.log(item,index,arr)
])

const myCode = [
    {
        name: "Java",
        file: 'java'
    },
    {
        name:'Javascript',
        file: 'js',
    },
    {
        name:'Python',
        file: 'py',
    }
]
myCode.forEach((item, index, arr)=> {
    console.log(`Language ${item.name} with extension ${item.file}`)
})