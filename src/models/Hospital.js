import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js';

const Hospital = sequelize.define(
  'Hospital',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'hospitales',
    timestamps: false,
  }
);

export default Hospital;
