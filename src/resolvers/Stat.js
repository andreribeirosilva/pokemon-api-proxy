const Stat = {
  stat: async (parent, _, { dataSources }) => {
    console.log(parent);
    const stat = await dataSources.pokemonAPI.getDataByURL(parent.stat.url);

    return { ...parent.stat, ...stat };
  }
};

module.exports = Stat;
