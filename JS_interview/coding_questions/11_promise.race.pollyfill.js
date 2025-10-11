function promiseRacePollyfill(promises){
   return new Promise((resolve,reject)=>{
if(promises?.length === 0 || !promises){
        return
    }

    promises?.forEach((pr)=>{
        Promise.resolve(pr)
        .then((res)=>{
            resolve(res);
            return;
        })
        .catch((err)=>{
            reject(err);
            return
        })
    })
   })
    
}