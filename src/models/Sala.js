import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js';

<<<<<<< HEAD
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
=======
const Sala = sequelize.define(
  'Sala',
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
    id_departamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'departamentos',
        key: 'id',
      },
    },
  },
  {
    tableName: 'Salas',
    timestamps: false,
  }
);
>>>>>>> 7d4ca857d1f0714dabd9e8370de457a205101c80

export default Sala;
