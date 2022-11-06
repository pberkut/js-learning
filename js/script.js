// let quantity = prompt('How quantity need?');
// quantity = Number.parseInt(quantity);
// console.log(quantity, typeof quantity);

// let salary = 1300.165823;
// console.log(salary, typeof salary);
// console.log(Number(salary.toFixed(2)));
// console.log(Number);

// Example # 6
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message);

// function multiply() {
//   console.log('multiply function invocation');
// }
// multiply();
// multiply();
// multiply();

// function sayHi() {
//   console.log('Hello, it is my first function.');
// }

// sayHi();
// sayHi();
// sayHi();

// function multiply(x, y, z) {
//   console.log(`Результат умножения равен x=${x}, y=${y}, z=${z} = ${x * y * z}`);
// }
// multiply(3, 5, 3);
// multiply(2, 1, 5);

// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// Example 9
// function multiply(x, y, z) {
//   console.log('Код до return выполняется как обычно');

//   //  Возвращает результат выражения умножения
//   return x * y * z;

//   console.log('Этот лог никогда не выполнится, он стоит после return');
// }

// // Результат работы функции можно сохранить в переменную

// let result = multiply(2, 3, 5);
// console.log(result);

// result = multiply(4, 8, 12);
// console.log(result);

// result = multiply(17, 6, 25);
// console.log(result);

// Task # 9
// function add(a, b, c) {
//   return a + b + c;
// }
// add(2, 5, 8);
// console.log(add(5, 27, 10));
// console.log(add(0, 20, 30));
// console.log(add(5, 27, 10));

// // Task 10
// function makeMessage(name, price) {
//   const message = `You picked ${name}, price per item is ${price} credits`;
//   return message;
// }
// console.log(makeMessage('Radar', 6150));

// console.log(1 && true && 'True');

// console.log(0 || 0 || 0 || false);

// const a = Number('10');
// console.log(a != 10);

// for (let i = 1; i < 10; i += 1) {
//   console.log(i);
// }

// for (let i = 0; i < 5; i += 1) {
//   console.log(i);
// }

// // Task # 11
// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//   const totalPrice = orderedQuantity * pricePerItem;

//   return totalPrice;
// }

// console.log(calculateTotalPrice(12, 70));

// // Task # 12
// const orderedQuantity = Math.round(Math.random() * (10 - 1) + 1);
// function makeOrderMessage(orderedQuantity, pricePerItem, deliveryFee) {
//   const totalPrice = orderedQuantity * pricePerItem + deliveryFee;
//   const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
//   return message;
// }
// for (let i = 0; i < 5; i += 1) {
//   console.log(makeOrderMessage(orderedQuantity, 500, 50));
// }

// Task 13
// function isAdult(age) {
//   const passed = age >= 18;
//   return passed;
// }
// console.log(isAdult(17));

// function isAdult(age) {
//   let message;
//   if (age >= 18) {
//     message = `Your ${age} age. You adult.`;
//   } else {
//     message = `Your ${age} age. You young.`;
//   }
//   return message;
// }
// console.log(isAdult(18));

// // Task # 14
// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   const isMatch = SAVED_PASSWORD === password;

//   return isMatch;
// }
// console.log(isValidPassword('jqueryismyjam'));

// // Task # 15
// let cost;
// const subscription = 'pro';
// if (subscription === 'pro') {
//   cost = 100;
// } else {
//   cost = 0;
// }
// console.log(cost);

// function checkAge(age) {
//   let message;
//   if (age >= 18) {
//     // Change this line
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }
//   return message;
// }
// console.log(checkAge(16));

// // Task # 16
// function checkStorage(evailable, ordered) {
//   let message;

//   if (evailable < ordered) {
//     message = 'Not enough good in stock!';
//   } else {
//     message = 'Order is processed, our manager will contact with you.';
//   }

//   return message;
// }

// console.log(checkStorage(30, 20));
// let a = 11;
// a %= 2;
// console.log(a);

// // Task # 18
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   const totalPrice = pricePerDroid * orderedQuantity;

