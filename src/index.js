const { ApolloServer } = require("apollo-server");
const Query = require("./resolvers/Query");
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
    Query
  }
});

server
  .listen({ port: 4000 })
  .then(({ url }) => console.log(`🚀 app running at ${url}`));
