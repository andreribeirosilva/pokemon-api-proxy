const { RESTDataSource } = require("apollo-datasource-rest");
const { normalizePokemon, stripBaseUrl, BASE_URL } = require("./utils");

class PokemonAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = BASE_URL;
  }

  async getDataByURL(url) {
    const response = await this.get(stripBaseUrl(url));

    return response;
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