//   if (totalPrice > customerCredits) {
//     message = 'Insufficient fund!';
//   } else {
//     customerCredits -= totalPrice;
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`;
//   }
//   return message;
// }

// console.log(makeTransaction(3000, 5, 23000));
// console.log(makeTransaction(1000, 3, 15000));
// console.log(makeTransaction(5000, 10, 8000));
// console.log(makeTransaction(2000, 8, 10000));
// console.log(makeTransaction(500, 10, 5000));

// // End task #18

// Task # 19
// let cost;
// const subscription = 'premium';

// if (subscription === 'free') {
//   cost = 0;
// } else if (subscription === 'pro') {
//   cost = 100;
// } else if (subscription === 'premium') {
//   cost = 500;
// } else {
//   console.log(`Inavalid subscription type - ${subscription}`);
// }

// console.log(cost);

// -------

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) {
//     message = 'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) {
//     message = 'Welcome!';
//   } else {
//     message = 'Acess denied, wrong password!';
//   }

//   return message;
// }

// console.log(checkPassword('mangohackzor'));
// console.log(checkPassword(null));
// console.log(checkPassword('jqueryismyjam'));

// End task # 19

// // Task # 20

// function checkStorage(available, ordered) {
//   let message;

//   if (ordered === 0) {
//     message = 'There are no products in the order!';
//   } else if (ordered > available) {
//     message = 'Your order is too large, there are not enough items in stock!';
//   } else {
//     message = 'The order is accepted, our manager will contact you';
//   }

//   return message;
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// // End task # 20

// // Task # 21
// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;

//   return isInRange;
// }

// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));
// console.log(isNumberInRange(10, 30, 24));
// console.log(isNumberInRange(10, 30, 70));

// // Task 22
// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === 'pro' || subType === 'vip'; // Change this line

//   return canAccessContent;
// }

// console.log(checkIfCanAccessContent('pro'));
// console.log(checkIfCanAccessContent('starter'));
// console.log(checkIfCanAccessContent('vip'));
// console.log(checkIfCanAccessContent('free'));

// Task 23
// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line

//   return isNotInRange;
// }

// Task # 24

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent < 50000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent < 20000) {
//     discount = BRONZE_DISCOUNT;
//   } else {
//     discount = BASE_DISCOUNT;
//   }
//   // Change code above this line
//   return discount;
// }

// console.log(`Your discount = ${getDiscount(46900) * 100}%`);
// console.log(`Your discount = ${getDiscount(137000) * 100}%`);
// console.log(`Your discount = ${getDiscount(8250) * 100}%`);
// console.log(`Your discount = ${getDiscount(1300) * 100}%`);
// console.log(`Your discount = ${getDiscount(5000) * 100}%`);
// console.log(`Your discount = ${getDiscount(20000) * 100}%`);
// console.log(`Your discount = ${getDiscount(50000) * 100}%`);

// // Task 25

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//   if (ordered > available) {
//     message = 'Not enough goods in stock!';
//   } else {
//     message = 'The order is accepted, our manager will contact you';
//   }

//   // Change code above this line
//   return message;
// }

// Reafactoring
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   message = ordered > available ? 'Not enough goods in stock!' : 'The order is accepted, our manager will contact you';

//   // Change code above this line
//   return message;
// }

// // Task £ 28
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   switch (password) {
//     case null:
//       message = 'Canceled by user!';
//       break;
//     case 'jqueryismyjam':
//       message = 'Welcome!';
//       break;
//     default:
//       message = 'Access denied, wrong password!';
//   }

//   return message;
// }

// console.log(checkPassword('mangohackzor'));
// console.log(checkPassword(null));
// console.log(checkPassword('polyhax'));
// console.log(checkPassword('jqueryismyjam'));

// // Task 29
// function getShippingCost(country) {
//   let message;
//   // Change code below this line
//   let price;
//   switch (country) {
//     case 'China':
//       price = 100;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case 'Chile':
//       price = 250;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case 'Australia':
//       price = 170;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case 'Jamaica':
//       price = 120;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     default:
//       message = 'Sorry, there is no delivery to your country';
//   }
//   // Change code above this line
//   return message;
// }

// console.log(getShippingCost('Australia'));
// console.log(getShippingCost('Germany'));
// console.log(getShippingCost('China'));
// console.log(getShippingCost('Chile'));
// console.log(getShippingCost('Jamaica'));
// console.log(getShippingCost('Sweden'));
// // End task 29

// // Task 30
// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }

// // Task 31
// const productName = 'Repaier droid';

// console.log(productName.length);
// console.log(productName[0]);
// console.log(productName[5]);
// console.log(productName[11]);
// console.log(productName[productName.length - 1]);

// Task 32
// const productName = 'Repair droid';
// console.log(productName.slice(0, 4));
// console.log(productName.slice(3, 9));
// console.log(productName.slice(0, productName.length));
// console.log(productName.slice(7, productName.length));

// function getSubstring(string, length) {
//   const substring = string.slice(0, length);

//   return substring;
// }

// console.log(getSubstring('Hello world', 3));
// console.log(getSubstring('Hello world', 6));
// console.log(getSubstring('Hello world', 8));
// console.log(getSubstring('Hello world', 11));
// console.log(getSubstring('Hello world', 0));

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   if (message.length <= maxLength) {
//     result = message;
//   } else {
//     result = `${message.slice(0, maxLength)}...`;
//   }
//   /// Change code above this line
//   return result;
// }

// console.log('Curabitur ligula sapien'.length);
// console.log(formatMessage('Curabitur ligula sapien', 16));
// console.log(formatMessage('Curabitur ligula sapien', 23));
// console.log(formatMessage('Vestibulum facilisis purus nec', 20));
// console.log(formatMessage('Vestibulum facilisis purus nec', 30));
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15));
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41));

// Task 34
// console.log('saMsUng' === 'samsung');
// console.log('saMsUng' === 'SAMSUNG');

// const BRAND_NAME = 'SAMSUNG';
// const userInput = 'saMsUng';
// const normalizedToUpperCaseInput = userInput.toUpperCase();

// console.log(userInput);
// console.log(userInput === BRAND_NAME);
// console.log(normalizedToUpperCaseInput);
// console.log(normalizedToUpperCaseInput === BRAND_NAME);

// Task 35
// const productName = 'Repair droid';

// console.log(productName.includes('a'));
// console.log(productName.includes('A'));
// console.log(productName.includes('droid'));
// console.log(productName.includes('Droid'));
// console.log(productName.includes('Repair'));
// console.log(productName.includes('repair'));

// function checkForName(fullName, name) {
//   const result = fullName.includes(name);

//   return result;
// }

// console.log(checkForName('Egor Kolbasov', 'Egor'));
// console.log(checkForName('Egor Kolbasov', 'egor'));
// console.log(checkForName('Egor Kolbasov', 'EgOr'));
// console.log(checkForName('Egor Kolbasov', 'Egors'));

// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   message = message.toLowerCase();
//   result = message.includes('spam') || message.includes('sale');
//   // Change code above this line
//   return result;
// }

// console.log(checkForSpam('Latest technology news'));
// console.log(checkForSpam('JavaScript weekly newsletter'));
// console.log(checkForSpam('Get best sale offers now!'));
// console.log(checkForSpam('Amazing SalE, only tonight!'));
// console.log(checkForSpam('Trust me, this is not a spam message'));
// console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!'));
// console.log(checkForSpam('[SPAM] How to earn fast money?'));

// Arrays

// const clients = ['Mango', 'Poly', 'Ajax', 'Stars', 'Planet', 'Dots', 'Games', 'Last'];

// console.log(clients[2]);
// console.log(clients[1]);
// console.log(clients[0]);

// clients[0] = 'Master';
// console.log(clients[0]);

// console.log(clients.length);

// const lastElementIndex = clients.length - 1;
// console.log(lastElementIndex);
// console.log(`Last element in array: "${clients[lastElementIndex]}", Number index: ${lastElementIndex}`);

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(i, clients[i]);
//   // console.log(`${i}, ${clients[i]}`);
// }

// for (const client of clients) {
//   console.log(client);
// }

// const string = 'javascript';

// for (const character of string) {
//   console.log(character);
// }

// // Example
// const clientNameToFind = 'Poly';
// let message;

// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = 'Клиент с таким именем есть в базе данных!';
//     break;
//   }

//   message = 'Клиента с таким именем нету в базе данных!';
// }

// console.log(message);

// // Example
// const clientNameToFind = 'Poly';
// let message = 'Клиент с таким именем нету в базе данных!';

// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = 'Клиент с таким именем есть в базе данных!';
//     break;
//   }
// }

// console.log(message);

// // Example
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}; ${numbers[i]}`);
// }

