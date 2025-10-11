/*
Promise.all -- this method takes array of promises and return the combined result of resolved promises if all resolves but in case any promise reject it return that rejected promise with the reason

*/

function promiseAllPollyfill(promises){
  //promises--Array of promises
  return new Promise((resolve,reject)=>{
   
    //base case if array is empty
    if(promises?.length === 0){
      resolve([]);
      return
    }

    let results = []; // for keeping the results of resolved promises
    let promisesCompletedCount = 0; //This tracks the no of promises resolve completed

    promises?.forEach((pr,index)=>{
      //Convert into actual promises
      Promise.resolve(pr)
      .then((res)=>{
        results[index] = res;
        promisesCompletedCount +=1;
         if(promises?.length === promisesCompletedCount){
          resolve(results)
        }
      }).catch((error)=>{
        reject(error);
      }).finally(()=>{
         console.log('Promise all done')
      })
    })
  })
}


const latestPosts = new Promise((resolve)=> setTimeout(()=> resolve('Latest Posts received.'),1000));
const latestNews = new Promise((resolve)=> setTimeout(()=> resolve('Latest News received.'),2000));
// const latestRecommendation = new Promise((_,reject)=> setTimeout(()=> reject('Issues with latest recommendation.'),5000));
const latestRecommendation = new Promise((resolve,reject)=> setTimeout(()=> resolve('Latest recommendation.'),5000));


promiseAllPollyfill([latestPosts,latestNews,latestRecommendation])
.then((res)=> console.log(res))
.catch((error)=> console.log(`Error: ${error}`))