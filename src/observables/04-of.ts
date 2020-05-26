import { of } from "rxjs";

//Síncrono

// const obs$ = of(1, 2, 3, 4, 5, 6);
//const obs$ = of([], {}, () => {}, Promise.resolve(true));
const obs$ = of(...[1, 2, 3, 4, 5, 6], 4, 6);

console.log("Start");

obs$.subscribe(
  (next) => {
    console.log("next", next);
  },
  null,
  () => {
    console.log("complete");
  }
);

console.log("End");