// Example
// let a = 5;
// let b = a;

// console.log(a);
// console.log(b);

// a = 10;
// console.log(a);
// console.log(b);

// // Example
// const a = ['Mango'];
// const b = a;

// console.log(a);
// console.log(b);

// a.push('Poly');
// console.log(a);
// console.log(b);

// b.push('Ajax');
// console.log(a);
// console.log(b);

// // Example Method split
// const name = 'Mango';
// console.log(name.split(''));

// const message = 'JavaScript это интересно';
// console.log(message.split(' '));

// // Example Method Join
// const words = ['JavaScript', 'это', 'интересно'];
// console.log(words.join(''));
// console.log(words.join(' '));
// console.log(words.join('-'));

//  Method indexOf()
// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients.indexOf('Poly'));
// console.log(clients.indexOf('Mono'));

// console.log(clients.includes('Poly'));
// console.log(clients.includes('Mono'));

// Проверка множественных условий с includes()
// const fruit = 'apple';

// if (fruit === 'apple' || fruit === 'strawberry') {
//   console.log('It is a red fruit!');
// }

// const fruit = 'apple';

// if (fruit === 'apple' || fruit === 'strawberry' || fruit === 'cherry' || fruit === 'cranberries') {
//   console.log('It is a red fruit!');
// }

