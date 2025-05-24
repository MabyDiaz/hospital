import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js';

const Paciente = sequelize.define(
  'Paciente',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    DNI: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nombreCompleto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fechaNacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    idHistorialMedico: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    idDireccion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idContactoEmergencia: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'Pacientes',
    timestamps: false,
  }
);

export default Paciente;
