/*
 Generator function is used with syntax function* it can pause its execution unlike the regular function which runs start to finish and return a value

 generator function uses a keyword yield to pause its execution 
 it returns a generator object which has a method .next() which returns the current yeild value and the 'done' state i.e whether the function execution is completed
  
 each time when next is called on a generator object it returns
 {
  value: currentYieldValue,
  done: true/false
 }

*/


function* countUpToMax(max){
    let count= 1;
    while( count<=max){
        yield count;
        count++;
    }
    return 'Completed the function.'
}

const genearotorFncRef = countUpToMax(3);
console.log(genearotorFncRef.next());
console.log(genearotorFncRef.next());
console.log(genearotorFncRef.next());
console.log(genearotorFncRef.next());




/*
Interviewer: Can you give a real-world use case where generator functions are preferred over normal functions? What disadvantages arise if regular functions are used instead?

Interviewee:

One common real-world use case for generator functions is processing large or potentially infinite data streams—for example, when implementing pagination or lazy data loading in web applications.

Use case:
Lazy loading data on web application (pagination)

Instead of loading all the data upfront on the memory batch them into smaller units and load them according

*/

const users = Array(100).fill().map((_,index)=> `User${index}`);

function* paginate(data,pageSize){
    for(let i =0;i<data?.length;i+=pageSize){
        yield data?.slice(i,i+pageSize); // here it return the 
    }
    return "Completed the execution of the generator function";
}

const pagination = paginate(users,100); //passing the users array & pageSize

console.log(pagination?.next()); // return { value: Set of first 100 users , done: false(which means at that instance the func is not over completely)}

console.log(pagination?.next()) // {value:'Completed the execution of the generator function',done:true}
console.log(pagination?.next()) // {value:undefined,done:true}
console.log(pagination?.next()) // {value:undefined,done:true}



// console.log(normalPaginateRef) // this will show all the 10000 users in the memory

// Why Generators Are Preferred
// Memory Efficiency: Produce only one page at a time instead of all pages.

// Performance: Enables asynchronous-like code patterns by pausing and resuming execution.

// Scalability: Suitable for infinite or very large data streams, which normal functions struggle with.