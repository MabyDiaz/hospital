import Tratamiento from '../models/Tratamiento.js';
import Paciente from '../models/Paciente.js';
import HistorialMedico from '../models/HistorialMedico.js';

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
    const { cuit } = req.params;
    const tratamiento = await Tratamiento.findByPk(Id, {
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

// modificar

// eliminar
