import { Router } from 'express';
import departamentoRoutes from './departamento.routes.js';
import hospitalRoutes from './hospital.routes.js';
import salaRoutes from './sala.routes.js';
import camaRoutes from './camas.routes.js';
import contactoEmergenciaRoutes from './contactosemergencias.routes.js';
import direccionRoutes from './direcciones.routes.js';
import pacienteRoutes from './paciente.routes.js';
import pacientePorCamaRoutes from './pacientesporcamas.routes.js';
import tratamientoRoutes from './tratamiento.routes.js';
import historialMedicoRoutes from './historialMedico.routes.js';
import enfermeroRoutes from './enfermero.routes.js';
import enfermeroPorSalaRoutes from './enfermeroporsala.routes.js';
import especialidadRoutes from './especialidad.routes.js';
import medicosRoutes from './medico.routes.js';
import citaRoutes from './cita.routes.js';

const router = Router();

router.use('/departamentos', departamentoRoutes); // monta las rutas definidas en router
router.use('/hospitales', hospitalRoutes);
router.use('/salas', salaRoutes);
router.use('/camas', camaRoutes);
router.use('/contactosemergencias', contactoEmergenciaRoutes);
router.use('/direcciones', direccionRoutes);
router.use('/pacientes', pacienteRoutes);
router.use('/pacientesporcamas', pacientePorCamaRoutes);
router.use('/tratamiento', tratamientoRoutes);
router.use('/historialesMedicos', historialMedicoRoutes);
router.use('/enfermeros', enfermeroRoutes);
router.use('/enfermerosporsala', enfermeroPorSalaRoutes);
router.use('/especialidades', especialidadRoutes);
router.use('/medicos', medicosRoutes);
router.use('/citas', citaRoutes);

export default router;
