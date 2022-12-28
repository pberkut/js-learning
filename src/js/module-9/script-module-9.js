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

// * Example setTimeout
// const logger = time => {
//   console.log(`Log times: ${time}`);
// };

// const timerId01 = setTimeout(logger, 1000, 1000);
// const timerId02 = setTimeout(logger, 500, 500);

// console.log(timerId01);
// console.log(timerId02);

// const shouldCancelTimer = Math.random() > 0.3;
// console.log(shouldCancelTimer);

// if (shouldCancelTimer) {
//   clearTimeout(timerId02);
// }

// * Example setInterval
// const logger = time => {
//   console.log(`Log times: ${time}. ${Date.now()}`);
// };

// const intervalId01 = setInterval(logger, 2000, 2000);
// const intervalId02 = setInterval(logger, 1000, 1000);

// console.log(intervalId01);
// console.log(intervalId02);

// const shouldCancelInterval = Math.random() > 0.3;
// console.log('Canceled interval:', shouldCancelInterval);

// if (shouldCancelInterval) {
//   clearInterval(intervalId02);
// }

// * Event loop

// * Promise
// Change value of isSuccess variable to call resolve or reject
// const isSuccess = false;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve('Success! Value passed to resolve function');
//     } else {
//       reject('Error! Error passed to reject function');
//     }
//   }, 2000);
// });

// promise
//   .then(value => console.log(value)) // "Success! Value passed to resolve function"
//   .catch(error => console.log(error)) // "Error! Error passed to reject function"
//   .finally(() => console.log('Promise settled')); // "Promise settled"

//  * Example
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 2000);
// });

// promise
//   .then(value => {
//     console.log(value); // 5
//     return value * 2;
//   })
//   .then(value => {
//     console.log(value); // 10
//     return value * 3;
//   })
//   .then(value => {
//     console.log(value); // 30
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log('Final task');
//   });

// * Exapmple
const fetchUserFromServer = username => {
  return new Promise((resolve, reject) => {
    console.log(`Fetching data for ${username}`);

    setTimeout(() => {
      // Change value of isSuccess variable to simulate request status
      const isSuccess = true;

      if (isSuccess) {
        resolve('success value');
      } else {
        reject('error');
      }
    }, 2000);
  });
};

fetchUserFromServer('Mango')
  .then(user => console.log(user))
  .catch(error => console.error(error));
