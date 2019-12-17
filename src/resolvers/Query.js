const Query = {
  pokemons: async (_, args, { dataSources }) => {
    const pokemons = await dataSources.pokemonAPI.getPokemons(args);

    return pokemons;
  },
  pokemon: async (_, { id }, { dataSources }) => {
    const pokemons = await dataSources.pokemonAPI.getPokemon(id);

    return pokemons;
  }
};

module.exports = Query;
