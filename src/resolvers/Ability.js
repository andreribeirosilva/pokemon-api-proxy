const Ability = {
  ability: async (parent, _, { dataSources }) => {
    console.log(parent);
    const ability = await dataSources.pokemonAPI.getDataByURL(
      parent.ability.url
    );

    return { ...parent.ability, ...ability };
  }
};

module.exports = Ability;
