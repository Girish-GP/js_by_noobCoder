function promiseAnyPollyfill(promises){
  return new Promise((resolve,reject)=>{
    if(promises?.length === 0){
      reject(new AggregateError([],'All Promises were rejected'));
      return;
    }

    let errorResults = [];
    let promisesRejectedCount = 0;

    promises?.forEach((pr,index)=>{
      Promise.resolve(pr)
      .then((res)=>{
        resolve(res);
        return;
      })
      .catch((err)=>{
        errorResults[index] = err;
        promisesRejectedCount+=1;
        if(promises?.length === promisesRejectedCount){
          reject(new AggregateError(errorResults,'All promises were rejected.'))
        }
      })
    })
  })
}