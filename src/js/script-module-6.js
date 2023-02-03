// Start learning JavaScript module 6
// console.log('start');

//
// const idx = true;
// const x = !!idx;

// console.log(x);

// const objC = {};
// const objB = Object.create(objC);

// console.log(objB);

// console.log('wqeq');

// * Example
// console.log(document);

// const body = document.body;
// console.log(body);

// const list = body.firstElementChild;
// console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const listItems = list.children;
// console.log(listItems);

// * Example
// const listWithId = document.querySelector('#menu');
// listWithId.style.textTransform = 'uppercase';
// listWithId.style.fontSize = '24px';
// console.log(listWithId);

// const listWithClass = document.querySelector('.menu');
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll('li');
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll('.menu-item');
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector('.menu-item');
// firstMenuItem.style.color = 'tomato';
// console.log(firstMenuItem);

// * Example
// function caseInSwitch(val) {
//   let answer = '';
//   // Змініть код лише під цим рядком
//   switch (val) {
//     case 1:
//       answer = 'alpha';
//       break;
//   }

//   // Змініть код лише над цим рядком
//   return answer;
// }

// console.log(caseInSwitch(1));

// Налаштування
// function abTest(a, b) {
//   // Змініть код лише під цим рядком
//   if (a < 0 || b < 0) {
//     return;
//   }

//   // Змініть код лише над цим рядком

//   return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
// }

// console.log(abTest(0, 0));

// * Example freecodecamp
// let count = 0;

// function cc(card) {
//   // Змініть код лише під цим рядком
//   switch (card) {
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//       count += 1;
//       break;
//     case 7:
//     case 8:
//     case 9:
//       break;
//     case 10:
//     case 'J':
//     case 'Q':
//     case 'K':
//     case 'A':
//       count -= 1;
//       break;
//   }

//   return `${count} ${count > 0 ? 'Bet' : 'Hold'}`;

//   // Змініть код лише над цим рядком
// }

// cc(2);
// cc(3);
// cc(4);
// cc(5);
// cc(6);
// console.log(cc());

// cc(10);
// cc('J');
// cc('Q');
// cc('K');
// cc('A');

// console.log(cc());

// * Example
// function checkObj(obj, checkProp) {
//   // Змініть код лише під цим рядком

//   return obj.hasOwnProperty(checkProp) ? obj[checkProp] : 'Not Found';
//   // Змініть код лише над цим рядком
// }

// console.log(checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'gift'));
// console.log(checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'house'));

// * Exapmle
// Налаштування
// const recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name'],
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette'],
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: [],
//   },
//   5439: {
//     albumTitle: 'ABBA Gold',
//   },
// };

// // Змініть код лише під цим рядком
// function updateRecords(records, id, prop, value) {
//   if (prop === 'tracks') {
//   } else {
//   }
//   return records;
// }

// console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));

// import users from './data/objects.js';

// console.log(users);

// * Example
// const singleBtn = document.querySelector('#single');

// const handleClick = () => {
//   console.log('click event listener callback');
// };

// singleBtn.addEventListener('click', handleClick);

// // ===============================================
// const multiBtn = document.querySelector('#multiple');

// const firstCallback = () => {
//   console.log('First callback!');
// };
// const secondCallback = () => {
//   console.log('Second callback!');
// };
// const thirdCallback = () => {
//   console.log('Third callback!');
// };

// multiBtn.addEventListener('click', firstCallback);
// multiBtn.addEventListener('click', secondCallback);
// multiBtn.addEventListener('click', thirdCallback);

// const addListenerBtn = document.querySelector('[data-action="add"]');
// const removeListenerBtn = document.querySelector('[data-action="remove"]');
// const btn = document.querySelector('#btn');

// // const handleClick = () => {
// //   console.log('click event listener callback');
// // };

// addListenerBtn.addEventListener('click', () => {
//   btn.addEventListener('click', handleClick);
//   console.log('click event listener was added to btn');
// });

// removeListenerBtn.addEventListener('click', () => {
//   btn.removeEventListener('click', handleClick);
//   console.log('click event listener was removed from btn');
// });

