import { Medico, Especialidad, Departamento, Hospital } from '../models/index.js';

export const getMedicos = async (req, res) => {
  const list = await Medico.findAll({ include: [Especialidad, Departamento, Hospital] });
  res.json(list);
};

export const getMedicoById = async (req, res) => {
  const o = await Medico.findByPk(req.params.id, {
    include: [Especialidad, Departamento, Hospital]
  });
  o ? res.json(o) : res.status(404).send('No encontrado');
};

export const createMedico = async (req, res) => {
  try {
    const nuevo = await Medico.create(req.body);
    res.status(201).json(nuevo);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

export const updateMedico = async (req, res) => {
  const o = await Medico.findByPk(req.params.id);
  if (!o) return res.status(404).send('No encontrado');
  await o.update(req.body);
  res.json(o);
};

export const deleteMedico = async (req, res) => {
  const o = await Medico.findByPk(req.params.id);
  if (!o) return res.status(404).send('No encontrado');
  await o.destroy();
  res.sendStatus(204);
};
