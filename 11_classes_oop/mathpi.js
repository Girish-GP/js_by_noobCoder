console.log(Object.getOwnPropertyDescriptor(Math,"PI"))

const newObj =Object.create(null);

const chai = {
    name: 'masala chai',
    price: 200,
    isAvailable: true,
    order : function(){
        console.log('Ordered chai')
    }
}
console.log(chai,Object.getOwnPropertyDescriptor(chai,'price'))

Object.defineProperty(chai,'price',{
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai,"price"))
chai.price = 500
console.log(chai.price)

for ( let [key,value] of Object.entries(chai)){
    if(typeof value !== 'function') console.log(`${key} : ${value}`)
}


const obj = {
    name: 'girish',
    price: 500,
    get:function(){
        console.log("Hi this is function")
    }
}


console.log(Object.getOwnPropertyDescriptor(obj,'name'))


// value: The value assigned to the property. In this case, the value is 'girish', indicating that the property holds the string 'girish'.

// writable: A boolean indicating whether the value of the property can be changed or not. If true, the value can be modified using an assignment operator. If false, the value is read-only and cannot be modified. Here, it's true, meaning the value can be changed.

// enumerable: A boolean indicating whether the property will be enumerated by for...in loops or Object.keys() method. If true, the property will be included in enumeration; if false, it will be excluded. Here, it's true, indicating that the property will be enumerable.

// configurable: A boolean indicating whether the property's attributes (other than value and writable) can be changed and whether the property can be deleted from the object. If true, the property can be modified or deleted; if false, it cannot be changed or deleted. Here, it's true, meaning the property can be reconfigured and deleted.

Object.defineProperty(obj,'name',{
    configurable: false
})

obj.name = 'jcbdsfuds'

console.log(Object.getOwnPropertyDescriptor(obj,'name'))

delete obj.name;

console.log(Object.getOwnPropertyDescriptor(obj,'name'))

console.log(Object.entries(obj)) 
// [
//     [ 'name', 'jcbdsfuds' ],
//     [ 'price', 500 ],
//     [ 'get', [Function: get] ]
//   ]
for(let [key,value] of Object.entries(obj)){
    console.log(`${key} : ${value}`)
}