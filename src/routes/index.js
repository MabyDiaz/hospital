import { Router } from 'express';
import departamentoRoutes from './departamentoRoutes.js';
import hospitalRoutes from './hospitalRoutes.js';
import salaRoutes from './salaRoutes.js';
import camaRoutes from './camas.routes.js';
import contactoEmergenciaRoutes from './contactosemergencias.routes.js';
import direccionRoutes from './direcciones.routes.js';
import pacientePorCamaRoutes from './pacientesporcamas.routes.js';
import tratamientoRoutes from './tratamientoRoutes.js';
import historialMedicoRoutes from './historialMedicoRoutes.js'


const router = Router();

router.use('/departamento', departamentoRoutes);
router.use('/hospital', hospitalRoutes);
router.use('/sala', salaRoutes);
router.use('/camas', camaRoutes);
router.use('/contactosemergencias', contactoEmergenciaRoutes);
router.use('/direcciones', direccionRoutes);
router.use('/pacientesporcamas', pacientePorCamaRoutes);
router.use('./tratamiento', tratamientoRoutes);
router.use('/historialMedico', historialMedicoRoutes);


export default router;