// * Exapmle
// const button = document.querySelector('.btn');

// const handleClick = event => {
//   console.log('event: ', event);
//   console.log('event type: ', event.type);
//   console.log('currentTarget: ', event.currentTarget);
// };

// button.addEventListener('click', handleClick);

// document.addEventListener('keydown', event => {
//   console.log('Keydown: ', event.key);
// });

// document.addEventListener('keyup', event => {
//   console.log('Keyup: ', event.code);
// });

// document.addEventListener('keydown', event => {
//   event.preventDefault();

//   if ((event.ctrlKey || event.metaKey) && event.code === 'KeyS') {
//     console.log('«Ctrl + s» or «Command + s» combo');
//   }
// });

// * Example search and markup
// import users from './data/objects.js';

// const formRef = document.querySelector('.js-search');
// const listRef = formRef.querySelector('.js-list');

// const onSearch = evt => {
//   evt.preventDefault();
//   const { queryValue, selectValue } = evt.currentTarget.elements;
//   // console.log(queryValue.value);
//   // console.log(selectValue.value);
//   console.log(queryValue.value);
//   console.log(users[0][selectValue.value]);

//   const searchResult = users.filter(user => user[selectValue.value].includes(queryValue.value));

//   // console.log(searchResult);
//   const markup = searchResult
//     .map(
//       ({ name, gender, eyeColor, balance }) =>
//         `<li class="item-list-task-6">
//       <h2>${name}</h2>
//       <p>Gender: ${gender}</p>
//       <p>Eye color: ${eyeColor}</p>
//       <p>Balance: ${balance}</p>
//   </li>`,
//     )
//     .join('');
//   console.log(markup);

//   listRef.innerHTML = markup;
// };

// formRef.addEventListener('submit', onSearch);

// * Example learning input

// const inputRef = document.querySelector('.js-input');

// inputRef.addEventListener('input', onInput);

// function onInput(evt) {
//   const query = evt.currentTarget.value;
//   console.log(query);
//   if (!query) {
//     console.log('Empty string.');
//   }
// }

// * Example event listener combination key

// document.addEventListener('keydown', onPress);

// function onPress(evt) {
//   if (evt.ctrlKey && evt.code === 'KeyV') {
//     evt.preventDefault();
//     alert('You press "ctrl + A"');
//   }

//   console.log(evt);
// }

// * Example freecodecamp

// const recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name'],
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette'],
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: [],
//   },
//   5439: {
//     albumTitle: 'ABBA Gold',
//   },
// };

// // Змініть код лише під цим рядком
// function updateRecords(records, id, prop, value) {
//   if (prop !== 'tracks' && value !== '') {
//     records[id][prop] = value;
//   } else if (prop === 'tracks' && records[id].hasOwnProperty('tracks') === false) {
//     records[id][prop] = [value];
//   } else if (prop === 'tracks' && value !== '') {
//     records[id][prop].push(value);
//   } else if (value === '') {
//     delete records[id][prop];
//   }

//   return records;
// }

// console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));

// * Example
// const myArray = [];

// let i = 5;

// while (i >= 0) {
//   myArray.push(i);
//   i -= 1;
// }

// console.log(myArray);

// * Example
// console.log('start');

// const myArr = [2, 3, 4, 5, 6];
// let total = 0;
// for (let i = 0; i < myArr.length; i++) {
//   total += myArr[i];
//   console.log(total);
// }

// console.log(total);

