import { Router } from 'express';
import departamentoRoutes from './departamento.routes.js';
import hospitalRoutes from './hospital.routes.js';
import salaRoutes from './sala.routes.js';
import camaRoutes from './camas.routes.js';
import contactoEmergenciaRoutes from './contactosemergencias.routes.js';
import direccionRoutes from './direcciones.routes.js';
import pacientePorCamaRoutes from './pacientesporcamas.routes.js';
import tratamientoRoutes from './tratamiento.routes.js';
import historialMedicoRoutes from './historialMedico.routes.js';
import especialidadRoutes from './especialidad.routes.js';

const router = Router();

router.use('/departamentos', departamentoRoutes);
router.use('/hospitales', hospitalRoutes);
router.use('/salas', salaRoutes);
router.use('/camas', camaRoutes);
router.use('/contactosemergencias', contactoEmergenciaRoutes);
router.use('/direcciones', direccionRoutes);
router.use('/pacientesporcamas', pacientePorCamaRoutes);
router.use('./tratamiento', tratamientoRoutes);
router.use('/historialMedico', historialMedicoRoutes);
router.use('/especialidades', especialidadRoutes);

export default router;
