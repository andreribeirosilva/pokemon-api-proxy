const { ApolloServer } = require("apollo-server");
const Query = require("./resolvers/Query");
const Type = require("./resolvers/Type");
const Stat = require("./resolvers/Stat");
const Ability = require("./resolvers/Ability");
const Pokemon = require("./resolvers/Pokemon");
const typeDefs = require("./schema");
const PokemonAPI = require("./datasources/pokemon");

// set up any dataSources our resolvers need
const dataSources = () => ({
  pokemonAPI: new PokemonAPI()
});

const server = new ApolloServer({
  typeDefs,
  dataSources,
  resolvers: {
    Query,
    Pokemon,
    Type,
    Ability,
    Stat
  }
});

server
  .listen({ port: 4000 })
  .then(({ url }) => console.log(`🚀 app running at ${url}`));
