//1
const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('Promise 1 resolved after 2 seconds'),2000)
})
promise1.then(res=>console.log(res))

//2
const promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=> reject(new Error('Promise 2 rejected after 2 seconds')),2000)
})
promise2.catch((error)=> console.log(error))

//3
const promise3 = new Promise((resolve,reject)=> resolve(2))
promise3.then(res=> res*2)
.then(res=> res*2)
.then(res=> console.log(`The final Data for promise 2 chaining is ${res}`))

//4
const promise4 = new Promise(resolve=>setTimeout(()=> resolve('Promise 4 resolved after async await'),5000))

async function wait(){
 const res= await promise4;
 console.log(`Promise 4 result is ${res}`)
 console.log("Promise 4 waited broo")
}

wait()

//5
const promise5 = new Promise((resolve,reject)=> {
    setTimeout(()=>{
        reject(new Error("Promise 5 rejected"))
    },7000)
})

const wait2 = async ()=>{
    try{
       const data = await promise5;
       console.log(`Promise 5 resolved: ${data}`)
    }catch(error){
        console.log(`Error handled for promise 5 : ${error}`)
    }
}
wait2()

//6
const promise6 = fetch('https://randomuser.me/api');
promise6.then(data=> data.json())
.then(data=> console.log(data))
.catch((error)=> console.log(error))

//7
const asyncFetch = async ()=>{
    const data = await fetch('https://randomuser.me/api');
    const jsonData = await data.json()
    console.log(`Promise 7 resolved using async await call`)
}
asyncFetch()


//8
Promise.all([promise1,promise3,promise4]).then(([res1,res2,res3])=>{
    console.log("Promise All");
    console.log(res1)
    console.log(res2)
    console.log(res3)
}).catch(err=>console.log(`Promise all error`))

//9
Promise.race([promise1,promise3,promise4]).then(res=> console.log(`Promise race ${res}`))