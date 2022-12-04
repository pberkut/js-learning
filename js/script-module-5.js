// * Example fn.call()
// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
//   username: 'Манго',
// };
// const poly = {
//   username: 'Поли',
// };

// greetGuest.call(mango, 'Добро пожаловать'); // Добро пожаловать, Манго.
// greetGuest.call(poly, 'С приездом'); // С приездом, Поли.

// * Exapmle fn.apply()
// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
//   username: 'Манго',
// };
// const poly = {
//   username: 'Поли',
// };

// greetGuest.apply(mango, ['Добро пожаловать']); // Добро пожаловать, Манго.
// greetGuest.apply(poly, ['С приездом']); // С приездом, Поли.

// * Example fn.bind()
// function greet(clientName) {
//   return `${clientName}, добро пожаловать в «${this.service}».`;
// }

// const steam = {
//   service: 'Steam',
// };
// const steamGreeter = greet.bind(steam);
// steamGreeter('Манго'); // "Манго, добро пожаловать в «Steam»."

// const gmail = {
//   service: 'Gmail',
// };
// const gmailGreeter = greet.bind(gmail);
// gmailGreeter('Поли'); // "Поли, добро пожаловать в «Gmail»."

// * Exapmle
// const customer = {
//   firstName: 'Jacob',
//   lastName: 'Mercer',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() это вызов метода getFullName без объекта
//   console.log(`Обрабатываем заявку от ${callback()}.`);
// }
// // ❌ Было
// // makeMessage(customer.getFullName); // Будет ошибка при вызове функции

// // ✅ Стало
// makeMessage(customer.getFullName.bind(customer)); // Обрабатываем заявку от Jacob Mercer.

// * Task 5 - 1
// const pizzaPalace = {
//   pizzas: ['Supercheese', 'Smoked', 'Four meats'],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };

// console.log(pizzaPalace.checkPizza('Smoked'));
// console.log(pizzaPalace.order('Smoked'));
// console.log(pizzaPalace.checkPizza('Rage'));
// console.log(pizzaPalace.order('Rage'));

// * Task 5 - 2
// const customer = {
//   username: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['Burger', 'Pizza', 'Salad'],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, 'Steak');
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// * Task 5 - 3
// const historyService = {
//   orders: [
//     { email: 'jacob@hotmail.com', dish: 'Burrito' },
//     { email: 'solomon@topmail.net', dish: 'Burger' },
//     { email: 'artemis@coldmail.net', dish: 'Pizza' },
//     { email: 'solomon@topmail.net', dish: 'Apple pie' },
//     { email: 'jacob@hotmail.com', dish: 'Taco' },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders.map(order => `email: ${order.email} dish: ${order.dish}`).join(' - ');
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };

// console.log(historyService.getOrdersLog());
// console.log(historyService.getEmails());
// console.log(historyService.getOrdersByEmail('jacob@hotmail.com'));

// * Task 5 - 4

// Example
// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = 'Mango';

// console.log(dog); // { name: 'Mango', __proto__: animal }
// console.log(animal.isPrototypeOf(dog)); // true

// console.log(dog.hasOwnProperty('name')); // true
// console.log(dog.name); // 'Mango'

// console.log(dog.hasOwnProperty('legs')); // false
// console.log(dog.legs); // 4

// * Task 5 - 5
// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish',
// };
// // Change code below this line

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// // Change code above this line

// console.log(child);

// * Example

// const obj = {};

// const Car = function ({ brand, model, price } = {}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };

// Car.description = 'Класс описывающий машину';

// Car.logInfo = function (carObj) {
//   console.log('Car.logInfo -> carObj', carObj);
// };

// const car = new Car({
//   brand: 'BMW',
//   model: 'X5',
//   price: 1000,
// });

// // console.dir(Car);
// // console.log(obj);

// class Car1 {
//   static description = 'Клас описывающий машину';

//   static logInfo(carObj) {
//     console.log('Car.logInfo -> carObj', carObj);
//   }

//   #test = 'test';

//   constructor({ brand, model, price } = {}) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }

//   updateModel(newModel) {
//     this.model = newModel;
//   }
// }

// // console.dir(Car1);
// // console.log(Car1.description);

// const carInstance = new Car1({
//   brand: 'Mercedes',
//   model: 'S200',
//   price: '20000',
// });

// console.log(carInstance);

// * Task 5 - 7
// class Car {
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }

// const car = new Car('Audi', '200', 2000);

// console.log(car);

// * Task 5 - 8
// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }

// const car = new Car({ brand: 'Audi', model: '200', price: 2000 });

// console.log(car);

// * Task 5 - 9
// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     return (this.price = newPrice);
//   }
// }

// const car = new Car({ brand: 'Audi', model: '200', price: 2000 });

// console.log(car);
// console.log(car.getPrice());
// console.log(car.changePrice(100));

// * Task 5 - 10
// class Storage {
//   constructor(items = []) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(newItem) {
//     this.items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     this.items = this.items.filter(item => item !== itemToRemove);
//   }
// }

