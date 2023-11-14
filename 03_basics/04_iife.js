//Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //Named IIFE
    console.log('DB CONNECTED')
})(); // so iife ke time ; is mandatory nahi toh usse pata nahi chalega ke uska context scope kab khatam ho rha hai

// ()() --> First mai function ka definition and second mai uska call

//global scope ke varaiables ke karan hone wale pollution ko hatane ke liye hamne iife ka use kiya hai 

((name)=>{
    //UnNamed IIFE
    console.log(`DB CONNECTED TWO ${name}`)
})('XXX')