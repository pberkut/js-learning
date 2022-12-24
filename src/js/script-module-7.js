// Делегирование событий
// Общий слушатель\
// фильтр цепи клика

// const container = document.querySelector('.js-container');

// container.addEventListener('click', onClick);

// function onClick(evt) {
//   // pattern guard clauses
//   if (evt.target.nodeName !== 'BUTTON') {
//     return;
//   }
//   //   console.log('evt: ', evt);
//   console.log('evt.target: ', evt.target);
//   console.log('evt.currentTarget: ', evt.currentTarget);
//   console.log(evt.target.nodeName);
// }

// // Код добавления кнопок

// const addBtn = document.querySelector('.js-add-btn');
// let labelCounter = 6;

// addBtn.addEventListener('click', onAddBtnClick);

// function onAddBtnClick() {
//   const btn = document.createElement('button');
//   btn.textContent = `Кнопка ${labelCounter}`;
//   btn.type = 'button';

//   container.appendChild(btn);
//   labelCounter += 1;
// }

// // * Example Game
// const content = document.querySelector('.content');

// let markup = '';

// for (let i = 1; i <= 9; i += 1) {
//   markup += '<div class="item"></div>';
// }

// content.insertAdjacentHTML('beforeend', markup);

// * Example
// const textRef = document.querySelector('.text');
// const containerRef = document.querySelector('.container');
// let numbersMoves = 0;
// let numbersText1 = 0;

// containerRef.insertAdjacentHTML('beforeend', '<p class="text1"></p>');

// window.addEventListener('mousemove', onMouseMove);

// window.addEventListener('mousemove', _.throttle(onMouseMoveThrottle, 300));

// function onMouseMove(evt) {
//   numbersMoves += 1;

//   textRef.textContent = numbersMoves;
// }

// function onMouseMoveThrottle(evt) {
//   numbersText1 += 1;
//   document.querySelector('.text1').textContent = numbersText1;
// }

// * Example
const tech = [
  { label: 'HTML' },
  { label: 'CSS' },
  { label: 'JavaScript' },
  { label: 'Node.js' },
  { label: 'React' },
  { label: 'Vue' },
  { label: 'Next.js' },
  { label: 'Mobx' },
  { label: 'Redux' },
  { label: 'React Router' },
  { label: 'GraphQl' },
  { label: 'PostgreSQL' },
  { label: 'MongoDB' },
];

/*
 * 1. Рендерим разметку элементов списка
 * 2. Слушаем изменение фильтра
 * 3. Фильтруем данные и рендерим новые элементы
 */

const refs = {
  list: document.querySelector('.js-list'),
  input: document.querySelector('#filter'),
};

refs.input.addEventListener('input', _.debounce(onFilterChange, 300));

const listItemsMarkup = createListItemsMarkup(tech);
populateList(listItemsMarkup);

function createListItemsMarkup(items) {
  return items.map(item => `<li>${item.label}</li>`).join('');
}

function onFilterChange(evt) {
  console.log('INPUT');
  const filter = evt.target.value.toLowerCase();

  const filteredItems = tech.filter(t => t.label.toLowerCase().includes(filter));

  const listItemsMarkup = createListItemsMarkup(filteredItems);
  populateList(listItemsMarkup);
}

function populateList(markup) {
  refs.list.innerHTML = markup;
}