// // Выносим варианты в массив
// const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
// const fruit = 'cherry';
// // Проверяем наличие элемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }

// // push
// const numbers = [];
// console.log(numbers);

// numbers.push(1);
// console.log(numbers);

// numbers.push(2);
// console.log(numbers);

// numbers.push(3);
// console.log(numbers);

// numbers.push(4);
// console.log(numbers);

// numbers.push(5);
// console.log(numbers);

// // pop
// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.pop());
// console.log(numbers);

// console.log(numbers.pop());
// console.log(numbers);

// console.log(numbers.pop());
// console.log(numbers);

// console.log(numbers.pop());
// console.log(numbers);

// console.log(numbers.pop());
// console.log(numbers);

// console.log(numbers.pop());
// console.log(numbers);

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi', 'Star', 'Planet'];
// console.log(clients.slice());
// console.log(clients.slice(1, 3));
// console.log(clients.slice(1));
// console.log(clients.slice(2));
// console.log(clients.slice(-2));

// Метод splice
// const scores = [1, 2, 3, 4, 5];
// const deletedScores = scores.splice(0, 3);
// console.log(scores);
// console.log(deletedScores);

// const colors = ['red', 'green', 'blue'];
// console.log(colors);
// colors.splice(2, 0, 'purple');
// console.log(colors);
// colors.splice(1, 0, 'yellow', 'pink');
// console.log(colors);

// const languages = ['C', 'C++', 'Java', 'JavaScript'];
// console.log(languages);
// languages.splice(1, 1, 'Python');
// console.log(languages);
// languages.splice(2, 1, 'C#', 'Swift', 'Go');
// console.log(languages);

// //Метод concat()
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Monkong', 'Singu'];
// console.log(oldClients);
// console.log(newClients);
// const allClientsWithOldFirst = oldClients.concat(newClients);
// console.log(allClientsWithOldFirst);
// const allClientsWithNewFirst = newClients.concat(oldClients);
// console.log(allClientsWithNewFirst);
// console.log(oldClients);
// console.log(newClients);
// // test
// newClients.concat(oldClients);
// console.log(newClients);

// const array = ['Mango', 'Kiwi', 'Apple', 'Lemon'];
// console.table(array);

// array[1] = 'Green';

// console.table(array);

// const numbers1 = [1, 2, 3];
// const numbers2 = [1, 2, 3];
// const numbers3 = numbers1;
// console.log(numbers1 === numbers2);
// console.log(numbers1 === numbers3);

// Example
// const array = ['Alina', 'Pavel', 'Timur', 'Kira', 'Denis'];

