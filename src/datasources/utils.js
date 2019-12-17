const LARGE_IMAGE_PATH =
  "https://assets.pokemon.com/assets/cms2/img/pokedex/full/";
const SMALL_IMAGE_PATH =
  "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

const normalizePokemon = pokemon => {
  const justifiedId = ("000" + pokemon.id).substr(-3);

  return {
    ...pokemon,
    sprites: {
      ...pokemon.sprites,
      large: `${LARGE_IMAGE_PATH}${justifiedId}.png`,
      small: `${SMALL_IMAGE_PATH}${justifiedId}.png`
    }
  };
};

module.exports = {
  normalizePokemon
};
