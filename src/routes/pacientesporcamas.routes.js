import { Router } from 'express';
import {
  getPacientesPorCamas,
  getPacientePorCamaById,
  createPacientePorCama,
  updatePacientePorCama,
  deletePacientePorCama
} from '../controllers/pacienteporcamaController.js';

const router = Router();

router.get('/', getPacientesPorCamas);
router.get('/:id', getPacientePorCamaById);
router.post('/', createPacientePorCama);
router.put('/:id', updatePacientePorCama);
router.delete('/:id', deletePacientePorCama);

export default router;
