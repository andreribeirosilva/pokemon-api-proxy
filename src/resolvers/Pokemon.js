const Pokemon = {
  species: async (parent, _, { dataSources }) => {
    const species = await dataSources.pokemonAPI.getDataByURL(
      parent.species.url
    );

    return { ...parent.species, ...species };
  }
};

module.exports = Pokemon;
