import { Cita } from '../models/index.js';

export const getCitas = async (req, res) => {
  const list = await Cita.findAll();
  res.json(list);
};

export const getCitaById = async (req, res) => {
  const o = await Cita.findByPk(req.params.id);
  o ? res.json(o) : res.status(404).send('No encontrado');
};

export const createCita = async (req, res) => {
  try {
    const nueva = await Cita.create(req.body);
    res.status(201).json(nueva);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

export const updateCita = async (req, res) => {
  const o = await Cita.findByPk(req.params.id);
  if (!o) return res.status(404).send('No encontrado');
  await o.update(req.body);
  res.json(o);
};

export const deleteCita = async (req, res) => {
  const o = await Cita.findByPk(req.params.id);
  if (!o) return res.status(404).send('No encontrado');
  await o.destroy();
  res.sendStatus(204);
};
