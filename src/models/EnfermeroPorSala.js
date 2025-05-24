import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js';

const EnfermeroXSala = sequelize.define('EnfermeroXSala', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  turno: {
    type: DataTypes.STRING,
    allowNull: false
  },
  horarioIngreso: {
    type: DataTypes.TIME,
    allowNull: false
  },
  horarioEgreso: {
    type: DataTypes.TIME,
    allowNull: false
  },
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false
    },
    fkIdSala: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Sala', 
          key: 'id'
        }
    },
    fkIdEnfermero: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Enfermero', 
          key: 'id'
        }
    },
}, {
  tableName: 'EnfermeroXSala',
  timestamps: false
});


export default EnfermeroXSala;
