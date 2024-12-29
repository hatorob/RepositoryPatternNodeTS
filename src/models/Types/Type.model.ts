import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../../config/sequelize';

export class Type extends Model {
    public id!: number;
    public name!: string;
}

Type.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: { type: DataTypes.STRING, allowNull:false},
}, {
    sequelize,
    modelName: 'Type',
    tableName: 'types',
    timestamps: false,
})