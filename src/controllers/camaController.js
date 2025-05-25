import { Cama, Sala } from '../models/index.js';

// Obtener todas las camas (incluye Sala asociada)
export const getCamas = async (req, res) => {
  try {
    const camas = await Cama.findAll({
      include: {
        model: Sala,
        attributes: ['id', 'nombre'], 
      },
    });
    res.status(200).json(camas);
  } catch (error) {
    console.error("Error al obtener camas:", error);
    res.status(500).json({ message: 'Error al obtener camas', error: error.message });
  }
};

// Obtener una cama por ID
export const getCamaById = async (req, res) => {
  try {
    const { id } = req.params;
    const cama = await Cama.findByPk(id, {
      include: {
        model: Sala,
        attributes: ['id', 'nombre'],
      },
    });

    if (cama) {
      res.status(200).json(cama);
    } else {
      res.status(404).json({ message: 'Cama no encontrada' });
    }
  } catch (error) {
    console.error("Error al obtener cama por ID:", error);
    res.status(500).json({ message: 'Error al obtener cama', error: error.message });
  }
};

// Crear una nueva cama
export const createCama = async (req, res) => {
  try {
    const nuevaCama = await Cama.create(req.body);
    res.status(201).json(nuevaCama);
  } catch (error) {
    console.error("Error al crear cama:", error);
    if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({
        message: 'Error de validación',
        errors: error.errors.map(e => e.message),
      });
    }
    res.status(500).json({ message: 'Error al crear cama', error: error.message });
  }
};

// Actualizar una cama existente
export const updateCama = async (req, res) => {
  try {
    const { id } = req.params;
    const datosActualizar = req.body;

    const cama = await Cama.findByPk(id);

    if (cama) {
      const camaActualizada = await cama.update(datosActualizar);
      res.status(200).json(camaActualizada);
    } else {
      res.status(404).json({ message: 'Cama no encontrada para actualizar' });
    }
  } catch (error) {
    console.error("Error al actualizar cama:", error);
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({
        message: 'Error de validación',
        errors: error.errors.map(e => e.message),
      });
    }
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
};

// Eliminar una cama
export const deleteCama = async (req, res) => {
  try {
    const { id } = req.params;
    const resultado = await Cama.destroy({ where: { id } });

    if (resultado > 0) {
      res.status(200).json({ message: 'Cama eliminada exitosamente' });
    } else {
      res.status(404).json({ message: 'Cama no encontrada para eliminar' });
    }
  } catch (error) {
    console.error("Error al eliminar cama:", error);
    res.status(500).json({ message: 'Error al eliminar cama', error: error.message });
  }
};
