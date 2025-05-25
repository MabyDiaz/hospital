import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js';

const Sala = sequelize.define(
  'Sala',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    nombreONumero: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idDepartamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'departamentos',
        key: 'id',
      },
    },
  },
  {
    tableName: 'salas',
    timestamps: false,
  }
);

export default Sala;
