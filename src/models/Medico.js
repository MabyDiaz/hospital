import { DataTypes } from 'sequelize';
import { sequelize } from './index.js';

const Medico = sequelize.define(
  'Medico',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nro_matricula: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    nombre_completo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    idEspecialidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'especialidades',
        key: 'id',
      },
    },
    idDepartamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'departamentos',
        key: 'id',
      },
    },
    idHospital: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'hospitales',
        key: 'id',
      },
    },
  },
  {
    tableName: 'medicos',
    timestamps: false,
  }
);

export default Medico;
