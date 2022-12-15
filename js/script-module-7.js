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

const textRef = document.querySelector('.text');
const containerRef = document.querySelector('.container');
let numbersMoves = 0;
let numbersText1 = 0;

containerRef.insertAdjacentHTML('beforeend', '<p class="text1"></p>');

window.addEventListener('mousemove', onMouseMove);

window.addEventListener('mousemove', _.debounce(onMouseMoveThrottle, 300));

function onMouseMove(evt) {
  numbersMoves += 1;

  textRef.textContent = numbersMoves;
}

function onMouseMoveThrottle(evt) {
  numbersText1 += 1;
  document.querySelector('.text1').textContent = numbersText1;
}
