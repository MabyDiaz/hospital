import express from 'express';
import {
  getAll,
  //getEnfermeroPorSalaById,
  // createEnfermeroPorSala,
  // updateEnfermeroPorSala,
  // deleteEnfermeroPorSala,
} from '../controllers/enfermeroPorSalaController.js';

const router = express.Router();

router.get('/', getAll);
//router.get('/:id', getEnfermeroPorSalaById);
// router.post('/', createEnfermeroPorSala);
// router.put('/:id', updateEnfermeroPorSala);
// router.delete('/:id', deleteEnfermeroPorSala);

export default router;
