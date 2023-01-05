import throttle from 'lodash.throttle';

import markupPokemonTpl from './templates/pokemon-card.hbs';

const container = document.querySelector('.js-container');
const searchForm = document.querySelector('.form');
const searchInput = document.querySelector('[name="query"]');

searchInput.addEventListener('input', throttle(onSearch, 300));

function onSearch(e) {
  e.preventDefault();
  const input = e.target;
  const searchQuery = input.value;
  console.dir(searchQuery);

  fetch(`https://pokeapi.co/api/v2/pokemon/${searchQuery}`)
    .then(resp => resp.json())
    .then(pokemon => {
      const markup = markupPokemonTpl(pokemon);
      container.innerHTML = markup;
    })
    .catch(err => console.error(err));
}
