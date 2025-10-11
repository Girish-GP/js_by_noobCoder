// 2. Recreate Function.prototype.call().
//  - How would you bind the correct this context?
//  - How do you handle arguments dynamically?


Function.prototype.call = null;
if(!Function?.prototype?.call){
    //original call takes this context and arguments
    Function.prototype.call = function(context,...args){ 
        //set default context to globalThis if not explicitly send
       context = context || globalThis
       let mySymbol = Symbol();

       context[mySymbol] = this; // here this binding is the function on which the method is called we are storing the function on the explicit this context sent so the function can refer to the context of explicit this

       const result = context[mySymbol](...args); // calling the function with args and this context

       delete context[mySymbol] // delete the temporary fnc attached to the explicit context 
       return result
    }
}


function greet(mark){
    console.log(`Hi ${this.name} ${mark}`)
}

const test = greet.call({name:'Girish'},'!')
console.log(test)