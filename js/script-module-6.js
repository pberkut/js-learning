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
