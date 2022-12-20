// import { hello, goodbye } from './greeter';

const message = 'NodeJS in amazing!\n';
console.log(message);

const validator = require('validator');

const validateEmail = email => {
  return validator.isEmail(email);
};

console.log('Is mango@mail.com a valid email?: ', validateEmail('mango@mail.com'));

console.log('Is Mangozedog.com a valid email?: ', validateEmail('Mangozedog.com'));

console.log('\n');
// console.log(hello()); // "hello!"
// console.log(goodbye()); // "goodbye!"
