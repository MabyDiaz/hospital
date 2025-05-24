import sequelize from '../db/connection.js'
import Paciente from './Paciente.js'
import Direccion from './Direccion.js'
//se importan todos los modelos



Direccion.hasOne(Paciente, {
    foreignKey: 'idDireccion'
})

Paciente.belongsTo(Direccion, {
    foreignKey: 'idDireccion'
})


export { 
    Paciente,
    Direccion
}