// for (let i = 0; i < array.length; i += 1) {
//   console.log(`Name # ${i}:`, array[i]);
//   array[i] += '-1';
//   console.log(array[i]);
// }
// console.table(array);

// for (const name of array) {
//   console.log(name);
// }

// Example PAYMENT Посчитать общую сумму ы корзине
// const cart = [54, 28, 105, 70, 92, 17, 120, 90, 12, 22, 222];
// let total = 0;

// for (let i = 0; i < cart.length; i += 1) {
//   console.log(cart[i]);
//   cart[i] = Math.round(cart[i] * 1.1);
//   total += cart[i];
// }

// for (const value of cart) {
//   console.log(value);
//   total += value;
// }
// console.log('Total :', total);

// // Example сумма чётное и нечётное
// const numbers = [1, 6, 3, 767, 343, 23, 56, 343, 232, 455, 6763, 3452];
// let totalEven = 0;
// let totalOdd = 0;
// let total = 0;

// console.table(numbers);

// for (const number of numbers) {
//   if (number % 2 === 0) {
//     console.log('Чётное: ', number);
//     totalEven += number;
//   } else {
//     console.log('Нечётное: ', number);
//     totalOdd += number;
//   }
// }

// console.log(`Сумма чётных: `, totalEven);
// console.log(`Сумма нечётных: `, totalOdd);

// total = totalEven + totalOdd;

// console.log('Total: ', total);

// // for (let i = 0; i < numbers.length; i += 1) {
// //   const number = numbers[i];

// //   if (number % 2 === 0) {
// //     console.log(`Чётное: ${number}`);
// //     total += number;
// //   } else {
// //     console.log(`Нечётное: ${number}`);
// //   }
// // }

// Example
// const numbers = [1, 6, 3, 8, 12, 15, 17, 20];
// let total = 0;

// for (const number of numbers) {
//   if (number % 2 !== 0) {
//     console.log('Эту итерацию нужно пропустить ', number);
//     continue;
//   }

//   total += number;
//   console.log('Чётное: ', number);
// }

// console.log('Total: ', total);

// // Module 2. Task 1.
// function checkAge(age) {
//   if (age >= 18) {
//     return 'You are an adult';
//   }

//   return 'You are a minor';
// }

// console.log(checkAge(18));
// console.log(checkAge(10));
// console.log(checkAge(20));
// console.log(checkAge(15));

// // Example
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryiamyjam';

//   if (password === ADMIN_PASSWORD) {
//     return 'Welcome!';
//   }

//   return 'Acces denied, wrong password!';
// }

// console.log(checkPassword('pass'));
// console.log(checkPassword('jqueryiamyjam'));

// Task 2 - 3
// function checkStorage(available, ordered) {
//   let message;

//   if (ordered === 0) {
//     message = 'Your order is empty!';
//   } else if (ordered > available) {
//     message = 'Your order is too large, not enough goods in stock!';
//   } else {
//     message = 'The order is accepted, our manager will contact you';
//   }

//   return message;
// }

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return 'Your order is empty!';
//   }

//   if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!';
//   }

//   return 'The order is accepted, our manager will contact you';
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// // Task 2-9
// function getExtremeElements(array) {
//   const firstElement = array[0];
//   const lastArrayElement = array.length - 1;
//   const lastElement = array[lastArrayElement];
//   return `${firstElement}, ${lastElement}`;
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));

// function getExtremeElements(array) {
//   const lastArrayElement = array.length - 1;
//   const arrayExtreme = [array[0], array[lastArrayElement]];

//   return arrayExtreme;
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));

// Task 2-10
// function splitMessage(message, delimeter) {
//   let words;
//   words = message.split(delimeter);
//   return words;
// }

// console.log(splitMessage('Mango hurries to the train', ' '));
// console.log(splitMessage('Mango', ''));
// console.log(splitMessage('best_for_week', '_'));

// // Task 2-11
// function calculateEngravingPrice(message, pricePerWord) {
//   const wordsArray = message.split(' ');
//   const total = wordsArray.length * pricePerWord;
//   return total;
// }
// console.log(calculateEngravingPrice('JavaScript is in my blood', 10));
// console.log(calculateEngravingPrice('JavaScript is in my blood', 20));
// console.log(calculateEngravingPrice('Web-development is creative work', 40));
// console.log(calculateEngravingPrice('Web-development is creative work', 20));

