/*

callbacks are functions that are passed as arguments to other functions and are executed after the completion of an async operation


*/

function logData(data) {
  console.log("Callback data:", data);
}

function asyncFnc(callbackFnc, data) {
  setTimeout(() => {
    callbackFnc(data);
  }, 100);
}

// asyncFnc(logData, "test");

// Above logData is a callback fnc which is passed as an argument to the asyncFnc which then executes it after the async operation setTimeout



//callback hell

function doNow(data, callback) {
  setTimeout(() => {
    console.log(data);
    callback(`${data}Something`);
  }, 1000);
}

function doSomething(data, callback) {
  setTimeout(() => {
    console.log(data);
    callback(`${data}Else`);
  }, 1000);
}

function doSomethingElse(data) {
  setTimeout(() => {
    console.log(data);
  }, 1000);
}

// doNow("do", (res) => {
//   doSomething(res, (res2) => {
//     doSomethingElse(res2);
//   });
// });


//Promise implementation of the callback hell
async function doPromise(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(data);
      resolve(`${data}Something`);
    },1000);
  });
}

async function doSomethingPromise(data){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      console.log(data);
      resolve(`${data}Else`)
    },1000)
  })
}

async function doSomethingElsePrmoise(data){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      console.log(data);
      resolve()
    },1000)
  })
}

// doPromise('do')
// .then((res)=> doSomethingPromise(res))
// .then((res)=> doSomethingElsePrmoise(res))
// .catch((error)=> console.log(error))
// .finally(()=> console.log('Promise Implementation completed.'))



async function execute(data){
  try{
    const res = await doPromise(data);
    const res2 = await doSomethingPromise(res);
    await doSomethingElsePrmoise(res2);
    console.log('Async await version for the promise implementation')
  } catch(error){
    console.log(error);
  }
}

execute('do')