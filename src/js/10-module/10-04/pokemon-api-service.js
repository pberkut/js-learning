import Notiflix from 'notiflix';

const BASE_URL = 'https://pokeapi.co/api/v2';
const options = {
  method: 'GET',
};

export default class PokemonApiService {
  constructor() {}

  fetchPokemons() {
    const endPoint = 'pokemon';
    const id = '1';
    const pagination = 20;
    const url = `${BASE_URL}/${endPoint}`;

    return fetch(`${url}?limit=${pagination}`, options)
      .then(resp => {
        if (!resp.ok) {
          throw new Error(resp.statusText);
        }

        return resp.json();
      })
      .catch(err => {
        Notiflix.Notify.failure(err);
      });
  }
}
