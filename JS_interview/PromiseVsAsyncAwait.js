
function fetchData(){
    return new Promise((resolve,reject)=>{
        let success = false;
        setTimeout(()=>{
            if(success) resolve("Successful completion.")
            reject("Error:PLease try again later!!")
        },2000);
    })
}

const promiseRef = fetchData();

promiseRef.then((res)=>console.log(`Promise implementation ${res}`)).catch((error)=> console.log(error)).finally(()=> console.log("Promise execution completed."));


async function getData(){
    try{
      const data = await fetchData();
      console.log(`Async Await Implementation ${data}`)
    } catch(error){
        console.log(error)
    }
}
getData()

