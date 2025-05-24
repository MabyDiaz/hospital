import sequelize from '../db/connection.js'
import Paciente from './Paciente.js'
import Direccion from './Direccion.js'
//se importan todos los modelos



Direccion.hasMany(Paciente, {
    foreignKey: 'fkIdDireccion',
    as: 'pacientes'
});

Paciente.belongsTo(Direccion, {
    foreignKey: 'fkIdDireccion',
    as: 'direccion'
});


export { 
    Paciente,
    Direccion
}
