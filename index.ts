// import { of } from 'rxjs';

/*
 * Any code samples you want to play with can go in this file.
 * Updates will trigger a live reload on http://localhost:1234/
 * after running npm start.
 */

// of('Hello', 'RxJS').subscribe(console.log);

// import { BehaviorSubject, interval, Subject } from "rxjs";
// import { tap } from 'rxjs/operators';

// const observer = {
//   next: val => console.log('next', val),
//   error: err => console.log('error', err),
//   complete: () => console.log('complete')
// };

// const subject = new BehaviorSubject('Sweet behave');

// const subscription = subject.subscribe(observer);

// // subject.next('Hello');

// const subscription2 = subject.subscribe(observer);

// // subject.next("World");

// const interval$ = interval(2000).pipe(
//   tap(val => console.log("new interval", val))
// );

// interval$.subscribe();


// 🏪 RXJS STORE 

import { ObservableStore } from "./store";

const store = new ObservableStore({
  user: 'michael cote',
  isAuth: false
});

store.selectState('user').subscribe(console.log);
store.selectState('isAuth').subscribe(console.log);

store.updateState({
  user: 'timmy VanRenslser'
});

store.updateState({
  isAuth: true
});

// end STORE 

