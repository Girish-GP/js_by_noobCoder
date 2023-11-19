//for loop

// for(let i = 1;i<=10;i++){
//     console.log(i)
// }

const arr = [1,2,3,4,5]
// for(let index = 0; index<arr.length;index++){
//     console.log(arr[index])
// }

for(let i = 0; i<=5;i++){
    console.log(`Outer Loop value : ${i}`)

    for(let j=0;j<=5;j++){
        console.log(`Inner Loop value : ${j}`)
    }
}
//FOR OF LOOP
for(let item of arr){
    if(item === 5){
        // console.log('5 is best')
    }
    // console.log(item)
}


//break and continue


//Idhar 1 2 3 4 print hoge n then break execution 
// for(let index = 1 ;index<=20;index++){
//     if(index === 5){
//         console.log("Detected 5")
//         break
//     }
//     console.log(`Value of i is ${index}`)
// }


//Idhar sirf 5 skip hoga baki 1 2 3 4 6 7 8 ..
for(let index = 1 ;index<=20;index++){
    if(index === 5){
        console.log("Detected 5")
        continue
    }
    console.log(`Value of i is ${index}`)
}