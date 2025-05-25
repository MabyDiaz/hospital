import sequelize from '../db/connection.js';
import Paciente from './Paciente.js';
import Direccion from './Direccion.js';
import Departamento from './Departamento.js';
import Sala from './Sala.js';
import Hospital from './Hospital.js';
import Tratamiento from './Tratamiento.js';
import HistorialMedico from './HistorialMedico.js';
import ContactoEmergencia from './ContactoEmergencia.js';
import Direccion from './Direccion.js'; 
import Sala from './Sala.js';
import Cama from './Cama.js';
import PacientePorCama from './PacientePorCama.js';   
import Medico from './Medico.js';

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
  foreignKey: 'idContactoEmergencia'
});

Paciente.belongsTo(ContactoEmergencia, {
  foreignKey: 'idContactoEmergencia'
});

// Dirección 1:N Paciente
Direccion.hasMany(Paciente, {
  foreignKey: 'idDireccion',
  sourceKey: 'id'
});

Paciente.belongsTo(Direccion, {
  foreignKey: 'idDireccion',
  targetKey: 'id'
});

// Sala 1:N Cama
Sala.hasMany(Cama, { 
  foreignKey: 'idSala',
  sourceKey: 'id' 
})

Cama.belongsTo(Sala, { 
  foreignKey: 'idSala',
  targetKey: 'id' 
})

// Asociación N:M entre Paciente y Cama a través de PacientePorCama
Paciente.belongsToMany(Cama, {
  through: PacientePorCama,
  foreignKey: 'idPaciente',
  otherKey: 'idCama'
});

Cama.belongsToMany(Paciente, {
  through: PacientePorCama,
  foreignKey: 'idCama',
  otherKey: 'idPaciente'
});

// Asociaciones inversas desde la tabla intermedia (útiles para includes)
PacientePorCama.belongsTo(Paciente, { 
  foreignKey: 'idPaciente' 
});
PacientePorCama.belongsTo(Cama, { 
  foreignKey: 'idCama' 
});

export { Paciente, Direccion, Departamento, Sala, Hospital, Tratamiento, HistorialMedico, ContactoEmergencia, Cama, PacientePorCama, Medico };
