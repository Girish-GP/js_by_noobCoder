
import { Observable} from 'rxjs'
const observableRef = new Observable(
    (subcriber) => {
        subcriber.next('Data 1');
        setTimeout(()=> subcriber.next('Data 2'),3000);
        setTimeout(()=> subcriber.next('Data 3'),6000);
        setTimeout(()=> subcriber.next('Data 4'),9000);
    }
)
console.log(observableRef);
observableRef.subscribe({
    next: (res)=> console.log(res),
    error: (error)=> console.error(error),
})


//Observable returns stream of data overtime it can return one,two and more values synchronously or asynchronously . It starts producing values only when it is subscribed (.subcribe()) lazy mechanism
//Observable can cancel the execution using .unsubscribe() method