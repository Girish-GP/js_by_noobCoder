const heading = window.document.getElementById('title');
console.log(heading.id) //title
console.log(heading.class) //undefined

console.log(heading.className) //heading
console.log(heading.getAttribute('id')) //title
console.log(heading.getAttribute('class')) //heading
heading.setAttribute('class','parent')
console.log(heading.getAttribute('class')) //parent
heading.style.color = 'red';
heading.style.background = 'green';
heading.style.fontSize = '16px';

//innerHTML pura html ka value de rha like p tag included
//supports html tag if you want to add some tags then use this
console.log(heading.innerHTML)//Dom Learning on chai aur code<p style="display: none;">Hi Boy</p>

//innerText only visible text de rha 
console.log(heading.innerText)//'Dom Learning on chai aur code'

//textContetn pura text de rha irrespective ki woh visible hai ya nahi
console.log(heading.textContent)//Dom Learning on chai aur codeHi Boy


//QuerySelector - selects first item 
// QuerySelectorAll -selects all items
console.log(document.querySelector('h1'))//<h1 id="title" class="parent" style="color: red; background: green; font-size: 16px;">Dom Learning on chai aur code<p style="display: none;">Hi Boy</p></h1>
console.log(document.querySelectorAll('h1'))// NodeList with 3 html element ref in it at 0 , 1, 2 positions

// console.log(document.querySelector('input[type="button"]'))
console.log(document.querySelector('input[value="xyz"]'))
//querySelector supports all css selectors

document.querySelector('p:first-child')

//NodeList & HTMLCollections are not pure arrays just check prototypes before using any array methods on them
//forEach works on nodelist
const tempList = document.querySelectorAll('li')
tempList.forEach(element=> element.style.color ='green')

//querySelectorAll --> gives NodeList
//getElementsByClassName ---> gives HTMLCollection
console.log(document.getElementsByClassName('list-item'))//HTML collection of list items

//Array.from() to convert HTMLCollections & NodeList
const arr = Array.from(tempList);
console.log(arr)
arr.forEach(element => console.log(element))
arr.forEach(element => element.style.background = 'yellow')
