import { DataTypes } from "sequelize";
import sequelize from "../db/connection.js";

const PacientePorCama = sequelize.define('PacientePorCama', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
  fechaIngreso: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  fechaEgreso: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  idPaciente: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'pacientes',
      key: 'id'
    }
  },
  idCama: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'camas',
      key: 'id'
    }
  },
}, {
  tableName: 'pacientesPorCamas',
  timestamps: false,
  
});

export default PacientePorCama;