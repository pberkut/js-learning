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

// * Example
// const doMath = function (a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);
// };

// //Add
// const add = function (x, y) {
//   return x + y;
// };

// // Subtract
// const sub = function (x, y) {
//   return x - y;
// };

// // Multiply
// const mul = function (x, y) {
//   return x * y;
// };

// // Divide
// const div = function (x, y) {
//   return x / y;
// };

// doMath(1, 2, add);

// doMath(3, 1, mul);

// doMath(3, 1, function (x, y) {
//   return x - y;
// });

// doMath(6, 2, div);

//* Example
// const buttonRef = document.querySelector('.button');

// // console.log(buttonRef);

// const handleBtnClick = function () {
//   console.log('Клик по кнопке' + Date.now());
// };

// // buttonRef.addEventListener('click', handleBtnClick);
// buttonRef.addEventListener('click', function () {
//   console.log('Клик по кнопке' + Date.now());
// });

// * Example
// const callback = function () {
//   console.log('Вызов функцмм callBack после таймаут 2000 мс');
// };

// console.log('Код перед таймаут');

// setTimeout(callback, 2000);

// console.log('Код после таймаут');

//*! Замыкание функций. Closure function
// const makeSheff = function (name) {
//   const makeDish = function (dish) {
//     console.log(`${name} готовит ${dish}`);
//   };

//   return makeDish;
// };

// const mango = makeSheff('Mango');

// console.dir(mango);

// mango('котлеты');
// mango('капуста');

// const poly = makeSheff('Poly');

// console.dir(poly);

// poly('чебурек');
// poly('пельмени');

//! Стрелочные функции
// const fnA = function (a, b, c) {
//   console.log(a, b, c);
//   return a + b + c;
// };

// const fnB = (a, b, c) => {
//   return a + b + c;
// };

// const fnC = (a, b, c) => a + b + c;

// const fnD = a => a + 5;

// const fnE = () => 50;

// const fnX = () => [1, 2, 3, 4, 5];

// const fnF = () => ({ value: 100 });

// // fnA(2, 3, 3);
// console.log(fnA(2, 3, 3));
// console.log(fnB(5, 5, 5));
// console.log(fnC(2, 2, 2));
// console.log(fnD(5));
// console.log(fnE());
// console.log(fnF());
// console.log(fnX());

// * Task 4 - 3
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza('Royal Grand', function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza('Ultracheese', function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`);
// });

// * Task 4 - 4
// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
//     }
//     return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);

// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));

// * Task 4 - 5
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   orderedItems.forEach(number => {
//     totalPrice += number;
//   });

//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   totalPrice += orderedItems[i];
//   // }

//   // Change code above this line
//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([12, 21, 21, 2]));

// * Task 4 - 6
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   /*
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       filteredNumbers.push(numbers[i]);
//     }
//   }
// */

//   // Change code above this line
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

//* Task 4 - 7
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   firstArray.forEach(number => {
//     if (secondArray.includes(number)) {
//       commonElements.push(number);
//     }
//   });

//   /*
//   for (let i = 0; i < firstArray.length; i += 1) {
//     if (secondArray.includes(firstArray[i])) {
//       commonElements.push(firstArray[i]);
//     }
//   }
// */

//   return commonElements;
//   // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// * Task 4 - 13
// function changeEven(numbers, value) {
//   let newNumbers = [];

//   numbers.forEach(number => {
//     if (number % 2 === 0) {
//       newNumbers.push(number + value);
//     } else {
//       newNumbers.push(number);
//     }
//   });

//   return newNumbers;
// }

// /*
// function changeEven(numbers, value) {
//   // Change code below this line
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
//   // Change code above this line
// }
// */

// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
// console.log(changeEven([17, 24, 68, 31, 42], 100));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));
