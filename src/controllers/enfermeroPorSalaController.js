import EnfermeroPorSala from '../models/EnfermeroPorSala.js';
import Enfermero from '../models/Enfermero.js';
import Sala from '../models/Sala.js';

export const getEnfermeroPorSala = async (req, res) => {
  try {
    const data = await EnfermeroPorSala.findAll({
      include: [
        { model: Enfermero, attributes: ['id', 'nombreCompleto'] },
        { model: Sala, attributes: ['id', 'nombreONumero'] },
      ],
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getEnfermeroPorSalaById = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await EnfermeroPorSala.findByPk(id, {
      include: [
        { model: Enfermero, attributes: ['id', 'nombreCompleto'] },
        { model: Sala, attributes: ['id', 'nombreONumero'] },
      ],
    });
    if (!item) return res.status(404).json({ message: 'No encontrado' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createEnfermeroPorSala = async (req, res) => {
  try {
    const newItem = await EnfermeroPorSala.create(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateEnfermeroPorSala = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await EnfermeroPorSala.update(req.body, {
      where: { id },
    });
    if (!updated)
      return res.status(404).json({ message: 'No encontrado para actualizar' });
    const updatedItem = await EnfermeroPorSala.findByPk(id);
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteEnfermeroPorSala = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await EnfermeroPorSala.destroy({ where: { id } });
    if (!deleted)
      return res.status(404).json({ message: 'No encontrado para eliminar' });
    res.json({ message: 'Eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
