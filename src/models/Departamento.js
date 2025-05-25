import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js';

const Departamento = sequelize.define(
  'Departamento',
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
    jefeDeDepartamento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idHospital: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'hospitales',
        key: 'id',
      },
    },
  },
  {
    tableName: 'departamentos',
    timestamps: false,
  }
);

export default Departamento;
