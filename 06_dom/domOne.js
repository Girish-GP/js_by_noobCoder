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
console.log(heading.innerHTML)//Dom Learning on chai aur code<p style="display: none;">Hi Boy</p>

//innerText only visible text de rha 
console.log(heading.innerText)//'Dom Learning on chai aur code'

//textContetn pura text de rha irrespective ki woh visible hai ya nahi
console.log(heading.textContent)//Dom Learning on chai aur codeHi Boy