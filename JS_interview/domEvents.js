
const parent = document.getElementById('parent')
const child = document.getElementById('child')

parent.addEventListener('click',($event)=>{
    console.log('Parent Clicked Capturing')
},true)

child.addEventListener('click',($event)=>{
    console.log('Child CLicked Capturing')
},true)

parent.addEventListener('click',($event)=>{
    console.log('Parent Clicked Bubbling')
},false)

child.addEventListener('click',($event)=>{
    console.log('Child CLicked Bubbling')
},false)


const ulList = document.getElementById('list');
ulList.addEventListener('click',(myEvent)=>{
    console.log(`${myEvent?.target?.textContent} Clicked.`)
})