import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js';

const Tratamiento = sequelize.define(
  'Tratamiento',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      unique: true,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    esAmbulatorio: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },

    IdMedico: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'medicos',
        key: 'id',
      },
    },

    IdHistorialMedico: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'HistorialMedico',
        key: 'id',
      },
    },
  },

  {
    tableName: 'tratamientos',
    timestamps: false,
  }
);

export default Tratamiento;
