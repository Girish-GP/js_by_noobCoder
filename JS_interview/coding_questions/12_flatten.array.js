const arr = [1,[2,3,4],5,6,[7,[8,9,[10,11]]]];

function flattenArray(arr){
    let newArr = [];
    let stack = [...arr];
    // console.log(stack)
    while(stack?.length > 0){
        let item = stack?.pop();
        // console.log(item)
        if(Array.isArray(item)){
            stack?.push(...item);
        } else {
            newArr?.push(item)
        }

    }
    return newArr?.reverse();
}

console.log(flattenArray(arr));