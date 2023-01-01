// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//   .then(r => r.json())
//   .then(pokemon => {
//     console.log(pokemon);
//   });

// * Example
// console.time('start');
// console.log('%c Привет', 'color: green; font-size: 32px');
// console.timeEnd('start');

// *
// Мікро процеси мають БІЛЬШИЙ пріорітет
// 1. Promise
// 2. Observer

// Макро процеси мають МЕНЬШИЙ пріорітет
// setTimeout
// setInterval
// setImmediate
// requestAnimationFrame

// ! Start code Game Slots
import Notiflix from 'notiflix';

const start = document.querySelector('.js-form');
const container = document.querySelector('.js-container');
const delay = 500;

start.addEventListener('submit', startGame);

function startGame(evt) {
  evt.preventDefault();

  const arrWin = [];
  const arrLose = [];

  const childrenLength = container.children.length;

  const {
    level: { value: level },
    start,
  } = evt.currentTarget.elements;

  start.disabled = true;

  for (let i = 0; i < childrenLength; i += 1) {
    const item = container.children[i];

    item.textContent = '';

    createPromise(Number(level), '✅', '❌', delay * i)
      .then(resp => {
        markField(item, resp);
        arrWin.push(resp);
      })
      .catch(resp => {
        markField(item, resp);
        arrLose.push(resp);
      })
      .finally(() => {
        if (i === childrenLength - 1) {
          start.disabled = false;
        }
        const resultWinner = arrWin.length === childrenLength;
        const resultLose = arrLose.length === childrenLength;

        if (resultWinner) {
          Notiflix.Notify.success('You are WINNER! ');
        }
        if (resultLose) {
          Notiflix.Notify.failure('You are lose!');
        }
      });
  }
}

function markField(item, smile) {
  item.textContent = smile;
}

function createPromise(level, win, lose, delay) {
  const random = Math.random();

  return new Promise((res, rej) => {
    setTimeout(() => {
      if (random > level) {
        res(win);
      } else {
        rej(lose);
      }
    }, delay);
  });
}
