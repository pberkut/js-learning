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
function greet(clientName) {
  return `${clientName}, добро пожаловать в «${this.service}».`;
}

const steam = {
  service: 'Steam',
};
const steamGreeter = greet.bind(steam);
steamGreeter('Манго'); // "Манго, добро пожаловать в «Steam»."

const gmail = {
  service: 'Gmail',
};
const gmailGreeter = greet.bind(gmail);
gmailGreeter('Поли'); // "Поли, добро пожаловать в «Gmail»."
