import sequelize from '../db/connection.js';
import Paciente from './Paciente.js';
import Direccion from './Direccion.js';
import Departamento from './Departamento.js';
import Sala from './Sala.js';
import Hospital from './Hospital.js';
//se importan todos los modelos

Direccion.hasMany(Paciente, {
    foreignKey: 'fkIdDireccion',
    as: 'pacientes'  
  });
  
  Paciente.belongsTo(Direccion, {
    foreignKey: 'fkIdDireccion',
    as: 'direccion'  
  });
  
//Hospital
Hospital.hasMany(Departamento, { foreignKey: 'idHospital' });
Departamento.belongsTo(Hospital, { foreignKey: 'idHospital' });

//Departamento
Departamento.hasMany(Sala, { foreignKey: 'idDepartamento' });
Sala.belongsTo(Departamento, { foreignKey: 'idDepartamento' });

//Sala
Sala.hasMany(Cama, { foreignKey: 'idSala' });
Cachema.belongsTo(Sala, { foreingKey: 'idSala' });

export { Paciente, Direccion, Departamento, Sala, Hospital };
