function mul(n,m){
    console.log('Computing ....')
    return n*m;
}

function memoizeFnc(fnc){
    let cache = new Map();
    return function(...args){
        let key = JSON.stringify(args);
        if(cache.has(key)){
            return cache.get(key)
        }
        let res = fnc.apply(this,args);
        cache.set(key,res);
        return res;

    }
}

const tempMemoizedFnc = memoizeFnc(mul);

console.log(tempMemoizedFnc(2,3));
console.log(tempMemoizedFnc(2,3));
console.log(tempMemoizedFnc(3,3));