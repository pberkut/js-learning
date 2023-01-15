const BASE_URL = 'https://pokeapi.co/api/v2';
const options = {
  method: 'GET',
};

export default class PokemonApiService {
  constructor() {
    this.offset = 0;
  }

  fetchPokemons() {
    const endPoint = 'pokemon';
    const id = '1';
    // const offset = 20;
    const url = `${BASE_URL}/${endPoint}`;

    return fetch(`${url}?limit=20&offset=${this.offset}`, options).then(resp => {
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }

      return resp.json();
    });
  }

  increment(amount) {
    this.offset += amount;
  }

  get offsetNum() {
    return this.offset;
  }

  set offsetNum(newAmount) {
    this.offset = newAmount;
  }
}
