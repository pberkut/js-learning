import markupPokemonTpl from './template/pokemon.hbs';

const container = document.querySelector('.js-container');

fetch('https://pokeapi.co/api/v2/pokemon/2')
  .then(resp => resp.json())
  .then(pokemon => {
    const markup = markupPokemonTpl(pokemon);
    container.innerHTML = markup;
  });
