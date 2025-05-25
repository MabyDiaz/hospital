import { Router } from 'express';
import {
  getDepartamentos,
  getDepartamentoById,
  createDepartamento,
  updateDepartamento,
  deleteDepartamento,
} from '../controllers/departamentoController.js';

const router = Router();

router.get('/', getDepartamentos); // Obtener todos los departamentos
router.get('/:id', getDepartamentoById); // Obtener un departamento por ID
router.post('/', createDepartamento); // Crear un nuevo departamento
router.put('/:id', updateDepartamento); // Actualizar un departamento existente
router.delete('/:id', deleteDepartamento); // Eliminar un departamento

export default router;
