import { Router } from 'express';
import {
  getHospitales,
  getHospitalById,
  createHospital,
  updateHospital,
  deleteHospital,
} from '../controllers/HospitalController.js';

const router = Router();

router.get('/', getHospitales); // obtener todos los hospitales
router.get('/:id', getHospitalById); // obtener un hospital
router.post('/', createHospital); // crear un hospital
router.put('/:id', updateHospital); // modificar un hospital
router.delete('/:id', deleteHospital); // eliminar un hospital

export default router;
