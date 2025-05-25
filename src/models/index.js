import sequelize from '../db/connection.js';
import Paciente from './Paciente.js';
import Direccion from './Direccion.js';
import Departamento from './Departamento.js';
import Sala from './Sala.js';
import Hospital from './Hospital.js';
import Tratamiento from './Tratamiento.js';
import HistorialMedico from './HistorialMedico.js';
import ContactoEmergencia from './ContactoEmergencia.js';
import Medico from './Medico.js';
import Cama from './Cama.js';
import PacientePorCama from './PacientePorCama.js';
import Especialidad from './Especialidad.js';
import Cita from './Cita.js';
import Enfermero from './Enfermero.js';
import EnfermeroPorSala from './EnfermeroPorSala.js';

Direccion.hasMany(Paciente, {
  foreignKey: 'idDireccion',
});

Paciente.belongsTo(Direccion, {
  foreignKey: 'idDireccion',
});

// Hospital - Departamento (1:N)
Hospital.hasMany(Departamento, {
  foreignKey: 'idHospital',
});
Departamento.belongsTo(Hospital, {
  foreignKey: 'idHospital',
});

// Hospital - Medico (N:1)
Hospital.hasMany(Medico, { foreignKey: 'idHospital' });
Medico.belongsTo(Hospital, { foreignKey: 'idHospital' });

// Departamento - Sala (1:N)
Departamento.hasMany(Sala, {
  foreignKey: 'idDepartamento',
});
Sala.belongsTo(Departamento, {
  foreignKey: 'idDepartamento',
});

// Medico - Departamento (N:1)
Departamento.hasMany(Medico, {
  foreignKey: 'idDepartamento',
});
Medico.belongsTo(Departamento, {
  foreignKey: 'idDepartamento',
});

// Cita - Departamento (N:1)
Departamento.hasMany(Cita, {
  foreignKey: 'idDepartamento',
});
Cita.belongsTo(Departamento, {
  foreignKey: 'idDepartamento',
});

// Paciente - Cita (N:1)
Paciente.hasMany(Cita, {
  foreignKey: 'idPaciente',
});
Cita.belongsTo(Paciente, {
  foreignKey: 'idPaciente',
});

// Medico - Cita (N:1)
Medico.hasMany(Cita, {
  foreignKey: 'idMedico',
});
Cita.belongsTo(Medico, {
  foreignKey: 'idMedico',
});

// Relación HistorialMedico <-> Tratamiento (1:N)
HistorialMedico.hasMany(Tratamiento, {
  foreignKey: 'idHistorialMedico',
});
Tratamiento.belongsTo(HistorialMedico, {
  foreignKey: 'idHistorialMedico',
});

//relacion Paciente - historialMedico (1-1)
Paciente.hasOne(HistorialMedico, {
  foreignKey: 'idPaciente',
});
HistorialMedico.belongsTo(Paciente, {
  foreignKey: 'idPaciente',
});

//relacion Medico - Tratamiento (1-N)
Medico.hasMany(Tratamiento, {
  foreignKey: 'idMedico',
});
Tratamiento.belongsTo(Medico, {
  foreignKey: 'idMedico',
});

// ContactoEmergencia 1:N Paciente
ContactoEmergencia.hasMany(Paciente, {
  foreignKey: 'idContactoEmergencia',
});
Paciente.belongsTo(ContactoEmergencia, {
  foreignKey: 'idContactoEmergencia',
});

// Dirección 1:N Paciente
Direccion.hasMany(Paciente, {
  foreignKey: 'idDireccion',
  sourceKey: 'id',
});
Paciente.belongsTo(Direccion, {
  foreignKey: 'idDireccion',
  targetKey: 'id',
});

// Sala 1:N Cama
Sala.hasMany(Cama, {
  foreignKey: 'idSala',
  sourceKey: 'id',
});
Cama.belongsTo(Sala, {
  foreignKey: 'idSala',
  targetKey: 'id',
});

// Asociación N:M entre Paciente y Cama a través de PacientePorCama
Paciente.belongsToMany(Cama, {
  through: PacientePorCama,
  foreignKey: 'idPaciente',
  otherKey: 'idCama',
});
Cama.belongsToMany(Paciente, {
  through: PacientePorCama,
  foreignKey: 'idCama',
  otherKey: 'idPaciente',
});

// Asociaciones inversas desde la tabla intermedia (útiles para includes)
PacientePorCama.belongsTo(Paciente, {
  foreignKey: 'idPaciente',
});
PacientePorCama.belongsTo(Cama, {
  foreignKey: 'idCama',
});

// Medico pertenece a Especialidad (N:1)
Especialidad.hasMany(Medico, {
  foreignKey: 'idEspecialidad',
});
Medico.belongsTo(Especialidad, {
  foreignKey: 'idEspecialidad',
});

// Asociacion N:M entre Enfermero y Sala
Enfermero.belongsToMany(Sala, {
  through: EnfermeroPorSala,
  foreignKey: 'idEnfermero',
  otherKey: 'idSala',
});

Sala.belongsToMany(Enfermero, {
  through: EnfermeroPorSala,
  foreignKey: 'idSala',
  otherKey: 'idEnfermero',
});

EnfermeroPorSala.belongsTo(Enfermero, { foreignKey: 'idEnfermero' });
EnfermeroPorSala.belongsTo(Sala, { foreignKey: 'idSala' });

export {
  sequelize,
  Paciente,
  Direccion,
  Departamento,
  Sala,
  Hospital,
  Tratamiento,
  HistorialMedico,
  ContactoEmergencia,
  Cama,
  PacientePorCama,
  Medico,
  Especialidad,
  Cita,
};
