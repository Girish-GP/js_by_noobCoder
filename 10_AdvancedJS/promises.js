//Promise is an object that represents the eventual completion or failure of an async operations

// fetch(url).then().catch().finally()


// const dataFetch = getData();

// function getData(){
//     const promise = new Promise((resolve,reject)=>{

//         //js inbuilt callbacks resolve & reject
//         let error = false;
//         if(!error){
//             setTimeout(()=>{resolve({userId:'12345'})},5000); 
//         } else {
            
//                     const err = new Error('Invalid')
//                     setTimeout(()=>{reject(err)},5000); 

//         }
        
//     })
//     return promise
// }

// dataFetch
// .then((res)=> {
//     console.log(res)
//     return res.userId;
// }) //promise resolved
// .then(user => console.log('UserName:',user))
// .catch((err)=> console.log(err.message)) //promise rejected
// .finally(()=>{
//     console.log("Promise settled at last")

// })



//Async Await
//we have to use try catch block for error handling in async await
// const promise2 = new Promise((resolve,reject)=>{

//     //js inbuilt callbacks resolve & reject
//     let error = true;
//     if(!error){
//         setTimeout(()=>{resolve({dataBase:'12345'})},5000); 
//     } else {
        
//                 const err = new Error('JS invalid')
//                 setTimeout(()=>{reject(err)},5000); 

//     }
    
// })

// async function promise2Consumer(){
//     try{
//         const res = await promise2;
//       console.log(res)
//     } catch(err){
//         console.log(err.message)
//     }
// }

// promise2Consumer()


// async function getuserdata(){
//     try{
//         const res = await fetch('https://api.github.com/users/hiteshChoudhary'); // returns a promise response data ina string
//         const data = await res.json()

//       console.log(data)
//     } catch(err){
//         console.log(err.message)
//     }
// }

// getuserdata()


fetch('https://api.github.com/users/hdjdj')
.then((res)=>{
    console.log(res,"we are here")
    return res.json()
})
.then(data => console.log(data))
.catch(err=> console.log(err.message))


//fetch API
//A fetch() promise only rejects when a network error is encountered (which is usually when there's a permissions issue or similar). A fetch() promise does not reject on HTTP errors (404, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.



// In the Fetch API, the promise returned by the fetch function is fulfilled even if the HTTP response indicates an error (e.g., 401, 403, 404). The promise is fulfilled as long as the network request itself is successfully made, regardless of the HTTP status code. However, the distinction between a successful and unsuccessful HTTP response is made within the then block by checking the response.ok property. If response.ok is true, it means the HTTP status code is in the range 200-299, and the promise is considered resolved. If response.ok is false, it indicates an HTTP error, and typically, you may want to handle this case by throwing an error within the then block or chaining a catch block.

// Here's a brief summary:

// Promise State: The fetch promise is fulfilled as long as the network request is successful (i.e., the request was made successfully).

// HTTP Status Check: The distinction between successful and unsuccessful HTTP responses is made by checking response.ok within the then block.

// Error Handling: If you want to explicitly handle HTTP errors, you can include the !response.ok check and throw an error within the then block or handle it in a subsequent catch block.



