//1
for(let i=1;i<=10;i++){
    console.log(i)
}

//2
for(let i=1;i<=10;i++){
    console.log(`5*${i} = ${i*5}`)
}

//3
let i = 1;
let sum = 0 
while(i<=10){
  sum+=i;
  i++
}
console.log("Sum =",sum)

//4
let i2=10;
while(i2>0){
    console.log(i2);
    i2--;
}

//5 
let numX =1
do{
  console.log(numX);
  numX++
}while(numX<=5)

//6
function factorial(num){
    let fact = 1
    do{
     fact = fact*num;
     num--;
    }while(num>0)
     return fact;
}
console.log("Factorial:",factorial(3))
console.log("Factorial:",factorial(4))
console.log("Factorial:",factorial(5))


//8
for(let i=1;i<=10;i++){
    if(i==5) continue
    else console.log(i)
}

//9
for(let i=1;i<=10;i++){
    if(i==7) break
    console.log(i)
}

//7
let str = ""
for(let i=0 ; i<5;i++){
    str+="* "
    // for(let j=1 ; j<=5;j++){   
        console.log(str)
    // }
}
