import sequelize from '../db/connection.js';
import Paciente from './Paciente.js';
import Direccion from './Direccion.js';
import Departamento from './Departamento.js';
import Sala from './Sala.js';
import Hospital from './Hospital.js';
import Tratamiento from './Tratamiento.js';
import HistorialMedico from './HistorialMedico.js';

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
// un Hospital tiene muchos Departamentos y un Departamento pertenece a un Hospital.
Hospital.hasMany(Departamento, {
  foreignKey: 'idHospital',
  as: 'departamentos',
});
Departamento.belongsTo(Hospital, {
  foreignKey: 'idHospital',
  as: 'hospital',
});

// Asociación:
// entre Departamento y Sala (1:N) porque
// un Departamento tiene muchas Salas y una Sala pertenece a un Departamento.
Departamento.hasMany(Sala, {
  foreignKey: 'idDepartamento',
  as: 'salas',
});
Sala.belongsTo(Departamento, {
  foreignKey: 'idDepartamento',
  as: 'departamento',
});

// Relación HistorialMedico <-> Tratamiento (1:N)
HistorialMedico.hasMany(Tratamiento, {
    foreignKey: 'idHistorialMedico',
});
Tratamiento.belongsTo(HistorialMedico, {
    foreignKey: 'idHistorialMedico',
});

export { Paciente, Direccion, Departamento, Sala, Hospital, Tratamiento, HistorialMedico };
