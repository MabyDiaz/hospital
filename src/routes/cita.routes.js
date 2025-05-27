import { Router } from 'express';
import {
  getCitas,
  getCitaById,
  createCita,
  updateCita,
  deleteCita
} from '../controllers/citaController.js';

const router = Router();

router.get('/', getCitas);
router.get('/:id', getCitaById);
router.post('/', createCita);
router.put('/:id', updateCita);
router.delete('/:id', deleteCita);

export default router;
