// * Разобраться
const items = {
  string: 'Simple',
  number: 100,
  isTurn: true,
  array: [],
};

console.log(items, items.isTurn);

let { string, number, isTurn, array } = items;

items.string = 'Hard!';
items.number = 200;
items.isTurn = false;

string = 300;

console.log(items, string, number);
