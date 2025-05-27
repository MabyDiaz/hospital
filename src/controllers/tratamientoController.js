import Tratamiento from '../models/Tratamiento.js';
import HistorialMedico from '../models/HistorialMedico.js';
import Medico from '../models/Medico.js'

export const getTratamientos = async (req, res) => {
  try {
    const tratamientos = await Tratamiento.findAll({
      include: [
        {
          model: HistorialMedico,
          attributes: ['id'],
        },
        {
          model: Medico,
          attributes: ['id'],
        },
      ],
    });

    res.status(200).json(tratamientos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener tratamientos' });
  }
};

export const getTratamientoById = async (req, res) => {
  try {
    const { id } = req.params;
    const tratamiento = await Tratamiento.findByPk(id, {
      include: [
        {
          model: HistorialMedico,
          attributes: ['id'],
        },
        {
          model: Medico,
          attributes: ['id'],
        },
      ],
    });

    if (tratamiento) {
      res.status(200).json(tratamiento);
    } else {
      res.status(404).json({ message: 'tratamiento no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el tratamiento' });
  }
};

// Crear
export const createTratamiento = async (req, res) => {
  try {
    const nuevoTratamiento = await Tratamiento.create(req.body);
    res.status(201).json(nuevoTratamiento);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear Tratamiento' });
  }
};


// modificar
export const updateTratamiento = async (req, res) => {
  try {
    const { id } = req.params;
    const { fecha, descripcion, esAmbulatorio, idMedico, idHistorialMedico } = req.body;

    const tratamiento = await Tratamiento.findByPk(id);
    if (tratamiento) {
            const tratamientoActualizado = await tratamiento.update({
              fecha, descripcion, esAmbulatorio, idMedico, idHistorialMedico
            });
            res.status(200).json(tratamientoActualizado);
        } else {
            res.status(404).json({ message: 'Cliente no encontrado para actualizar' });
        }
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar Tratamiento' });
  }
};

// eliminar
export const deleteTratamiento = async (req, res) => {
  try {
    const { id } = req.params;
    const tratamiento = await Tratamiento.findByPk(id);

    if (!tratamiento) {
      return res.status(404).json({ message: 'Tratamiento no encontrado' });
    }

    await tratamiento.destroy({
            where: { id: id }
        });
    res.json({ message: 'Tratamiento eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al intentar eliminar el tratamiento',error: error.message });
  }
};