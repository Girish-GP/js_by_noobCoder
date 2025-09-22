//adding a new element to an array

const arr = [1,2,3];
function pure(arr,element){
    return [...arr,element]
}

function impure(arr,element){
    arr?.push(element);
    return arr;
}

console.log(pure(arr,3)) // [1,2,3,3]
console.log(pure(arr,3)) // [1,2,3,3]
//Above for same set of inputs the pure function return same output also does not change the original array i.e the original state

console.log(impure(arr,4)) // [1,2,3,4]
console.log(impure(arr,4)) // [1,2,3,4,4]
console.log(impure(arr,4))// [1,2,3,4,4,4]
//Above for same set of inputs the impure function returns different output and also modify the original array i.e causes side effects


/*

Pure functions returns same output for the same set of inputs and does not causes side effects

Impure functions may return different output for same set of inputs and can cause side effects

*/