for(var i=1;i<5;i++){
    setTimeout(()=>{
      console.log(i)
    },1000)
}

/*
Below output due to closures and var refering to the same memory space
 5 5 5 5
*/

//Using the third argument of setTimeout
for(var i=1;i<5;i++){
    setTimeout((i)=>{
      console.log(i)
    },1000,i) // here by passing the i value to the callback fnc it gets its own indivivual value instead of shared var reference 
}
/*
Below output
1 2 3 4
*/