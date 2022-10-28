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
