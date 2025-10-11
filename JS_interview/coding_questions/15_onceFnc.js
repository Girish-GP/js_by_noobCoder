/*
The onceFnc() uses closures to track whether a function has already been called. It stores the result of the first execution and returns that result for all future calls, ensuring the wrapped function executes only once.
It’s useful for one-time initializations such as connecting to a database, registering event listeners, or loading configuration files.

*/

function onceFnc(fnc){
    let fncExecutedOnce = false;
    let result;
    return function(...args){
        if(!fncExecutedOnce){
            result = fnc.apply(this,args);
            fncExecutedOnce = true;
        }
        return result;
    }
}

function mul(n,m){
    return n*m;
}

const tempOnceFnc = onceFnc(mul);

console.log(tempOnceFnc(2,4));
console.log(tempOnceFnc(4,4));
console.log(tempOnceFnc(5,4));