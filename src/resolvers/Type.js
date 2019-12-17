const Type = {
  type: async (parent, _, { dataSources }) => {
    console.log(parent);
    const type = await dataSources.pokemonAPI.getDataByURL(parent.type.url);

    return { ...parent.type, ...type };
  }
};

module.exports = Type;