// // Task 2 - 13
// function slugify(title) {
//   // Change code below this line
//   const normalizeString = title.toLowerCase();
//   console.log(normalizeString);
//   const makeTitleSplite = normalizeString.split(' ');
//   const makeTitleJoin = makeTitleSplite.join('-');

//   return makeTitleJoin;
//   // Change code above this line
// }
// console.log(slugify('Arrays for begginers'));

// // Task 2 - 16
// function makeArray(firstArray, secondArray, maxLength) {
//   const totalArray = firstArray.concat(secondArray);
//   let result;

//   if (totalArray.length >= maxLength) {
//     result = totalArray.slice(0, maxLength);
//     return result;
//   }

//   result = totalArray;

//   return result;
// }

// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3));
// console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4));
// console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3));
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2));
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4));
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0));
// console.log(makeArray([1, 2, 3, 4, 5], [1, 2, 3, 4, 5], 10));
// console.log(makeArray([1, 2, 3, 4, 5], [1, 2, 3, 4, 5], 5));
// console.log(makeArray([1, 2, 3, 4, 5], [1, 2, 3, 4, 5], 6));

// // Task 2 - 18
// function calculateTotal(number) {
//   let result = 0;

//   for (let i = 1; i <= number; i += 1) {
//     result += i;
//   }

//   return result;
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));
// console.log(calculateTotal(5000));

// // Task 2 - 20
// function calculateTotalPrice(order) {
//   let total = 0;

//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// Task 2 - 21 Найти в массиве самое большое по длине слово
// const string = 'The quick brown fox jumped over the lazy dog';
// const words = string.split(' ');
// let biggestNumber = '';
// console.log(words);

// Вариант № 1
// for (let i = 0; i < words.length; i += 1) {
//   console.log(words[i].length);
//   if (words[i].length > biggestNumber.length) {
//     biggestNumber = words[i];
//   }
// }

// // Вариант № 2
// for (const word of words) {
//   console.log(word.length);
//   if (word.length > biggestNumber.length) {
//     biggestNumber = word;
//   }
// }

// console.log(biggestNumber);

// // Task 2 - 22
// const planets = ['Earth', 'Mars', 'Venus'];
// planets.push('Jupiter');
// planets.push('Saturn', 'Uranus', 'Neptune');
// console.log(planets);

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   // Change code above this line
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));
// console.log(createArrayOfNumbers(3, 12));

// // Task 2 - 23. Фильтрация массива чисел.
// /*
// Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).
// */
// function filterArray(numbers, value) {
//   const result = [];

//   for (const number of numbers) {
//     // console.log(number);
//     if (number > value) {
//       // console.log(number);
//       result.push(number);
//     }
//   }

//   return result;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

//  Example. Фильтрация чисел 2.0
// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }

// // Task 2 - 25
// function getCommonElements(array1, array2) {
//   let result = [];

//   for (const number of array1) {
//     if (array2.includes(number)) {
//       result.push(number);
//     }
//   }

//   return result;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
// console.log();

// // Task 2 - 26
// function getEvenNumbers(start, end) {
//   const result = [];

//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       result.push(i);
//     }
//   }

//   return result;
// }

// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));
// console.log(getEvenNumbers(12, 28));

// Task 2 - 30
// function fn() {
//   for (let i = 0; i <= 5; i += 1) {
//     console.log(i);

//     if (i === 3) {
//       console.log('Нашли число 3, делаем возврат, прерывая цикл и функцию');
//       return i;
//     }
//   }

//   // Этот console.log не выполнится
//   console.log('Лог после цикла в теле функции');
// }

// const result = fn();
// console.log('Лог после выхода из функции');
// console.log(`Результат выполнения функции ${result}`);

