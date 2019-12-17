const { gql } = require("apollo-server");

const typeDefs = gql`
  type NamedResource {
    name: String
    url: String
  }

  type Query {
    pokemons(pageSize: Int, page: Int): PokemonsList
    pokemon(id: String!): Pokemon
    type(id: Int): Type
  }

  type PokemonsList {
    pokemons: [Pokemon]
    count: Int
    next: String
    previous: String
  }

  type Pokemon {
    id: ID!
    name: String!
    order: Int
    weight: Int
    height: Int
    base_experience: Int
    sprites: Sprite
    stats: [Stat]
    abilities: [Ability]
    types: [Type]
    species: Specie
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

  type Type {
    slot: Int
    type: TypeData
  }

  type TypeData {
    id: Int
    name: String
    url: String
    generation: NamedResource
    # TODO: complete Type structure
  }

  type Specie {
    name: String
    url: String
    base_happiness: Int
    # TODO: complete Specie structure
  }

  type Ability {
    ability: AbilityData
    is_hidden: Boolean
    slot: Int
  }

  type AbilityData {
    name: String
    url: String
    is_main_series: Boolean
    generation: NamedResource
    # TODO: complete Ability structure
  }

  type Stat {
    base_stat: Int
    effort: Int
    stat: StatData
  }

  type StatData {
    name: String
    url: String
    id: Int
    names: [Translation]
    # TODO: complete Stat structure
  }

  type Translation {
    language: Language
    name: String
  }

  type Language {
    name: String
    url: String
  }
`;

module.exports = typeDefs;
