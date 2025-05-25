import { Router } from 'express';
import {
  getContactosEmergencia,
  getContactoEmergenciaById,
  createContactoEmergencia,
  updateContactoEmergencia,
  deleteContactoEmergencia
} from '../controllers/contactoemergenciaController.js';

const router = Router();

router.get('/', getContactosEmergencia);
router.get('/:id', getContactoEmergenciaById);
router.post('/', createContactoEmergencia);
router.put('/:id', updateContactoEmergencia);
router.delete('/:id', deleteContactoEmergencia);

export default router;
