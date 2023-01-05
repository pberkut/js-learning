import throttle from 'lodash.throttle';
import Notiflix from 'notiflix';
import markupPokemonTpl from './templates/pokemon-card.hbs';
import API from './api-service-pokemon';

const container = document.querySelector('.js-container');
const searchForm = document.querySelector('.form');
const searchInput = document.querySelector('[name="query"]');
window.addEventListener('keydown', onPresskeyEscape);

searchInput.addEventListener('input', throttle(onSearch, 300));

function onSearch(e) {
  e.preventDefault();
  const input = e.target;
  const searchQuery = input.value;

  API.fetchPokemon(searchQuery).then(renderPokemonCard).catch(onFetchError);
}

function renderPokemonCard(pokemon) {
  const markup = markupPokemonTpl(pokemon);
  container.innerHTML = markup;
}

function onFetchError(error) {
  Notiflix.Notify.failure(`Failed Id. Error: ${error}`);
}

function onPresskeyEscape(e) {
  if (e.code === 'Escape') {
    // console.log(e.code);
    searchForm.reset();
  }
}
