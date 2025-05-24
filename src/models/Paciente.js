import { DataTypes } from "sequelize";
import sequelize from "../db/connection.js";

const Paciente = sequelize.define('Paciente', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    dni: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    nombreCompleto: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fechaNacimiento: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fkIdDireccion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'direccion', 
          key: 'id'
        }
    },
    fkIdHistorialMedico: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'HistorialMedico', 
          key: 'id'
        }
    },
    fkIdContactoEmergencia: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'ContactoEmergencia', 
          key: 'id'
        }
    }
}, {
    tableName: 'Pacientes',
    timestamps: false
}
);

export default Paciente