// // Change code above this line
// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// * Task 5 - 11
// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   }

//   getValue() {
//     return this.value;
//   }

//   padEnd(str) {
//     this.value = `${this.value + str}`;
//   }

//   padStart(str) {
//     this.value = `${str + this.value}`;
//   }

//   padBoth(str) {
//     this.value = `${str + this.value + str}`;
//   }
// }

// // Change code above this line
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="

// console.log(builder);

// * Task 5 - 12
// class Car {
//   // Change code below this line
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
//   // Change code above this line
// }

// Example
// class User {
//   // Необязательное объявление публичных свойств
//   name;
//   // Обязательное объявление приватных свойств
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   email: 'mango@mail.com',
// });
// mango.changeEmail('mango@supermail.com');
// console.log(mango.getEmail()); // mango@supermail.com
// // console.log(mango.#email); // Будет ошибка, это приватное свойство

// * Task 5 - 13
// class Storage {
//   // Change code below this line
//   #items;

//   constructor(items) {
//     this.#items = items;
//   }

//   getItems() {
//     return this.#items;
//   }

//   addItem(newItem) {
//     this.#items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     this.#items = this.#items.filter(item => item !== itemToRemove);
//   }
// }

// // Change code above this line
// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

// // * Task 5 - 14
// class StringBuilder {
//   // Change code below this line
//   #value;

//   constructor(initialValue) {
//     this.#value = initialValue;
//   }

//   getValue() {
//     return this.#value;
//   }

//   padEnd(str) {
//     this.#value += str;
//   }

//   padStart(str) {
//     this.#value = str + this.#value;
//   }

//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }

// // Change code above this line
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="

// * Task 5 - 15
// class Car {
//   // Change code below this line
//   #brand;
//   #model;
//   #price;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
//   // Change code above this line
// }

// * Task 5 - 16
// class Car {
//   // Change code below this line
//   static MAX_PRICE = 50_000;

//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.MAX_PRICE) {
//       this.#price = newPrice;
//     }
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35_000 });
// console.log(audi.price); // 35000

// audi.price = 49_000;
// console.log(audi.price); // 49000

// audi.price = 51_000;
// console.log(audi.price); // 49000

//  * Task 5 - 17
// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line

//   static checkPrice(price) {
//     return price > Car.#MAX_PRICE
//       ? 'Error! Price exceeds the maximum'
//       : 'Success! Price is within acceptable limits';
//   }

//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// * Task 5 - 18
// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };
// }
// // Change code below this line

// console.log(Admin.AccessLevel.BASIC);
// console.log(Admin.AccessLevel.SUPERUSER);

// * Task 5 - 19
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line
//   constructor({ email, accessLevel } = {}) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };

//   // Change code above this line
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// * Task 5 - 20
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   blacklistedEmails = [];

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     return this.blacklistedEmails.some(element => element === email);
//     // Change code above this line
//   }
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted('mango@mail.com')); // false
// console.log(mango.isBlacklisted('poly@mail.com')); // true

// * Task
// Write the code which verify user rights.
// Step 1. Check login
// 	Ask user for a login // use prompt()
// 	If the input is an empty line or Esc – show "Canceled." // for showing - use alert()
// 	If the input length less than 4 symbols - show "I don't know any users having name length less than 4 symbols".
// 	If it's another string – then show "I don't know you".
// 	If the visitor enters "User" or "Admin", then prompt for a password.
// Step 2. Check password:
// 	For an empty string or cancelled input, show "Canceled."
// 	For login "User" correct password is "UserPass", for "Admin" correct password is  "RootPass".
// In other case, show "Wrong password".
// Step 3. Greets the user appropriately:
// 	If the current time in hours is more then 5.00 and less then 20:
// 	For "User" show "Good day, dear User!"
// 	For "Admin" show "Good day, dear Admin!"
// 	In other way:
// 	For "User" show "Good evening, dear User!"
// 	For "Admin" show "Good evening, dear Admin!"

// P.S.: щоб отримати інформавцію про поточний час для реалізації п. 3 завдання, створіть змінну: const hours = new Date().getHours()

// * Example
// // Змініть код лише під цим рядком
// var a = 5;
// var b = 10;
// var c = 'I am a';
// // Змініть код лише над цим рядком

// a = a + 1;
// b = b + 5;
// c = c + ' String!';

// console.log(c);
// console.log(a);
// console.log(b);

// * Example
// var camper = 'James';
// var camper = 'David';
// console.log(camper);

// let camper = 'James';
// let camper = 'David';

// const myDecimal = 11 % 3;
// console.log(myDecimal);

// const sampleStr = 'Alan said, "Peter is learning JavaScript".';

// console.log(sampleStr);

// const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
// console.log(myStr);

