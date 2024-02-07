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