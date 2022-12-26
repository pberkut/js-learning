// * Example
// console.log('First log');

// setTimeout(() => {
//   console.log('Second log');
// }, 2000);

// console.log('Third log');

// * Example

const greet = () => {
  console.log('Hello! 12');
};

const timerId = setTimeout(greet, 1000);

clearTimeout(timerId);
