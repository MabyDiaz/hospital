import { Router } from 'express';
import departamentoRoutes from './departamentoRoutes.js';
import hospitalRoutes from './hospitalRoutes.js';
import salaRoutes from './salaRoutes.js';

const router = Router();

router.use('/departamento', departamentoRoutes);
router.use('/hospital', hospitalRoutes);
router.use('/sala', salaRoutes);

export default router;
