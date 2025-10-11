//1. Implement a counter in JavaScript.
//  - How would you handle increment, decrement, and reset?
//  - What about maintaining state across multiple buttons?


// Counter object containing centralized state of counter value , increment , decrement , reset buttons sharing that centralized value
const counter = {
    value: 0,
    increment: function(){
        this.value++;
    },
    decrement: function(){
        this.value--;
    },
    reset: function(){
        this.value = 0;
    }
}

const incrementBtn = document.getElementById('inc-btn');
const decrementBtn = document.getElementById('dec-btn');
const resetBtn = document.getElementById('res-btn');
const displayValue = document.getElementById('dis-value');
function displayValueFnc(){
    displayValue.textContent = `Current Counter value is ${counter?.value}`
}
incrementBtn.addEventListener('click',()=>{
    counter.increment();
    displayValueFnc();
})
decrementBtn.addEventListener('click',()=>{
    counter.decrement();
    displayValueFnc();
})
resetBtn.addEventListener('click',()=>{
    counter.reset();
    displayValueFnc();
})

displayValueFnc();