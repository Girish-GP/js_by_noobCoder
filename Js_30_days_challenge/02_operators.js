console.log(2+2);
console.log(2-2)
console.log(2*2);
console.log(2/2);
console.log(5%2);


let num1 = 5;
num1+=4;
console.log(num1)
num1-=3;
console.log(num1)

console.log(3<4);
console.log(3>4);

console.log("3<=4",3<=4);
console.log("4>=3",4>=3);
console.log("3>=4",3>=4);

console.log(3=="3");
console.log(3==="3");
let var1 = 'ss'
let var2 = 'ss'

 console.log(var1 == var2 && typeof var1 =="number")
 console.log(var1 == var2 || typeof var1 =="number")
 console.log(!true)
console.log(num1 < 0 ? 'negative': "positive")


function arthimetic(num1,num2){
    console.log("Arithmetic Script");
    console.log("Sum:",num1+num2)
    console.log("Difference:",num1-num2)
    console.log("Multiplication:",num1*num2)
    console.log("Division:",num1/num2)
    console.log("Modulus:",num1%num2)
}

arthimetic(6,2)

function comparefn(num1,num2){
    console.log("Compare Fn")
    console.log("num1<num2",num1<num2)
    console.log("num1>num2",num1>num2)
    console.log("num1<=num2",num1<=num2)
    console.log("num1 >= num2",num1>=num2)
    console.log("num1 == num2",num1==num2)
    console.log("num1 === num2",num1===num2)
    console.log("num1>num2 && num1<num2",num1 > num2 && num1 < num2)
    console.log("num1>num2 || num1<num2",num1 > num2 || num1 < num2)
    console.log("!num1",!num1)
}

comparefn(4,5)

function check(num){
    num > 0 ? console.log("positive"): console.log("negative")
}
check(2)
check(-2)