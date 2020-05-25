import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next", value),
  error: (error) => console.warn("error", error),
  complete: () => console.info("complete"),
};

//cold observable
const intervalo$ = new Observable<number>((subs) => {
  const intervalId = setInterval(() => {
    subs.next(Math.random());
    console.log("emitindo");
  }, 1000);

  return () => {
    clearInterval(intervalId);
    console.log("Intervalo destruído");
  };
});

//hot observable
const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$);

//const subs1 = intervalo$.subscribe((rnd) => console.log("subs1", rnd));
//const subs2 = intervalo$.subscribe((rnd) => console.log("subs2", rnd));

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(10);
  subject$.complete();
  subscription.unsubscribe();
}, 3500);
