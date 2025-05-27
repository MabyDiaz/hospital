import { Router } from 'express';
import departamentoRoutes from './departamento.routes.js';
import hospitalRoutes from './hospital.routes.js';
import salaRoutes from './sala.routes.js';
import camaRoutes from './camas.routes.js';
import contactoEmergenciaRoutes from './contactosemergencias.routes.js';
import direccionRoutes from './direcciones.routes.js';
import pacientePorCamaRoutes from './pacientesporcamas.routes.js';
import tratamientoRoutes from './tratamiento.routes.js';
<<<<<<< HEAD
import historialMedicoRoutes from './historialMedico.routes.js'
import enfermeroRoutes from './enfermero.routes.js';
import enfermeroPorSalaRoutes from './enfermeroPorSala.routes.js';
=======
import historialMedicoRoutes from './historialMedico.routes.js';
>>>>>>> e104f127cb8de82b99d996e7dfa387280ef4dcd9
import especialidadRoutes from './especialidad.routes.js';

const router = Router();

router.use('/departamentos', departamentoRoutes);
router.use('/hospitales', hospitalRoutes);
router.use('/salas', salaRoutes);
router.use('/camas', camaRoutes);
router.use('/contactosemergencias', contactoEmergenciaRoutes);
router.use('/direcciones', direccionRoutes);
router.use('/pacientesporcamas', pacientePorCamaRoutes);
router.use('/tratamiento', tratamientoRoutes);
router.use('/historialMedico', historialMedicoRoutes);
<<<<<<< HEAD
router.use('/enfermeros', enfermeroRoutes);
router.use('/enfermerosporsala', enfermeroPorSalaRoutes);
router.use('/especialidades', especialidadRoutes);
=======
router.use('/especialidades', especialidadRoutes);

>>>>>>> e104f127cb8de82b99d996e7dfa387280ef4dcd9
export default router;
