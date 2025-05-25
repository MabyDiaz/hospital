import { Router } from 'express';
import {
  getHospitales,
  getHospitalById,
  createHospital,
  updateHospital,
  deleteHospital,
} from '../controllers/HospitalController.js';

const router = Router();

router.get('/', getHospitales);
router.get('/:id', getHospitalById);
router.post('/', createHospital);
router.put('/:id', updateHospital);
router.delete('/:id', deleteHospital);

export default router;
