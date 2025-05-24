import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js';

const Enfermero = sequelize.define('Enfermero', {
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
  tableName: 'Enfermero',
  timestamps: false
});

export default Enfermero;
