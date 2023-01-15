import Notiflix from 'notiflix';
import markupPokemonCardTmp from './templates/pokemon-card.hbs';
import PokemonApiService from './pokemon-api-service';

const containerRef = document.querySelector('.js-container');
const guard = document.querySelector('.js-guard');
const options = {
  root: null,
  rootMargin: '500px',
  threshold: 0,
};

let observer = new IntersectionObserver(onLoad, options);

const pokemonApiService = new PokemonApiService();

start();

function start() {
  pokemonApiService
    .fetchPokemons()
    .then(getPokemons)
    .catch(err => {
      Notiflix.Notify.failure(err);
    });
}

function onLoad(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('Observer');
      // pokemonApiService.offsetNum += 5;
      pokemonApiService.increment(5);
      pokemonApiService
        .fetchPokemons()
        .then(getPokemons)
        .catch(err => {
          Notiflix.Notify.failure(err);
        });
    }
  });
}

function getPokemons(pokemons) {
  for (const pokemon of pokemons.results) {
    fetch(pokemon.url)
      .then(resp => {
        if (!resp.ok) {
          throw new Error(resp.statusText);
        }
        return resp.json();
      })
      .then(pokemon => {
        appendPokemonMarkup(pokemon);
      })
      .catch(err => {
        Notiflix.Notify.failure(err);
      });
  }
}

function appendPokemonMarkup(pokemon) {
  containerRef.insertAdjacentHTML('beforeend', markupPokemonCardTmp(pokemon));
  observer.observe(guard);
}
