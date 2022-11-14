// * Разобраться
// const items = {
//   string: 'Simple',
//   number: 100,
//   isTurn: true,
//   array: [],
// };

// // console.log(items, items.isTurn);

// let { string, number, isTurn, array } = items; // Потому что примитивный тип данных делает копию в отделейной ячейке памяти
// const val = 'value';

// items.string = 'Hard!'; // Изменяю в самом объекте
// items.number = 200;
// items.isTurn = false;
// items['new'] = 'New text';
// items.xxx;
// items[val] = 500;

// // string = 300;

// console.log(items, string, items.string);
// // End

//*! Example Колбэки и стрелочные функции
// function greet(name) {
//   console.log(`Добро пожаловать ${name}`);
//   return;
// }

// // console.log(greet('Mango'));
// // console.log(greet);

// function registerGuest(name, callback) {
//   console.log(`Регистрация гостя ${name}`);
//   callback(name);
// }

// registerGuest('Mango', greet);

//* Example
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// // Передаём инлайн функцию greet как колбэк
// registerGuest('Манго', function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// });

// // Передаём инлайн функцию notify как колбэк
// registerGuest('Поли', function notify(name) {
//   console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
// });

//* Example function
// function processCall(recipient) {
//   // Имитируем доступность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
//     // Логика активации автоответчика
//   } else {
//     console.log(`Соединение с ${recipient}, ожидайте...`);
//     // Логика принятия звонка
//   }
// }

// processCall('Mango');

// * Example refactoring function код выше
// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Имитируем доступность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`Соединяем с ${name}, ожидайте...`);
//   // Логика принятия звонка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
//   // Логика активации автоответчика
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//   // Логика записи голограммы
// }

// processCall('Манго', takeCall, activateAnsweringMachine);
// processCall('Поли', takeCall, leaveHoloMessage);

//* Example forEach
// const numbers = [5, 10, 15, 20, 25];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Индекс ${i}, значение ${numbers[i]}`);
// }

// // Перебирающий forEach
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

//* Стрелочные функции
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// const arrowAdd = (a, b, c) => {
//   return a + b + c;
// };

// console.log(classicAdd(1, 2, 3));
// console.log(arrowAdd(1, 2, 3));

// const add = a => {
//   return a + 5;
// };

// console.log(add(1));

// const greet = () => {
//   console.log('Hello!');
// };

// greet();

// * Example
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// const add = (a, b, c) => a + b + c;

// console.log(classicAdd(1, 2, 3));
// console.log(add(1, 2, 3));

// * Example
// const add = (...args) => {
//   console.log(args);
// };

// add(1, 2, 3, 4);

// *Example
// const numbers = [5, 10, 15, 20, 25];

// // Объявление функции
// numbers.forEach(function (number, index) {
//   console.log(`Индекс  ${index}, значение ${number}`);
// });

// // Анонимная стрелочная функция
// numbers.forEach((number, index) => {
//   console.log(`Индекс  ${index}, значение ${number}`);
// });

// const logMessage = (number, index) => {
//   console.log(`Индекс  ${index}, значение ${number}`);
// };

// numbers.forEach(logMessage);
