// * Example
// console.log('First log');

// setTimeout(() => {
//   console.log('Second log');
// }, 2000);

// console.log('Third log');

// * Example
// const greet = () => {
//   console.log('Hello! 12');
// };
// const timerId = setTimeout(greet, 1000);
// clearTimeout(timerId);

// * Example
// const intervalId = setInterval(() => {
//   console.log(`Hello! ${Math.random()}`);
// }, 1000);

// clearInterval(intervalId);

// * Example
// const date = new Date();
// console.dir(date);

// console.dir(date.toString());

// console.log(new Date(0));
// console.log(new Date(15_000));

// console.log(date.getTime());
// console.log(date.getHours());

// * Web workers, Service workers, Worklets
// const myWorker = new Worker(new URL('./workers/worker.js', import.meta.url), { type: 'module' });

// // Send message to worker
// myWorker.postMessage('Hello!');

// // Receive message from worker
// myWorker.onmessage = function (e) {
//   console.log(e.data);
// };
