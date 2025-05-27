import { Direccion } from '../models/index.js';

// Obtener todas las direcciones
export const getDirecciones = async (req, res) => {
  try {
    const direcciones = await Direccion.findAll();
    res.status(200).json(direcciones);
  } catch (error) {
    console.error('Error al obtener direcciones:', error);
    res
      .status(500)
      .json({ message: 'Error al obtener direcciones', error: error.message });
  }
};

// Obtener una dirección por ID
export const getDireccionById = async (req, res) => {
  try {
    const { id } = req.params;
    const direccion = await Direccion.findByPk(id);
    if (direccion) {
      res.status(200).json(direccion);
    } else {
      res.status(404).json({ message: 'Dirección no encontrada' });
    }
  } catch (error) {
    console.error('Error al obtener dirección:', error);
    res
      .status(500)
      .json({ message: 'Error al obtener dirección', error: error.message });
  }
};

// Crear una nueva dirección
export const createDireccion = async (req, res) => {
  try {
    console.log('Datos recibidos:', req.body);
    const nuevaDireccion = await Direccion.create(req.body);
    res.status(201).json(nuevaDireccion);
  } catch (error) {
    console.error('Error al crear dirección:', error);
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({
        message: 'Error de validación',
        errors: error.errors.map((e) => e.message),
      });
    }
    res
      .status(500)
      .json({ message: 'Error al crear dirección', error: error.message });
  }
};

// Actualizar una dirección existente
export const updateDireccion = async (req, res) => {
  try {
    const { id } = req.params;
    const direccion = await Direccion.findByPk(id);

    if (direccion) {
      const actualizada = await direccion.update(req.body);
      res.status(200).json(actualizada);
    } else {
      res
        .status(404)
        .json({ message: 'Dirección no encontrada para actualizar' });
    }
  } catch (error) {
    console.error('Error al actualizar dirección:', error);
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({
        message: 'Error de validación',
        errors: error.errors.map((e) => e.message),
      });
    }
    res
      .status(500)
      .json({ message: 'Error al actualizar dirección', error: error.message });
  }
};

// Eliminar una dirección
export const deleteDireccion = async (req, res) => {
  try {
    const { id } = req.params;
    const resultado = await Direccion.destroy({ where: { id } });
    if (resultado > 0) {
      res.status(200).json({ message: 'Dirección eliminada exitosamente' });
    } else {
      res
        .status(404)
        .json({ message: 'Dirección no encontrada para eliminar' });
    }
  } catch (error) {
    console.error('Error al eliminar dirección:', error);
    res
      .status(500)
      .json({ message: 'Error al eliminar dirección', error: error.message });
  }
};
