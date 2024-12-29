import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../../config/sequelize';

export class Pokemon extends Model {
    public id!: number;
    public name!: string;
    public image!: string;
    public life!: number;
    public attack!: number;
    public defense!: number;
    public speed!: number;
    public height!: number;
    public weight!: number;
}

Pokemon.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: { type: DataTypes.STRING, allowNull:false},
    image: { type: DataTypes.STRING, allowNull:false},
    life: { type: DataTypes.INTEGER, allowNull:false, defaultValue: 0},
    attack: { type: DataTypes.INTEGER, allowNull:false, defaultValue: 0},
    defense: { type: DataTypes.INTEGER, allowNull:false, defaultValue: 0},
    speed: { type: DataTypes.INTEGER, allowNull:false, defaultValue: 0},
    height: { type: DataTypes.INTEGER, allowNull:false, defaultValue: 0},
    weight: { type: DataTypes.INTEGER, allowNull:false, defaultValue: 0},
}, {
    sequelize,
    modelName: 'Pokemon',
    tableName: 'pokemons',
    timestamps: false,
})