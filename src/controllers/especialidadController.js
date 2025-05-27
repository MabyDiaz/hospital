import Especialidad from '../models/Especialidad.js';

export const getEspecialidad = async (req, res) => {
  try {
    const data = await Especialidad.findAll();
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getEspecialidadById = async (req, res) => {
  try {
    const item = await Especialidad.findByPk(req.params.id);
    item ? res.json(item) : res.status(404).send('No encontrado');
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const createEspecialidad = async (req, res) => {
  try {
    const nuevo = await Especialidad.create(req.body);
    res.status(201).json(nuevo);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

export const updateEspecialidad = async (req, res) => {
  try {
    const item = await Especialidad.findByPk(req.params.id);
    if (!item) return res.status(404).send('No encontrado');

    await item.update(req.body);
    res.json(item);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

export const deleteEspecialidad = async (req, res) => {
  try {
    const item = await Especialidad.findByPk(req.params.id);
    if (!item) return res.status(404).send('No encontrado');

    await item.destroy();
    res.sendStatus(204);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
