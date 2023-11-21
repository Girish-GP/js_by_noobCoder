//Reduce

const array1 = [1,2,3,4]

const initialValue = 0
const SumWithInitial = array1.reduce((accumulator,currentValue)=> accumulator+currentValue,initialValue)
console.log(SumWithInitial)

const mulValue = array1.reduce((acc,cV)=>{
    return acc*cV
},1)
console.log(mulValue)//24

const shoppingCart = [
    {itemName: "js",price:100},
    {itemName: "python",price:1100},
    {itemName: "ruby",price:200}
]
//Add price of shopping cart
const shoppingCartCopy = shoppingCart.reduce((acc,cV)=> acc + cV?.price,0)
console.log(shoppingCart)
console.log(shoppingCartCopy)//1400