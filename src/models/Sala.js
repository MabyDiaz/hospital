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
  },
  {
    tableName: 'Salas',
    timestamps: false,
  }
);

export default Sala;
