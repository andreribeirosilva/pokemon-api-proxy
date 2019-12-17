const { RESTDataSource } = require("apollo-datasource-rest");
const { normalizePokemon } = require("./utils");

const BASE_URL = "https://pokeapi.co/api/v2/";

class PokemonAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = BASE_URL;
  }

  async getPokemons({ pageSize = 20, page = 1 }) {
    const offset = pageSize * (page - 1);

    const response = await this.get(
      `pokemon?offset=${offset}&limit=${pageSize}`
    );
    const { results, ...remainigData } = response;

    const pokemons = Array.isArray(results)
      ? Promise.all(results.map(pokemon => this.getPokemon(pokemon.name)))
      : [];

    return {
      pokemons,
      ...remainigData
    };
  }

  async getPokemon(id) {
    const pokemon = await this.get(`pokemon/${id}`);

    return normalizePokemon(pokemon);
  }
}

module.exports = PokemonAPI;
