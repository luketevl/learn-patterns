const button = document.querySelector('.button');
const buttonRx = document.querySelector('.buttonRx');

button.addEventListener('click', ()=> console.log('Clicked!'));

Rx.Observable.fromEvent(buttonRx, 'click').subscribe(() => console.log('Clicked RX!'));

const observable2 = Rx.Observable.create(observer => {
  const id = setInterval(() => {
    observer.next('hi')
  }, 1000);
}); 
const observable = Rx.Observable.create(observer => {
  observer.next(1);
  observer.next(2);
  observer.next(4);
  setTimeout(() => {
    observer.next(5);
  }, 1000);
});

observable.subscribe({
  next: x       => console.log(`got value ${x}`),
  error: err    => console.error('something wrong occurred: ' + err),
  complete: ()  => console.log('done'),
});
const subscription2 = observable2.subscribe(x => console.log("x", x));
subscription2.unsubscribe();
console.log('just after subscribe');

var observable3 = Rx.Observable.from([10, 20, 30]);
var subscription3 = observable3.subscribe(x => console.log(x));
// Later:
subscription3.unsubscribe();