//1
const evenOdd = (num) =>{
    return num%2 === 0 ? 'Even': 'Odd';
}
console.log("Number 2 is ",evenOdd(2))
console.log("Number 7 is ",evenOdd(7))


//2
const square = (num) => {
    return num*num
}
console.log("Sqaure of 2 is ",square(2))
console.log("Sqaure of 3 is ",square(3))


//3
const largestOfTwo = (num1,num2) =>{
    if(num1 === num2) return "Equal"
    return num1 > num2 ? num1 : num2
}
console.log(largestOfTwo(3,4))
console.log(largestOfTwo(32,44))
console.log(largestOfTwo(332,41))
console.log(largestOfTwo(31,4))

//4
const concatFn = (str1,str2)=>{
    return `${str1} ${str2}`
}
console.log(concatFn("hi","world"))

//5
const sum = (num1,num2)=> num1+num2;
console.log(sum(4,5))

//6
const checkForChar = (char,str) => str?.includes(char);
console.log(checkForChar("t","tea"))
console.log(checkForChar("x","tea"))


//7 
const product = (val1,val2=3)=> val1*val2;
console.log(product(3))
console.log(product(3,7))

//8
const greeting = (name,age=16)=> `Welcome to Coder's world ${name} with ${age} years of world experience.`;
console.log(greeting("simon"));
console.log(greeting("tyson",36));

//9
const executeNestedFn = (fn,n) => {
    while(n>0){
        fn();
        n--;
    }
}
const callback = ()=>console.log("Bro its over")
executeNestedFn(callback,5)


//10

const applyTwofnc = (fn1,fn2,val)=>{
    const x = fn1(val);
    const res = fn2(x);
    return res;
}
console.log(applyTwofnc((val)=>val*2,(val)=>val+20,6))