// // Task решение задачи
// function includes(array, value) {
//   let result = false;
//   for (const val of array) {
//     if (val === value) {
//       return (result = true);
//     }
//   }
//   return result;
// }

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter'));
// console.log(includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Uranus'));
// console.log(includes(['apple', 'plum', 'pear', 'orange'], 'plum'));
// console.log(includes(['apple', 'plum', 'pear', 'orange'], 'kiwi'));
//
// function multiply(x, y, z) {
//   console.log(`Вызов этого сообщения ${x * y * z}`);
// }
// multiply(2, 2, 2);
// multiply();

// function multiply(x, y, z) {
//   console.log('Код до return выполняется как обычно');

//   // Возвращаем результат выражения умножения
//   return x * y * z;

//   console.log('Этот лог никогда не выполнится, он стоит после return');
// }

// // Результат работы функции можно сохранить в переменную
// let result = multiply(2, 3, 3);
// console.log(result); // 30

// result = multiply(4, 8, 12);
// console.log(result); // 384

// result = multiply(17, 6, 25);
// console.log(result); // 2550

// Learning function
// div();

// const add = function () {
//   console.log('Вызов функции add');
// };

// function div() {
//   console.log('Вызов функции div');
// }

// add();
// add();

// const add = function (a = 5, b = 3) {
//   console.log('Вызов функциии add');
//   console.log(a);
//   console.log(b);

//   const c = a + b;
//   console.log('a + b =', c);

//   return c;
// };

// const r1 = add(1, 2);
// // add();
// // add(1);

// console.log(r1);

// Example
// const add = function (x, y) {
//   console.log(`x = ${x}`);
//   console.log(`y = ${y}`);
//   return x + y;
// };

// const result = add(1, 2);
// console.log(result);

// Example base function
// const multiply = function (x, y) {
//   return x * y;
// };
// const result1 = multiply(2, 5);
// console.log(result1);

// example
// const fn = function () {
//   console.log(1);
//   console.log(2);
//   return;

//   console.log(3);
// };

// console.log(fn());

// // Example stack tracer
// const fnA = function () {
//   console.log('Вызов функции fnA');
//   fnB();
// };

// const fnB = function () {
//   console.log('Вызов функции fnB');
//   fnC();
// };

// const fnC = function () {
//   console.log('Вызов функции fnC');
//   console.log(value);
// };

// fnA();
// // fnB();
// // fnC();

// // Example function
// const logins = ['poly', 'mango', 'list', 'red'];

// const findLogin = function (allLogins, loginToFind) {
//   return allLogins.includes(loginToFind) ? `Login find - ${loginToFind}` : `Login unfind - ${loginToFind}`;
// };

// console.log(findLogin(logins, 'poly'));
// console.log(findLogin(logins, 'poly1'));
// console.log(findLogin(logins, 'poly2'));
// console.log(findLogin(logins, 'red'));

// // Example old school arguments to array.
// const fn = function () {
//   console.log(arguments);

//   const args = Array.from(arguments);

//   console.log(args);
// };

// new method
// const fn = function (...args) {
//   console.log(args);
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3.4, 5, 6, 7);

// // Example
// const fn = function (a, b, c, ...args) {
//   console.log(a, b, c);
//   console.log(args);
// };

// fn('Hello', 1, 2, 3);
// fn('Aloha', 1, 2, 3, 4, 5);
// fn('Hi', 1, 2, 3.4, 5, 6, 7);

// // Example add rest
// const add = function (...args) {
//   console.log(args);

//   let total = 0;

//   for (const arg of args) {
//     // console.log(arg);
//     total += arg;
//   }

//   return total;
// };

// console.log(add(1, 2, 3, 4));
// console.log(add(1, 2, 3, 4, 5, 6, 7));
// console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9));

// // Example filterNumbers Выбираем цифры из массива
// const filterNumbers = function (array, ...args) {
//   console.log('array: ', array);
//   console.log('args: ', args);

//   for (const element of array) {
//     if (args.includes(element)) {
//       console.log(`${element} Эта цифра есть`);
//     }
//   }
// };

// console.log(filterNumbers([1, 2, 3, 4, 5], 4, 56, 3, 2));
// console.log(filterNumbers([1, 2, 3, 4, 5, 21, 21], 3, 56, 5, 2));
// console.log(filterNumbers([1, 2, 3, 4, 5, 21, 21], 3, 56, 5, 2, 1, 43));
