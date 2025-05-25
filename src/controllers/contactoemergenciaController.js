import { ContactoEmergencia } from '../models/index.js';

// Obtener todos los contactos de emergencia
export const getContactosEmergencia = async (req, res) => {
  try {
    const contactos = await ContactoEmergencia.findAll();
    res.status(200).json(contactos);
  } catch (error) {
    console.error("Error al obtener contactos de emergencia:", error);
    res.status(500).json({ message: 'Error al obtener contactos de emergencia', error: error.message });
  }
};

// Obtener un contacto por ID
export const getContactoEmergenciaById = async (req, res) => {
  try {
    const { id } = req.params;
    const contacto = await ContactoEmergencia.findByPk(id);
    if (contacto) {
      res.status(200).json(contacto);
    } else {
      res.status(404).json({ message: 'Contacto de emergencia no encontrado' });
    }
  } catch (error) {
    console.error("Error al obtener contacto de emergencia:", error);
    res.status(500).json({ message: 'Error al obtener contacto', error: error.message });
  }
};

// Crear un nuevo contacto de emergencia
export const createContactoEmergencia = async (req, res) => {
  try {
    const nuevoContacto = await ContactoEmergencia.create(req.body);
    res.status(201).json(nuevoContacto);
  } catch (error) {
    console.error("Error al crear contacto de emergencia:", error);
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({
        message: 'Error de validación',
        errors: error.errors.map(e => e.message)
      });
    }
    res.status(500).json({ message: 'Error al crear contacto', error: error.message });
  }
};

// Actualizar un contacto de emergencia existente
export const updateContactoEmergencia = async (req, res) => {
  try {
    const { id } = req.params;
    const contacto = await ContactoEmergencia.findByPk(id);

    if (contacto) {
      const actualizado = await contacto.update(req.body);
      res.status(200).json(actualizado);
    } else {
      res.status(404).json({ message: 'Contacto de emergencia no encontrado para actualizar' });
    }
  } catch (error) {
    console.error("Error al actualizar contacto de emergencia:", error);
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({
        message: 'Error de validación',
        errors: error.errors.map(e => e.message)
      });
    }
    res.status(500).json({ message: 'Error al actualizar contacto', error: error.message });
  }
};

// Eliminar un contacto de emergencia
export const deleteContactoEmergencia = async (req, res) => {
  try {
    const { id } = req.params;
    const resultado = await ContactoEmergencia.destroy({ where: { id } });
    if (resultado > 0) {
      res.status(200).json({ message: 'Contacto de emergencia eliminado exitosamente' });
    } else {
      res.status(404).json({ message: 'Contacto de emergencia no encontrado para eliminar' });
    }
  } catch (error) {
    console.error("Error al eliminar contacto de emergencia:", error);
    res.status(500).json({ message: 'Error al eliminar contacto', error: error.message });
  }
};
