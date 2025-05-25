import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js';

const Direccion = sequelize.define(
  'Direccion',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    pais: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    provincia: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    ciudad: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    barrio: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    calle: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    numero: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: 'direcciones',
    timestamps: false,
  }
);

export default Direccion;
