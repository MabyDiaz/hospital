import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js';

const EnfermeroPorSala = sequelize.define(
  'EnfermeroPorSala',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    turno: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    horarioIngreso: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    horarioEgreso: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    idSala: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'salas',
        key: 'id',
      },
    },
    idEnfermero: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'enfermeros',
        key: 'id',
      },
    },
  },
  {
    tableName: 'enfermerosporsalas',
    timestamps: false,
  }
);

export default EnfermeroPorSala;
