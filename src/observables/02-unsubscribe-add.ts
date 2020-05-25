import { Observable, Observer, Subscriber } from "rxjs";

// const obs$ = Observable.create()
// const obs$ = new Observable<string>();
const observer: Observer<any> = {
  next: (value) => console.log("next", value),
  error: (error) => console.warn("error", error),
  complete: () => console.info("complete"),
};

const intervalo$ = new Observable<number>((subscriber) => {
  //contador
  let count = 0;
  const interval = setInterval(() => {
    count++;
    subscriber.next(count);
  }, 1000);

  setInterval(() => {
    subscriber.complete();
  }, 2500);

  return () => {
    clearInterval(interval);
    console.log("Intervalo destruído");
  };
});

const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

subs1.add(subs2).add(subs3);

setTimeout(() => {
  subs1.unsubscribe();
  subs2.unsubscribe();
  subs3.unsubscribe();
  console.log("Instrução interrompida");
}, 3000);
