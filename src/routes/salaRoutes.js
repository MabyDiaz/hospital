import { Router } from 'express';
import {
  getSalas,
  getSalaById,
  createSala,
  updateSala,
  deleteSala,
} from '../controllers/salaController.js';

const router = Router();

router.get('/', getSalas);
router.get('/:id', getSalaById);
router.post('/', createSala);
router.put('/:id', updateSala);
router.delete('/:id', deleteSala);

export default router;
