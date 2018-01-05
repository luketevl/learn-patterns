# RXJS
> ReactiveX combina o padrão **Observer** com **Iterator** e **functional programming with collections** para preencher a necessidade de maneira ideal para gerenciar sequencias de eventos


# Observable
> Representa a ideia de uma coleção invócavel de valores ou eventos futuros

# Observer
> É uma coleção de **calbacks** que sabe como ouvir os falores fornecidos pelo **Observable**

# Subscription
> É a execução de um **Observable**, util para **cancelar a execução**

# Operatos
> São funções puras que permitem um estilo de programação funcional de lidar com coleções com operações como map, filter, concat, flatMap, etc.

# Subject
> Equivalente a um **eventEmitter**, é a unica forma de fazer **multicasting** de um valor ou evento para **vários Observers**

# Scheduler
> São os **dispatchers** centralizados para fazer o controle de concorrência, para saber quand algo acontece.
> Controla quando uma inscrição começa e quando as notificações são entregues.

## Conceitos
- Creating **Observables**
- Subscribing to **Observables**
- Executing the **Observable**
- Disposing **Observables**

## Como usar
- **Criando** um **Observable**
```javascript
const observable = Rx.Observable.create(observer => {
  observer.next(1);
  observer.next(2);
  observer.next(4);
  setTimeout(() => {
    observer.next(5);
  }, 1000);
});
```
- **Executando / Inscrevendo** em um **Observable** com **subscribe**
  - Ele retorna um **subscription**
```javascript
const subscription = observable.subscribe({
  next: x => console.log(`got value ${x}`),
  error: err => console.error('something wrong occurred: ' + err),
  complete: () => console.log('done'),
});
```
- **Definindo** um **observer**
```javascript
const observer = {
  next: x => console.log('Observer got a next value: ' + x),
  error: err => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
};
```
- **Criando** um **Subject**
```javascript
var subject = new Rx.Subject();

subject.subscribe({
  next: (v) => console.log('observerA: ' + v)
});
subject.subscribe({
  next: (v) => console.log('observerB: ' + v)
});

subject.next(1);
subject.next(2);

// observerA: 1
// observerB: 1
// observerA: 2
// observerB: 2
```

# Observações
- **subscription** pode usar o **unsubscrible**
- Normalmente você registra um evento `addEventListener`, porém com o **RXJS** você cria uma instância `Rx.Observable.fromEvent(element, 'event').subscribe(() => ....); 

> What is the difference between an Observable and a function? Observables can "return" multiple values over time, something which functions cannot. You can't do this:
- **func.call()** means "give me one value synchronously"
- **observable.subscribe()** means "give me any amount of values, either synchronously or asynchronously"