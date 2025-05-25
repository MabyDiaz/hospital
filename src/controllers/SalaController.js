import Sala from '../models/Sala.js';
import Departamento from '../models/Departamento.js';

export const getSalas = async (req, res) => {
  try {
    const salas = await Sala.findAll({
      include: { model: Departamento, as: 'departamento' },
    });
    res.json(salas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las salas', error });
  }
};

export const getSalaById = async (req, res) => {
  try {
    const { id } = req.params;
    const sala = await Sala.findByPk(id, {
      include: { model: Departamento, as: 'departamento' },
    });

    if (!sala) {
      return res.status(404).json({ message: 'Sala no encontrada' });
    }

    res.json(sala);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la sala', error });
  }
};

export const createSala = async (req, res) => {
  try {
    const { nombreONumero, idDepartamento } = req.body;

    const departamento = await Departamento.findByPk(idDepartamento);
    if (!departamento) {
      return res.status(400).json({ message: 'Departamento no válido' });
    }

    const nuevaSala = await Sala.create({
      nombreONumero,
      idDepartamento,
    });

    res.status(201).json(nuevaSala);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la sala', error });
  }
};

export const updateSala = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombreONumero, idDepartamento } = req.body;

    const sala = await Sala.findByPk(id);
    if (!sala) {
      return res.status(404).json({ message: 'Sala no encontrada' });
    }

    if (idDepartamento) {
      const departamento = await Departamento.findByPk(idDepartamento);
      if (!departamento) {
        return res.status(400).json({ message: 'Departamento no válido' });
      }
    }

    await sala.update({
      nombreONumero,
      idDepartamento,
    });

    res.json(sala);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la sala', error });
  }
};

export const deleteSala = async (req, res) => {
  try {
    const { id } = req.params;

    const sala = await Sala.findByPk(id);
    if (!sala) {
      return res.status(404).json({ message: 'Sala no encontrada' });
    }

    await sala.destroy();
    res.json({ message: 'Sala eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la sala', error });
  }
};
