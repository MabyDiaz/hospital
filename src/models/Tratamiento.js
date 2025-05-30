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
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    esAmbulatorio: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },

    idMedico: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'medicos',
        key: 'id',
      },
    },

    idHistorialMedico: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'historialesMedicos',
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
