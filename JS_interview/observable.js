    import { Observable } from "https://unpkg.com/rxjs@7/dist/esm5/index.js";

const customObservable = new Observable(
    (subscriber)=>{
        subscriber.next('Data 1');
        setTimeout(()=> subscriber.next('Data 2'),2000);
        setTimeout(()=> subscriber.next('Data 3'),4000);
    }
)

customObservable.subscribe(
    {
        next: (res) => console.log(res),
        error: (error) => console.error(error),
        complete: ()=> console.log('Completed')
    }
)