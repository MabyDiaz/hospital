import express from 'express';
import {
  getEspecialidad,
  getEspecialidadById,
  createEspecialidad,
  updateEspecialidad,
  deleteEspecialidad,
} from '../controllers/especialidadController.js';

const router = express.Router();

router.get('/', getEspecialidad);
router.get('/:id', getEspecialidadById);
router.post('/', createEspecialidad);
router.put('/:id', updateEspecialidad);
router.delete('/:id', deleteEspecialidad);

export default router;
