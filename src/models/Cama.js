import { DataTypes } from "sequelize";
import sequelize from "../db/connection.js";

const Cama = sequelize.define('Cama', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true
    },
    numeroCama: {
      type: DataTypes.STRING,
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false
    },
    idSala: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'salas', 
        key: 'id'
      }
    },
    idPaciente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pacientes',
        key: 'id'
    }
    }
  }, {
    tableName: 'camas',
    timestamps: false,
    
  });

export default Cama;


  