//  object

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

//! -----------
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

// Exapmle
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

//Example this
// const bookShelf = {
//   books: ['The Last Kingdom'],
//   getBooks() {
//     console.log(this);
//   },
// };

// bookShelf.getBooks();

//Example
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

// Example for ... in
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

// // Example hasOwnProperty()
// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = 'Манго';

// console.log(dog);
// console.log(dog.name);
// console.log(dog.legs);

// // Возвращает true для всех
// console.log('name' in dog); // true
// console.log('legs' in dog); // true

// // Возвращает true только для собственных свойств
// console.log(dog.hasOwnProperty('name')); // true
// console.log(dog.hasOwnProperty('legs')); // false

// Example hasOwnProperty for ... in
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

// // Addition object values us Object.values() for ... of
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

// Exapmle Object.entries()
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

//! Example Массив объектов
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
