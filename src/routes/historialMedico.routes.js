import { Router } from 'express';
import {
  getHistorialMedico,
  getHistorialMedicoById,
  createHistorialMedico,
  updateHistorialMedico,
  deleteHistorialMedico,
} from '../controllers/historialMedicoController.js';

const router = Router();

router.get('/', getHistorialMedico);
router.get('/:id', getHistorialMedicoById);
router.post('/', createHistorialMedico);
router.put('/:id', updateHistorialMedico);
router.delete('/:id', deleteHistorialMedico);

export default router;
