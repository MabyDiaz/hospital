import Enfermero from '../models/Enfermero.js';

// Obtener todos los enfermeros
export const getEnfermeros = async (req, res) => {
  try {
    const enfermeros = await Enfermero.findAll();
    res.json(enfermeros);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los enfermeros' });
  }
};

// Crear un nuevo enfermero
export const createEnfermero = async (req, res) => {
  try {
    const nuevo = await Enfermero.create(req.body);
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el enfermero' });
  }
};

// Actualizar un enfermero por ID
export const updateEnfermero = async (req, res) => {
  const { id } = req.params;
  try {
    const enfermero = await Enfermero.findByPk(id);
    if (!enfermero) return res.status(404).json({ error: 'No encontrado' });

    await enfermero.update(req.body);
    res.json(enfermero);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el enfermero' });
  }
};

// Eliminar un enfermero por ID
export const deleteEnfermero = async (req, res) => {
  const { id } = req.params;
  try {
    const enfermero = await Enfermero.findByPk(id);
    if (!enfermero) return res.status(404).json({ error: 'No encontrado' });

    await enfermero.destroy();
    res.json({ mensaje: 'Enfermero eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el enfermero' });
  }
};
