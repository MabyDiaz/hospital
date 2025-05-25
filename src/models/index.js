import sequelize from '../db/connection.js';
import Paciente from './Paciente.js';
import Direccion from './Direccion.js';
import Departamento from './Departamento.js';
import Sala from './Sala.js';
import Hospital from './Hospital.js';

Direccion.hasMany(Paciente, {
  foreignKey: 'fkIdDireccion',
  as: 'pacientes',
});

Paciente.belongsTo(Direccion, {
  foreignKey: 'fkIdDireccion',
  as: 'direccion',
});

// Asociación:
// Entre Hospital y Departamento (1:N) porque
// un Hospital tiene muchos Departamentos y Un Departamento pertenece a un Hospital 
Hospital.hasMany(Departamento, {
  foreignKey: 'idHospital',
  as: 'departamentos',
});
Departamento.belongsTo(Hospital, {
  foreignKey: 'idHospital',
  as: 'hospital',
});

// Asociación: Departamento → Sala (1:N)
Departamento.hasMany(Sala, {
  foreignKey: 'idDepartamento',
  as: 'salas',
});
Sala.belongsTo(Departamento, {
  foreignKey: 'idDepartamento',
  as: 'departamento',
});

export { Paciente, Direccion, Departamento, Sala, Hospital };
