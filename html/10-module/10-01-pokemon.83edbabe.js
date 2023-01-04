const e=document.querySelector(".js-container");fetch("https://pokeapi.co/api/v2/pokemon/2").then((e=>e.json())).then((n=>{const o=markupPokemonTpl(n);e.innerHTML=o}));
//# sourceMappingURL=10-01-pokemon.83edbabe.js.map
