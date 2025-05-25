import { DataTypes } from 'sequelize';
import { sequelize } from './index.js';

const Cita = sequelize.define('Cita', {
  id:  {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fecha:  {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  hora:  {
    type: DataTypes.TIME,
    allowNull: false
  },
  motivo_consulta:  {
    type: DataTypes.STRING,
    allowNull: false
  },
  diagnostico:  {
    type: DataTypes.TEXT,
    allowNull: true
  },
  idPaciente:  {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: 'paciente', key: 'id' }
  },
  idMedico: {
    type: DataTypes.INTEGER, allowNull: false,
    references:  {
      model: 'medicos',
      key: 'id'
    }
  },
  fk_id_departamento: {
    type: DataTypes.INTEGER, allowNull: false,
    references:  {
      model: 'departamentos',
      key: 'id'
    }
  }
}, {
  tableName: 'citas',
  timestamps: false
});

export default Cita;
