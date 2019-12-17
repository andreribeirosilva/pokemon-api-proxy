const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    pokemons(pageSize: Int, page: Int): PokemonsList
    pokemon(id: String!): Pokemon
  }

  type PokemonsList {
    pokemons: [Pokemon]
    count: Int
    next: String
    previous: String
  }

  type NamedResource {
    name: String
    url: String
  }

  type Ability {
    ability: NamedResource
    is_hidden: Boolean
    slot: Int
  }

  type Type {
    slot: Int
    type: NamedResource
  }

  type Stat {
    base_stat: Int
    effor: Int
    stat: NamedResource
  }

  type Sprite {
    back_default: String
    back_female: String
    back_shiny: String
    back_shiny_female: String
    front_default: String
    front_female: String
    front_shiny: String
    front_shiny_female: String
    large: String
    small: String
  }

  type Pokemon {
    id: ID!
    name: String!
    order: Int
    abilities: [Ability]
    stats: [Stat]
    weight: Int
    height: Int
    base_experience: Int
    types: [Type]
    sprites: Sprite
    species: NamedResource
  }
`;

module.exports = typeDefs;
