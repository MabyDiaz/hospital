import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js';

const Paciente = sequelize.define(
  'Paciente',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    dni: {
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
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idDireccion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'direcciones',
        key: 'id',
      },
    },
    idContactoEmergencia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'contactosEmergencias',
        key: 'id',
      },
    },
  },
  {
    tableName: 'pacientes',
    timestamps: false,
  }
);

export default Paciente;
