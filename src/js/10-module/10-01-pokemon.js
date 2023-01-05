import markupPokemonTpl from './templates/pokemon.hbs';

const container = document.querySelector('.js-container');

fetch('https://pokeapi.co/api/v2/pokemon/5')
  .then(resp => resp.json())
  .then(pokemon => {
    const markup = markupPokemonTpl(pokemon);
    container.innerHTML = markup;
  });
