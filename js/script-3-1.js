//  object

const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Corwell',
  genres: ['historical prose', 'adventure'],
  isPublic: true,
  rating: 8.38,
};

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

// -----------
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
const bookShelf = {
  books: ['The Last Kingdom', 'Dream Guardian'],
  getBooks() {
    console.log('Этот метод будет возвращать все книги - свойство books');
  },
  addBook(bookName) {
    console.log('Этот метод будет добавлять новую книгу в свойство books');
  },
};

bookShelf.getBooks();
bookShelf.addBook('Новая книга');
