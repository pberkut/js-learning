import Notiflix from 'notiflix';
import markupPokemonCardTmp from './templates/pokemon-card.hbs';
import { PokeAPI } from './pokemon-api-service';

const containerRef = document.querySelector('.js-container');
const guard = document.querySelector('.js-guard');
const pokeAPI = new PokeAPI();

const options = {
  root: null,
  rootMargin: '500px',
  threshold: 0,
};

let observer = new IntersectionObserver(onLoad, options);

start();

async function start() {
  await getPokemons();
  // debugger;
}

function onLoad(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      pokeAPI.nextPage();
      getPokemons();
    }
  });
}

async function getPokemons() {
  try {
    const pokemons = await pokeAPI.getPokemons();

    appendPokemonMarkup(pokemons);
  } catch (err) {
    Notiflix.Notify.failure(err);
  }
}

function appendPokemonMarkup(pokemons) {
  containerRef.insertAdjacentHTML('beforeend', markupPokemonCardTmp({ pokemons: pokemons }));
  observer.observe(guard);
}
