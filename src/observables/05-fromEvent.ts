import { fromEvent } from "rxjs";

const obs1$ = fromEvent(document, "click");
const obs2$ = fromEvent(document, "keyup");

obs1$.subscribe(({ x, y }) => {
  console.log(x, y);
});

obs2$.subscribe(({ key }) => {
  console.log(key);
});
