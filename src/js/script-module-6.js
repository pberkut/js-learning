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
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14,
  };
  // Only change code below this line
  Object.freeze(MATH_CONSTANTS);
  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

console.log(freezeObj());
