import { Paciente } from '../models/index.js';

export const getPacientes = async (req, res) => {
  try {
    const items = await Paciente.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener pacientes' });
  }
};

export const getPacienteById = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Paciente.findByPk(id);
    if (!item) return res.status(404).json({ error: 'Paciente no encontrado' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener paciente' });
  }
};

export const createPaciente = async (req, res) => {
  try {
    const nuevo = await Paciente.create(req.body);
    res.status(201).json(nuevo);
  } catch (error) {
     console.error(error);
    res.status(400).json({ error: 'Error al crear paciente' });
  }
};

export const updatePaciente = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Paciente.findByPk(id);
    if (!item) return res.status(404).json({ error: 'Paciente no encontrado' });

    await item.update(req.body);
    res.json(item);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar paciente' });
  }
};

export const deletePaciente = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Paciente.findByPk(id);
    if (!item) return res.status(404).json({ error: 'Paciente no encontrado' });

    await item.destroy();
    res.json({ message: 'Paciente eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar paciente' });
  }
};
