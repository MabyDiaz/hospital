import { Router } from 'express';
import {
  getTratamientos,
  getTratamientoById,
  createTratamiento,
  updateTratamiento,
  deleteTratamiento,
} from '../controllers/tratamientoController.js';

const router = Router();

router.get('/', getTratamientos); // obtener todos los tratamientos
router.get('/:id', getTratamientoById); // obtener un tratamiento
router.post('/', createTratamiento); // crear un tratamiento
router.put('/:id', updateTratamiento); // modificar un tratamiento
router.delete('/:id', deleteTratamiento); // eliminar un tratamiento

export default router;
