import markupPokemonCardTmp from './templates/pokemon-card.hbs';
import PokemonApiService from './pokemon-api-service';

const containerRef = document.querySelector('.js-container');

const pokemonApiService = new PokemonApiService();

pokemonApiService.fetchPokemons().then(getPokemons);

function getPokemons(pokemons) {
  //   console.log(pokemons);

  for (const pokemon of pokemons.results) {
    fetch(pokemon.url)
      .then(resp => resp.json())
      .then(pokemon => {
        console.log(pokemon);
        appendPokemonMarkup(pokemon);
      });
  }
}

function appendPokemonMarkup(pokemon) {
  containerRef.insertAdjacentHTML('beforeend', markupPokemonCardTmp(pokemon));
}
