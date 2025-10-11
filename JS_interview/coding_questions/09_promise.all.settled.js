

function promiseAllSettledPollyfill(promises){
  return new Promise((resolve,reject)=>{

    if(promises?.length === 0){
      resolve([]);
      return;
    }


    let results = []; // to store the results of each promise
    let promisesCompletedCount = 0;
    promises?.forEach((pr,index)=>{
      Promise.resolve(pr)
      .then((res)=>{
        results[index] = {status:'fulfilled',value:res};
      })
      .catch((error)=>{
        results[index] = {status:'rejected',reason:error};
      })
      .finally(()=>{
        promisesCompletedCount+=1;
        if(promises?.length === promisesCompletedCount){
          resolve(results)
        }
      })
    })
  })
}



const latestPosts = new Promise((resolve)=> setTimeout(()=> resolve('Latest Posts received.'),1000));
const latestNews = new Promise((resolve)=> setTimeout(()=> resolve('Latest News received.'),2000));
const latestRecommendation = new Promise((_,reject)=> setTimeout(()=> reject('Issues with latest recommendation.'),5000));
// const latestRecommendation = new Promise((resolve,reject)=> setTimeout(()=> resolve('Latest recommendation.'),5000));


promiseAllSettledPollyfill([latestPosts,latestNews,latestRecommendation])
.then((res)=> console.log(res))
.catch((error)=> console.log(`Error: ${error}`))