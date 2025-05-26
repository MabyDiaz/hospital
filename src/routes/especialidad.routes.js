import { Router } from 'express';
import {
  getEnfermeros,
  createEnfermero,
  updateEnfermero,
  deleteEnfermero
} from '../controllers/enfermeroController.js';

const router = Router();

router.get('/', getEnfermeros);
router.post('/', createEnfermero);
router.put('/:id', updateEnfermero);
router.delete('/:id', deleteEnfermero);

export default router;