// const str = 'Это новый абзац \nНовый абзац.\n\n\nпокаать косую линию \\ \n " \n \' \n \tабзац \t';
// const str1 = 'Возвр\fат каретки \rВозврат каретки \b \b';
// const myStr = 'FirstLine\n\t\\SecondLine\nThirdLine';
// console.log(str);
// console.log(str1);
// console.log(myStr);

// const str = 'Hello World!';
// const lastCharactare = str[str.length - 1];

// console.log(lastCharactare);

// const arr = [
//   [1, 32, 67],
//   [90, 23, [23, 23, 11]],
//   [[18, 5, 10, 6], 23, [23, 2, 7]],
// ];

// console.log(arr[2][0][1]);

// Налаштування
// const myArray = [
//   ['John', 23],
//   ['cat', 2],
// ];

// // Змініть код лише під цим рядком
// const removedFromMyArray = myArray.pop();

// const myArray = [
//   ['John', 23],
//   ['dog', 3],
// ];

// // Змініть код лише під цим рядком
// const removedFromMyArray = myArray.shift();
// removedFromMyArray.unshift('add');

// console.log(removedFromMyArray);

// function reusableFunction() {
//   console.log('Hi Word');
// }

// reusableFunction();

//  * Example
// Декларуйте змінну myGlobal під цим рядком
// const myGlobal = 10;
// let oopsGlobal;

// function fun1() {
//   // Призначте 5 до oopsGlobal тут
//   oopsGlobal = 5;
// }

// // Змініть код лише над цим рядком

// function fun2() {
//   var output = '';
//   if (typeof myGlobal != 'undefined') {
//     output += 'myGlobal: ' + myGlobal;
//   }
//   if (typeof oopsGlobal != 'undefined') {
//     output += ' oopsGlobal: ' + oopsGlobal;
//   }
//   console.log(output);
// }

// fun2();

// * Example
// function nextInLine(arr, item) {
//   // Змініть код лише під цим рядком
//   arr.push(item);
//   arr.shift();
//   return item;
//   // Змініть код лише над цим рядком
// }

// // Налаштування
// let testArr = [1, 2, 3, 4, 5];

// // Відобразити код
// console.log('Before: ' + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 6));
// console.log('After: ' + JSON.stringify(testArr));
// console.log('232');

// * Example

// Example 3 - User
// Напиши клас User який створює об'єкт із властивостями login та email. Оголоси приватні властивості #login та #email, доступ до яких зроби через гетер та сетер login та email.

// class User {
//   #login;
//   #email;

//   constructor({ login, email } = {}) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   login: 'Mango',
//   email: 'mango@dog.woof',
// });

// console.log(mango.login); // Mango
// mango.login = 'Mangodoge';
// console.log(mango.login); // Mangodoge

// const poly = new User({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie

// Example 4 - Нотатки
// Напиши клас Notes який керує колекцією нотаток у властивості items. Замітка це об'єкт із властивостями text та priority. Додай класу статичну властивість Priority, у якому зберігатиметься об'єкт із пріоритетами.

// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }
// Додай методи addNote(note), removeNote(text) та updatePriority(text, newPriority).

// class Notes {
//   static Priority = {
//     LOW: 'low',
//     NORMAL: 'normal',
//     HIGH: 'high',
//   };

//   constructor(note) {
//     this.items = note;
//   }

//   addNote(note) {
//     this.items.push(note);
//   }

//   removeNote(text) {
//     this.items.forEach(element => {
//       if (element.text.includes(text)) {
//         this.items.splice(element, 1);
//       }
//     });
//   }

//   updateNote(text, newPriority) {
//     // this.items.find(item => item.text === text);
//     this.items.forEach(item => {
//       if (item.text.includes(text)) {
//         item.priority = newPriority;
//       }
//     });
//   }
// }

// const myNotes = new Notes([]);

// // console.log(myNotes);

// myNotes.addNote({ text: 'Моя перша замітка', priority: Notes.Priority.LOW });
// console.log('addNote 1: ', myNotes.items);

// myNotes.addNote({
//   text: 'Моя друга замітка',
//   priority: Notes.Priority.NORMAL,
// });
// console.log('addNote 2:', myNotes.items);

// myNotes.removeNote('Моя перша замітка');
// console.log('removeNote', myNotes.items);

// myNotes.updateNote('Моя друга замітка', Notes.Priority.HIGH);
// console.log('updateNote', myNotes.items);

// Example 5 - Toggle
// Напишіть клас Toggle який приймає об'єкт налаштувань {isOpen: boolean} і оголошує одну властивість on - стан вкл/викл (true/false). За замовчуванням значення властивості on повинно бути false.

const firstToggle = new Toggle({ isOpen: true });
console.group('firstToggle');
console.log(firstToggle.on);
firstToggle.toggle();
console.log(firstToggle.on);
console.groupEnd('firstToggle');

const secondToggle = new Toggle();
console.group('secondToggle');
console.log(secondToggle.on);
secondToggle.toggle();
console.log(secondToggle.on);
console.groupEnd('secondToggle');

console.log(window);