// * Example
// function multiplyAll(arr) {
//   let product = 1;
//   // Змініть код лише під цим рядком
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     for (let j = 0; j < arr[i].length; j++) {
//       product *= arr[i][j];
//       console.log(arr[i][j]);
//     }
//   }
//   // Змініть код лише над цим рядком
//   return product;
// }

// const result = multiplyAll([
//   [1, 2],
//   [3, 4],
//   [5, 6, 7],
// ]);

// console.log(result);

// * Example
// const arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }

// * Example do while
// const myArray = [];
// let i = 10;

// do {
//   myArray.push(i);
//   i++;
// } while (i < 5);

// console.log(myArray);

// * Example Рекурсия пример
// const arr = [1, 2, 3, 4, 5];
// const n = 4;

// function multiply(arr, n) {
//   let product = 1;
//   for (let i = 0; i < n; i++) {
//     product *= arr[i];
//   }
//   return product;
// }

// console.log(multiply(arr, 5));

// // Рекурсия
// function multiply(arr, n) {
//   if (n <= 0) {
//     return 1;
//   } else {
//     return multiply(arr, n - 1) * arr[n - 1];
//   }
// }

// function sum(arr, n) {
//   // Only change code below this line
//   if (n <= 0) {
//     return 0;
//   } else {
//     console.log(n);
//     return sum(arr, n - 1) + arr[n - 1];
//   }
//   // Only change code above this line
// }

// console.log(sum([1, 2, 3], 3));

// * Example
// Setup
// const contacts = [
//   {
//     firstName: 'Akira',
//     lastName: 'Laine',
//     number: '0543236543',
//     likes: ['Pizza', 'Coding', 'Brownie Points'],
//   },
//   {
//     firstName: 'Harry',
//     lastName: 'Potter',
//     number: '0994372684',
//     likes: ['Hogwarts', 'Magic', 'Hagrid'],
//   },
//   {
//     firstName: 'Sherlock',
//     lastName: 'Holmes',
//     number: '0487345643',
//     likes: ['Intriguing Cases', 'Violin'],
//   },
//   {
//     firstName: 'Kristian',
//     lastName: 'Vos',
//     number: 'unknown',
//     likes: ['JavaScript', 'Gaming', 'Foxes'],
//   },
// ];

// function lookUpProfile(name, prop) {
//   // Only change code below this line
//   for (let i = 0; i < contacts.length; i += 1) {
//     const isHasProp = contacts[i][prop];

//     if (contacts[i].firstName === name) {
//       if (contacts[i].hasOwnProperty(prop)) {
//         return contacts[i][prop];
//       }
//       return 'No such property';
//     }
//   }
//   return 'No such contact';
//   // Only change code above this line
// }

// lookUpProfile('Akira', 'likes');
// lookUpProfile('Kristian', 'lastName');
// lookUpProfile('Sherlock', 'likes');
// lookUpProfile('Harry', 'likes');
// lookUpProfile('Bob', 'number');
// lookUpProfile('Akira', 'address');

// //
// console.log(lookUpProfile('Akira', 'address'));
// console.log(lookUpProfile('Kristian', 'lastName'));
// console.log(lookUpProfile('Sherlock', 'likes'));
// console.log(lookUpProfile('Harry', 'likes'));
// console.log(lookUpProfile('Bob', 'number'));

// * Example
// console.log(Math.floor(Math.random() * 20));

// console.time('start');
// console.log('start');

// let result = 0;

// do {
//   //   result = Math.floor(Math.random() * 20);
//   //   result += 1;
//   console.log(result);
// } while (result < 15);

// console.log('End');
// console.timeEnd('start');

// let n = 100;

// function randomRange(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// for (let i = 0; i < n; i += 1) {
//   if (randomRange(1, n) === 10) {
//     console.log(`${i} :`, randomRange(1, n));
//     break;
//   }
// }

// * Example
// function convertToInteger(str) {
//   return parseInt(str);
// }

// convertToInteger('56');

// console.log(convertToInteger('056'));
// console.log(convertToInteger('016'));
// console.log(convertToInteger('000160'));
// console.log(convertToInteger('000s160'));
// console.log(convertToInteger('a000s160'));

//  * Example Ternary
// function checkSign(num) {
//   return num === 0 ? 'zero' : num > 0 ? 'positive' : 'negative';
// }

// checkSign(10);

// console.log(checkSign(-10));
// console.log(checkSign(10));
// console.log(checkSign(0));
// console.log(checkSign(12));
// console.log(checkSign(12));

// * Example recursion
// function countup(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countup(n - 1);
//     countArray.push(n);
//     return countArray;
//   }
// }
// console.log(countup(10));

// Only change code below this line
// function countdown(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countdown(n - 1);
//     countArray.unshift(n);

//     return countArray;
//   }
// }
// // Only change code above this line

// console.log(countdown(10));

// * Example
// function rangeOfNumbers(startNum, endNum) {
//   if (endNum < startNum) {
//     return [];
//   } else {
//     const numbers = rangeOfNumbers(startNum, endNum - 1);
//     numbers.push(endNum);
//     return numbers;
//   }
// }

// console.log(rangeOfNumbers(1, 5));
// console.log(rangeOfNumbers(6, 9));
// console.log(rangeOfNumbers(4, 4));

//  * Example
// var numArray = [];
// for (var i = 0; i < 3; i++) {
//   numArray.push(i);
// }
// console.log(numArray);
// console.log(i);

// * example
// var printNumTwo;
// for (var i = 0; i < 3; i++) {
//   if (i === 2) {
//     printNumTwo = function () {
//       return i;
//     };
//   }
// }
// console.log(printNumTwo());

// * Example
// function checkScope() {
//   let i = 'function scope';
//   if (true) {
//     let i = 'block scope';
//     console.log('Block scope i is: ', i);
//   }
//   console.log('Function scope i is: ', i);
//   return i;
// }

// console.log(checkScope());

// * Example

// let obj = {
//   name: 'FreeCodeCamp',
//   review: 'Awesome',
// };
// Object.freeze(obj);
// obj.review = 'bad';
// obj.newProp = 'Test';
// console.log(obj);

// * Example
// function freezeObj() {
//   const MATH_CONSTANTS = {
//     PI: 3.14,
//   };
//   // Only change code below this line
//   Object.freeze(MATH_CONSTANTS);
//   // Only change code above this line
//   try {
//     MATH_CONSTANTS.PI = 99;
//   } catch (ex) {
//     console.log(ex);
//   }
//   return MATH_CONSTANTS.PI;
// }
// const PI = freezeObj();

// console.log(freezeObj());

// * Example

// debugger;
// const result = [] + 1 + 2; // concztznation

// const a = true;
// const b = true;

// console.log(!!(a && b));
// console.log(a && b);
// debugger;

// let name = 'пупкин'.replace('п', 'д');

// f.call(null);

// function f() {
//   alert(this);
// }

// const a = (1, 5 - 1) * 2;
// console.log(a);

// * Exapmle

// const spacing = '5px';
// const styles = `padding: ${spacing}; background-color: darkblue; color: white; font-style:
//          italic; border: ${spacing} solid crimson; font-size: 2em;`;
// console.log('%cVariety is the spice of life', styles);

// const result = 5 + 15;
// console.warn(result);

// * Example

// program to implement queue data structure

// class Queue {
//   constructor() {
//     this.items = [];
//   }

//   // add element to the queue
//   enqueue(element) {
//     return this.items.push(element);
//   }

//   // remove element from the queue
//   dequeue() {
//     if (this.items.length > 0) {
//       return this.items.shift();
//     }
//   }

//   // view the last element
//   peek() {
//     return this.items[this.items.length - 1];
//   }

//   // check if the queue is empty
//   isEmpty() {
//     return this.items.length == 0;
//   }

//   // the size of the queue
//   size() {
//     return this.items.length;
//   }

//   // empty the queue
//   clear() {
//     this.items = [];
//   }
// }

// let queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(4);
// queue.enqueue(8);
// console.log(queue.items);

// queue.dequeue();
// console.log(queue.items);

// console.log(queue.peek());

// console.log(queue.isEmpty());

// console.log(queue.size());

// queue.clear();
// console.log(queue.items);

// * Example
// var buffer = new ArrayBuffer(8);
// var view = new Int32Array(buffer);

// let a = 5;
// let b = 'asdf';
// let c = a + b;

// // if you want to see the value of c
// console.log(c);

// // then do other operations
// if (c) {
//   // do something
// }

// * Example

// var petName = 'Rocky'; //Global Variable
// myFunction();

// function myFunction() {
//   document.getElementById('geeks').innerHTML = typeof petName + '- ' + 'My pet name is ' + petName;
// }

// document.getElementById('Geeks').innerHTML = typeof petName + '- ' + 'My pet name is ' + petName;

// // addElements function to add elements as options
// function addElements(dd, array) {
//   for (i = 0; i < array.length; i++) {
//     var opt = document.createElement('option');
//     opt.text = array[i];
//     opt.value = array[i];
//     dd.add(opt);
//   }
// }
// //  removeElements function to remove elements in dropdown city while changing the states
// function removeElements(dd) {
//   for (i = dd.options.length - 1; i >= 0; i--) {
//     dd.remove(i);
//   }
// }
// // function to fill states
// function fillState() {
//   var state = ['-Select-', 'Madhya Pradesh', 'Haryana', 'Gujrat', 'Himachal'];
//   var st = document.getElementById('st');
//   addElements(st, state);
// }
// // functions to fill city dropdown after changing the state values
// function fillCity() {
//   var st = document.getElementById('st');
//   var ct = document.getElementById('ct');
//   var i = st.selectedIndex;
//   removeElements(ct);
//   //switch cases according to the state values
//   switch (i) {
//     case 1:
//       var mp = ['-Select-', 'Gwalior', 'Bhopal', 'Indore', 'Ujjain'];
//       addElements(ct, mp);
//       break;
//     case 2:
//       var hr = ['-Select-', 'Rohtak', 'Faridabad', 'Sonipat', 'Panipat'];
//       addElements(ct, hr);
//       break;
//     case 3:
//       var gj = ['-Select-', 'Ahemdabad', 'Surat', 'Gandhinagar', 'Rajkot'];
//       addElements(ct, gj);
//       break;
//     case 4:
//       var hp = ['-Select-', 'Dharamshala', 'Shimla', 'kasauli', 'Nahan'];
//       addElements(ct, hp);
//       break;
//   }
// }

//  * Example CAULATOR

// program to create a simple calculator using the if...else...if in JavaScript.
// // take the operator from the user through prompt box in JavaScript.
// const operator = prompt('Enter operator to perform the calculation ( either +, -, * or / ): ');

// // accept the number from the user through prompt box
// const number1 = parseFloat(prompt('Enter the first number: '));
// const number2 = parseFloat(prompt('Enter the second number: '));

// let result; // declaration of the variable.

// // use if, elseif and else keyword to define the calculator condition in JavaScript.
// if (operator == '+') {
//   // use + (addition) operator to add two numbers
//   result = number1 + number2;
// } else if (operator == '-') {
//   // use -  (subtraction) operator to subtract two numbers
//   result = number1 - number2;
// } else if (operator == '*') {
//   // use * (multiplication) operator to multiply two numbers
//   result = number1 * number2;
// } else {
//   result = number1 / number2; // use / (division) operator to divide two numbers
// }

// // display the result of the Calculator
// window.alert(' Result is' + result);

// x = 10;
// y = 15;
// z = x + y;
// console.log(z);
// console.log(a);//a is not intialized
/* 
x = 10;
y = 15;
z = x + y;
debugger;
document.write(z);
document.write(a); */

//  * Example
// // debugger
// const myConcat = (arr1, arr2) => arr1.concat(arr2);
// console.log(myConcat([1, 2], [3, 4, 5]));
// debugger
// const p = 1;

// * Example
// function howMany(...args) {
//     console.warn(args);
//     debugger
//     return "You have passed " + args.length + " arguments.";
//   }
//   console.log(howMany(0, 1, 2));
//   console.log(howMany("string", null, [1, 2, 3], { }));
//   debugger

// * Example
// const sum = (...args) => args.reduce((a, b) => a + b, 0);

// const x = sum(1,2,3,4)
// debugger

// * Example
//     var arr = [6, 89, 3, 45];
// var maximus = Math.max.apply(null, arr);
// debugger

// * Example
// let a = 8, b = 6;
// [a, b] = [b, a];
// debugger

// * Example
// debugger;

// function removeFirstTwo(list) {
//     // Only change code below this line
//     const [a, b, ...shorterList] = list;
//     // Only change code above this line
//     return shorterList;
//   }
  
//   const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const sourceWithoutFirstTwo = removeFirstTwo(source);

// * Example
// const stats = {
//     max: 56.78,
//     standard_deviation: 4.34,
//     median: 34.54,
//     mode: 23.87,
//     min: -0.75,
//     average: 35.85
//   };
  
//   // Only change code below this line
//   const half = ({min, max}) => (max + min) / 2.0; 
  
//   // Only change code above this line

// * Example
// class ToDoClass {
//     constructor() {
//       this.tasks = JSON.parse(localStorage.getItem('TASKS'));
//       if(!this.tasks) {
//         this.tasks = [
//           {task: 'Go to Dentist', isComplete: false},
//           {task: 'Do Gardening', isComplete: true},
//           {task: 'Renew Library Account', isComplete: false},
//         ];
//       }

//       this.loadTasks();
//       this.addEventListeners();
//     }}

// * Example
// let SSL_KEY = __dirname + '/certs/key.pem';
// let SSL_CERT = __dirname + '/certs/certificate.pem';
// let MONGOURL = 'mongodb://admin:admin123@ds241055.mlab.com:41055/iotfwjs';

// module.exports = {
//     id: 'broker',
//     stats: false,
//     port: 8443,
//     logger: {
//         name: 'iotfwjs',
//         level: 'debug'
//     },
//     secure: {
//         keyPath: SSL_KEY,
//         certPath: SSL_CERT,
//     },
//     backend: {
//         type: 'mongodb',
//         url: MONGOURL
//     },
//     persistence: {
//         factory: 'mongo',
//         url: MONGOURL
//     }
// };

// Example
// var config = require('./config.js');
// var mqtt = require('mqtt');
// var GetMac = require('getmac');

// var client = mqtt.connect({
//     port: config.mqtt.port,
//     protocol: 'mqtts',
//     host: config.mqtt.host,
//     clientId: config.mqtt.clientId,
//     reconnectPeriod: 1000,
//     username: config.mqtt.clientId,
//     password: config.mqtt.clientId,
//     keepalive: 300,
//     rejectUnauthorized: false
// });

// client.on('connect', function() {
//     client.subscribe('rpi');
//     GetMac.getMac(function(err, macAddress) {
//         if (err) throw err;
//         client.publish('api-engine', macAddress);
//     });
// });

// client.on('message', function(topic, message) {
//     // message is Buffer
//     // console.log('Topic >> ', topic);
//     // console.log('Message >> ', message.toString());
//     if (topic === 'rpi') {
//         console.log('API Engine Response >> ', message.toString());
//     } else {
//         console.log('Unknown topic', topic);
//     }
// });

// * Example 
// let SSL_KEY = __dirname + '/certs/key.pem';
// let SSL_CERT = __dirname + '/certs/certificate.pem';
// let MONGOURL = 'mongodb://admin:admin123@ds125481.mlab.com:25481/iotjs';

// module.exports = {
//     id: 'broker',
//     stats: false,
//     port: 8443,
//     logger: {
//         name: 'iotjs',
//         level: 'debug'
//     },
//     secure: {
//         keyPath: SSL_KEY,
//         certPath: SSL_CERT,
//     },
//     backend: {
//         type: 'mongodb',
//         url: MONGOURL
//     },
//     persistence: {
//         factory: 'mongo',
//         url: MONGOURL
//     }
// };

// * Example
// import { format, differenceInMinutes } from "date-fns";

// const StandardDateTimeFormat = "M/dd/yyyy";
// const getTimePastIfLessThanDay = (compTime: Date | null): string => {
//   if (!compTime) return "";

//   const now = new Date();
//   const diffInMinutes = differenceInMinutes(now, compTime);
//   console.log("diff", diffInMinutes);
//   if (diffInMinutes > 60) {
//     if (diffInMinutes > 24 * 60) {
//       return format(compTime, StandardDateTimeFormat);
//     }
//     return Math.round(diffInMinutes / 60) + "h ago";
//   }
//   return Math.round(diffInMinutes) + "m ago";
// };

// export { getTimePastIfLessThanDay };