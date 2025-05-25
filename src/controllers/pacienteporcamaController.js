import { PacientePorCama } from '../models/index.js';

// Obtener todos los registros de pacientes por cama
export const getPacientesPorCama = async (req, res) => {
  try {
    const registros = await PacientePorCama.findAll();
    res.status(200).json(registros);
  } catch (error) {
    console.error("Error al obtener pacientes por cama:", error);
    res.status(500).json({ message: 'Error al obtener pacientes por cama', error: error.message });
  }
};

// Obtener un registro por ID
export const getPacientePorCamaById = async (req, res) => {
  try {
    const { id } = req.params;
    const registro = await PacientePorCama.findByPk(id);
    if (registro) {
      res.status(200).json(registro);
    } else {
      res.status(404).json({ message: 'Registro no encontrado' });
    }
  } catch (error) {
    console.error("Error al obtener paciente por cama:", error);
    res.status(500).json({ message: 'Error al obtener registro', error: error.message });
  }
};

// Crear un nuevo registro
export const createPacientePorCama = async (req, res) => {
  try {
    const nuevoRegistro = await PacientePorCama.create(req.body);
    res.status(201).json(nuevoRegistro);
  } catch (error) {
    console.error("Error al crear paciente por cama:", error);
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({
        message: 'Error de validación',
        errors: error.errors.map(e => e.message)
      });
    }
    res.status(500).json({ message: 'Error al crear paciente por cama', error: error.message });
  }
};

// Actualizar un registro existente
export const updatePacientePorCama = async (req, res) => {
  try {
    const { id } = req.params;
    const registro = await PacientePorCama.findByPk(id);

    if (registro) {
      const actualizado = await registro.update(req.body);
      res.status(200).json(actualizado);
    } else {
      res.status(404).json({ message: 'Registro no encontrado para actualizar' });
    }
  } catch (error) {
    console.error("Error al actualizar paciente por cama:", error);
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({
        message: 'Error de validación',
        errors: error.errors.map(e => e.message)
      });
    }
    res.status(500).json({ message: 'Error al actualizar paciente por cama', error: error.message });
  }
};

// Eliminar un registro
export const deletePacientePorCama = async (req, res) => {
  try {
    const { id } = req.params;
    const resultado = await PacientePorCama.destroy({ where: { id } });
    if (resultado > 0) {
      res.status(200).json({ message: 'Registro eliminado exitosamente' });
    } else {
      res.status(404).json({ message: 'Registro no encontrado para eliminar' });
    }
  } catch (error) {
    console.error("Error al eliminar paciente por cama:", error);
    res.status(500).json({ message: 'Error al eliminar paciente por cama', error: error.message });
  }
};
