import Notiflix from 'notiflix';

const listRef = document.querySelector('.js-list');
const loadBtn = document.querySelector('.js-load');

let page = 1;

loadBtn.addEventListener('click', OnLoadBtn);

lordOfTheRingAPI(page).then(getData).catch(onFetchError);

function OnLoadBtn() {
  page += 1;

  lordOfTheRingAPI(page).then(getData).catch(onFetchError);
}

function lordOfTheRingAPI(page) {
  const BASE_URL = 'https://the-one-api.dev/v2//character';
  const ACCES_TOKEN = 'KGGoU-paQiSjHUQZi5Ok';

  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${ACCES_TOKEN}`,
    },
  };

  return fetch(`${BASE_URL}?limit=100&page=${page}`, options).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });
}

function getData(data) {
  createMarkup(data.docs);
  loadBtn.hidden = false;

  if (data.page === data.pages) {
    loadBtn.disabled = true;
  }
}

function createMarkup(arr) {
  const markup = arr
    .map(
      ({ name, race }) => `<li class="item">
        <h2>${name}</h2>
        <h3>${race}</h3>
        </li>`,
    )
    .join('');

  listRef.insertAdjacentHTML('beforeend', markup);
}

function onFetchError(error) {
  Notiflix.Notify.failure(`${error}`);
}
