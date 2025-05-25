import { DataTypes } from "sequelize";
import sequelize from "../db/connection.js";

const HistorialMedico = sequelize.define("HistorialMedico", {
    id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
    allowNull:false,
    unique:true
    },

    fkIdPaciente: {
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model: 'Paciente',
            key: 'id'
        },

    },
    },
     {
        tableName:'historialesMedicos',
        timestamps: false,    
    }

)

export default HistorialMedico;