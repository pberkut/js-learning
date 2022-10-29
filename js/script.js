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
