// Делегирование событий
// Общий слушатель\
// фильтр цепи клика

const container = document.querySelector('.js-container');

container.addEventListener('click', onClick);

function onClick(evt) {
  // pattern guard clauses
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }
  //   console.log('evt: ', evt);
  console.log('evt.target: ', evt.target);
  console.log('evt.currentTarget: ', evt.currentTarget);
  console.log(evt.target.nodeName);
}

// Код добавления кнопок

const addBtn = document.querySelector('.js-add-btn');
let labelCounter = 6;

addBtn.addEventListener('click', onAddBtnClick);

function onAddBtnClick() {
  const btn = document.createElement('button');
  btn.textContent = `Кнопка ${labelCounter}`;
  btn.type = 'button';

  container.appendChild(btn);
  labelCounter += 1;
}
