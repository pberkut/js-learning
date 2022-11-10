//! Module 3 - 1  object

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Corwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };

// console.log(book);
// console.table(book);

// const bookTitle = book.title;
// console.log(bookTitle);

// const bookGenres = book.genres;
// console.log(bookGenres);

// const bookPrice = book.price;
// console.log(bookPrice);

// const bookTitle = book['title'];
// console.log(bookTitle);

// const bookGenres = book['genres'];
// console.log(bookGenres);

// const propKey = 'author';
// const bookAuthor = book[propKey];
// console.log(bookAuthor);

// book.rating = 9;
// book.isPublic = false;
// book.genres.push('драма');

// console.log(book.rating);
// console.log(book.isPublic);
// console.log(book.genres);

// book.pageCount = 836;
// book.originalLanguage = 'en';
// book.translations = ['ua', 'ru'];

// console.log(book.pageCount);
// console.log(book.originalLanguage);
// console.log(book.translations);

//* -----------
// const user = {
//   name: 'Jacques Glike',
//   tag: 'jgluke',
//   location: {
//     country: 'Jamaica',
//     city: 'Ocho Rios',
//   },
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
//   hobbies: ['swiming', 'music', 'sci-fi'],
// };

// const location = user.location;
// console.log(location);

// const country = user.location.country;
// console.log(country);

// const hobbies = user.hobbies;
// console.log(hobbies);

// const firstHobby = user.hobbies[0];
// console.log(firstHobby);

// const numberOfHobbies = user.hobbies.length;
// console.log(numberOfHobbies);

// console.log(user);
// console.table(user);
//  End ----------------

//* Exapmle
// const name = 'Генри Сибола';
// const age = 25;

// // const user = {
// //   name: name,
// //   age: age,
// // };

// const user = {
//   name,
//   age,
// };

// console.log(user.name);
// console.log(user.age);

// Example old syntax
// const propName = 'name';
// const user = {
//   age: 25,
// };

// user[propName] = 'Генри Сибола';
// console.log(user.name);

// Example new syntax
// const propName = 'name';
// const user = {
//   age: 25,
//   [propName]: 'Генри Сибола',
// };

// console.log(user.name);

// Example object function
// const bookShelf = {
//   books: ['The Last Kingdom', 'Dream Guardian'],
//   getBooks() {
//     console.log('Этот метод будет возвращать все книги - свойство books');
//   },
//   addBook(bookName) {
//     console.log('Этот метод будет добавлять новую книгу в свойство books');
//   },
// };

// bookShelf.getBooks();
// bookShelf.addBook('Новая книга');

//*Example this
// const bookShelf = {
//   books: ['The Last Kingdom'],
//   getBooks() {
//     console.log(this);
//   },
// };

// bookShelf.getBooks();

//*Example
// const bookShelf = {
//   books: ['The Last Kingdom'],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks());
// bookShelf.addBook('The Mist');
// bookShelf.addBook('Dream Guardian');
// console.log(bookShelf.getBooks());
// bookShelf.removeBook('The Mist');
// console.log(bookShelf.getBooks());

//* Example for ... in
// const book = {
//   title: 'The last Kingdom',
//   author: 'Bernard Corwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };

// for (const key in book) {
//   console.log(key);
//   console.log(book[key]);
// }

//* Example hasOwnProperty()
// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = 'Манго';

// console.log(dog);
// console.log(dog.name);
// console.log(dog.legs);

//* Возвращает true для всех
// console.log('name' in dog); // true
// console.log('legs' in dog); // true

//* Возвращает true только для собственных свойств
// console.log(dog.hasOwnProperty('name')); // true
// console.log(dog.hasOwnProperty('legs')); // false

//* Example hasOwnProperty for ... in
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Corwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };

// for (const key in book) {
//   if (book.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(book[key]);
//   }
// }

// const keys = Object.keys(book);
// console.log(keys);

// const values = Object.values(book);
// console.log(values);

// for (const key of keys) {
//   console.log(key);
//   console.log(book[key]);
// }

//* Addition object values us Object.values() for ... of
// const goods = {
//   apple: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };

// const values = Object.values(goods);
// console.log(values);

// let total = 0;

// for (const value of values) {
//   total += value;
// }

// console.log(total);

//* Exapmle Object.entries()
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   rating: 8.38,
// };

// const keys = Object.keys(book);
// console.log(keys);

// const values = Object.values(book);
// console.log(values);

// const entries = Object.entries(book);
// console.log(entries);

//* Example Массив объектов
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     rating: 8.51,
//   },
//   {
//     title: 'Сон смешного человека',
//     author: 'Федор Достоевский',
//     rating: 7.75,
//   },
// ];

// for (const book of books) {
//   console.log(book);
//   console.log(book.title);
//   console.log(book.author);
//   console.log(book.rating);
// }

// console.log(books[1]);

// const bookNames = [];

// for (const book of books) {
//   bookNames.push(book.title);
// }

// console.log(bookNames);

// let totalRating = 0;

// for (const book of books) {
//   totalRating += book.rating;
// }

// const averageRating = Number((totalRating / books.length).toFixed(1));
// console.log(averageRating);

//* Task 3 - 7
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location.country = 'Jamaica';
// apartment.location.city = 'Kingston';

// console.table(apartment);

//* Task 3 - 10
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);

//* Task 3 - 11
// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Spacious apartment in the city center';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
// }

// console.log(apartment);
// console.log(keys);
// console.log(values);
// console.log(apartment.service); // Не собственное свойство

//* Task 3 -12
// function countProps(object) {
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
//   return propCount;
// }

// console.log(countProps({ a: 1, b: 2, c: 3 }));
// console.log(countProps({ name: 'Mango', age: 2 }));

//* Task 3 - 13
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   values.push(apartment[key]);
// }

// console.log(values);

// * Task 3 - 17
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];
// console.table(colors);

// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);
// console.log(colors[3]);

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// * Task 3 - 18
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }

//   return null;
// }

// console.log(getProductPrice('Droid'));
// console.log(getProductPrice('Droid'));
// console.log(getProductPrice('Radar'));
// console.log(getProductPrice('Radar'));
// console.log(getProductPrice('Apple'));

// * Task 3 - 19
/*
1. Создаём пустой массив для значений объектов propertyValues.
2. Перебиарем массив объектов циклом for of.
3. Создаем переменную массива ключей объекта Object.keys().
4. Создаём условие если в массиве ключей есть совпадение (include()) с нашим именем propName делаем push в пустой массив.
5. Проходим весь цикл.
6. Делаем return после цикла перебора.
*/
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const propertyValues = [];
//   for (const product of products) {
//     const keys = Object.keys(product);

//     if (keys.includes(propName)) {
//       propertyValues.push(product[propName]);
//     }
//   }
//   return propertyValues;
//   // Change code above this line
// }

// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('price'));
// console.log(getAllPropValues('quantity'));

//* Task 3 - 20
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let totalPrice = 0;

//   for (const product of products) {
//     const valuesProp = Object.values(product);

//     if (valuesProp.includes(productName)) {
//       totalPrice = product.price * product.quantity;

//       return totalPrice;
//     }
//   }
//   return 0;
// }

// console.log(calculateTotalPrice('Blaster'));
// console.log(calculateTotalPrice('Radar'));
// console.log(calculateTotalPrice('Grip'));
// console.log(calculateTotalPrice('Scanner'));
