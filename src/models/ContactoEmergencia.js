import { DataTypes } from "sequelize";
import sequelize from "../db/connection.js";

const ContactoEmergencia = sequelize.define('ContactoEmergencia', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vinculo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    celular: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'contactosEmergencias',
    timestamps: false,
    
  });

export default ContactoEmergencia;
  
