const controller = new AbortController();
console.log('Controller Instance',controller); // AbortController { signal: AbortSignal { aborted: false}}
const signal = controller.signal;
console.log('AbortSignal',signal) // AbortSignal { aborted: false}
async function fetchData() {
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts', { signal });
        console.log(data)

    } catch(error){
        console.log(error);
    }
    
}
fetchData();
controller.abort()


/*
 AbortController is a web api that allows the cancellation of an async request before it gets completed

 AbortController returns a AbortSignal instance which has a aborted key which represent the current state of the signal

 We send this signal object along with the fetch request to track when to cancel the request if it is to be cancelled

 AbortController has a abort method which is used to cancel the request i.e it makes aborted -> true and the fetch call is cancelled with an AbortError

*/