import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js';


const Sala = sequelize.define('Sala', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  nombreONumero: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  tableName: 'Sala',
  timestamps: false
});

export default Sala;
