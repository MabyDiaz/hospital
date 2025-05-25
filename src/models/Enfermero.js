import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js';

const Enfermero = sequelize.define('Enfermero', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
  numeroLegajo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  nombreCompleto: {
    type: DataTypes.STRING,
    allowNull: false
  },
  estaDeGuardia: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
}, {
  tableName: 'enfermeros',
  timestamps: false
});

export default Enfermero;
