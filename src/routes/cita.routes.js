import express from 'express';
import { Cita } from '../models/index.js';
const router = express.Router();

router.get('/', async (req, res) => res.json(await Cita.findAll()));
router.get('/:id', async (req, res) => {
  const o = await Cita.findByPk(req.params.id);
  o ? res.json(o) : res.status(404).send('No encontrado');
});
router.post('/', async (req, res) => {
  try { res.status(201).json(await Cita.create(req.body)); }
  catch(e){ res.status(400).json({ error: e.message }); }
});
router.put('/:id', async (req, res) => {
  const o = await Cita.findByPk(req.params.id);
  if(!o) return res.status(404).send('No encontrado');
  await o.update(req.body);
  res.json(o);
});
router.delete('/:id', async (req, res) => {
  const o = await Cita.findByPk(req.params.id);
  if(!o) return res.status(404).send('No encontrado');
  await o.destroy();
  res.sendStatus(204);
});
export default router;
