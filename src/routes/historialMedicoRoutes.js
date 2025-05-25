import { Router } from 'express';
import {
  getHistorialesMedicos,
  getHistorialMedicoById,
  createHistorialMedico,
  updateHistorialMedico,
  deleteHistorialMedico,
} from '../controllers/historialMedicoController.js';

const router = Router();

router.get('/', getHistorialesMedicos); // obtener todos los HistorialesMedicos
router.get('/:id', getHistorialMedicoById); // obtener un HistorialMedico
router.post('/', createHistorialMedico); // crear un HistorialMedico
router.put('/:id', updateHistorialMedico); // modificar un HistorialMedico
router.delete('/:id', deleteHistorialMedico); // eliminar un HistorialMedico

export default router;