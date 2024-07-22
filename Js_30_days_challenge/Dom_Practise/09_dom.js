//1
const heading = document?.getElementById("heading");
console.log(heading?.innerHTML)
console.log(heading?.innerText)
console.log(heading?.textContent)
heading.textContent = "hi bro"

//2
const mainClass = document?.getElementsByClassName("main-class");
console.log(mainClass)
// mainClass.style.color = "red"

//3
const newEl = document?.createElement('div')
newEl.textContent = "Hi i am js para"
document?.body?.appendChild(newEl)

//4
// const ulList = document?.getElementsByTagName('ul')
const ulList = document?.getElementById('list')
console.log(ulList);
const newLi = document?.createElement('li')
newLi.textContent = "Help"
ulList.appendChild(newLi)

//5
document?.body?.removeChild(newEl)

//6
ulList.removeChild(ulList.lastChild)

//7
heading.setAttribute('text','this-text')

//8
heading.classList.add('dummy-class')
heading.classList.add('dummy-class2')
heading.classList.remove('dummy-class')


//9
const para = document?.getElementById('update-para');
function updateText(){
    
    para.textContent = "para changed"
}

//10
function updateBorder(){
   para.style['border-color']= 'green'
}