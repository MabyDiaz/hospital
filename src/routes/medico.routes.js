import express from 'express';
import { Medico, Especialidad, Departamento, Hospital } from '../models/index.js';
const router = express.Router();

router.get('/', async (req, res) => {
  const list = await Medico.findAll({ include: [Especialidad, Departamento, Hospital] });
  res.json(list);
});

router.get('/:id', async (req, res) => {
  const o = await Medico.findByPk(req.params.id, { include: [Especialidad, Departamento, Hospital] });
  o ? res.json(o) : res.status(404).send('No encontrado');
});

router.post('/', async (req, res) => {
  try { const nuevo = await Medico.create(req.body); res.status(201).json(nuevo); }
  catch(e){ res.status(400).json({ error: e.message }); }
});

router.put('/:id', async (req, res) => {
  const o = await Medico.findByPk(req.params.id);
  if(!o) return res.status(404).send('No encontrado');
  await o.update(req.body);
  res.json(o);
});

router.delete('/:id', async (req, res) => {
  const o = await Medico.findByPk(req.params.id);
  if(!o) return res.status(404).send('No encontrado');
  await o.destroy();
  res.sendStatus(204);
});
