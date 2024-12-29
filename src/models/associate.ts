import { Pokemon } from './Pokemons/Pokemon.model';
import { Type } from './Types/Type.model';

export const defineAssociations = () => {
    Pokemon.belongsToMany(Type, { through: 'PokemonTypes', foreignKey: 'pokemonId' });
    Type.belongsToMany(Pokemon, { through: 'PokemonTypes', foreignKey: 'typeId' });
};
