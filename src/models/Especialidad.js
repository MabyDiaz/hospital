import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js';

const Especialidad = sequelize.define(
  'Especialidad',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'especialidades',
    timestamps: false,
  }
);

export default Especialidad;
