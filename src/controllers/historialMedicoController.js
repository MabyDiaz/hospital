import { HistorialMedico } from "../models/HistorialMedico.js";
import { Paciente } from "../models/Paciente.js";

export const getHistorialMedico = async (req, res) => {
  try {
    const historialMedico = await HistorialMedico.findAll({
      include: [
        {
          model: Paciente,
          attributes: ['id'],
        },        
      ],
    });

    res.status(200).json(historialMedico);
  } catch (error) {
    res.status(500).json({ error: 'Error al intentar obtener Historial Medico' });
  }
};

export const getHistorialMedicoById = async (req, res) => {
  try {
    const { cuit } = req.params;
    const historialMedico = await HistorialMedico.findByPk(Id, {
      include: [
        {
          model: Paciente,
          attributes: ['id'],
        },
        
      ],
    });

    if (historialMedico) {
      res.status(200).json(historialMedico);
    } else {
      res.status(404).json({ message: 'Historial Medico no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el Historial Medico' });
  }
};

// Crear
export const createHistorialMedico = async (req, res) => {
  try {
    const nuevoHistorialMedico = await HistorialMedico.create(req.body);
    res.status(201).json(nuevoHistorialMedico);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear Historial Medico' });
  }
};


// modificar
export const updateHistorialMedico = async (req, res) => {
  try {
    const { id } = req.params;
    const { idPaciente } = req.body;

    const historialMedico = await HistorialMedico.findByPk(id);
    if (historialMedico) {
            const historialMedicoActualizado = await historialMedico.update({
              idPaciente
            });
            res.status(200).json(historialMedicoActualizado);
        } else {
            res.status(404).json({ message: 'Cliente no encontrado para actualizar' });
        }
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar Historial Medico' });
  }
};

// eliminar
export const deleteHistorialMedico = async (req, res) => {
  try {
    const { id } = req.params;
    const historialMedico = await HistorialMedico.findByPk(id);

    if (!historialMedico) {
      return res.status(404).json({ message: 'Historial Medico no encontrado' });
    }

    await historialMedico.destroy({
            where: { id: id }
        });
    res.json({ message: 'Historial Medico eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al intentar eliminar el Historial Medico',error: error.message });
  }
};