import Hospital from '../models/Hospital.js';
import Departamento from '../models/Departamento.js';

export const getHospitales = async (req, res) => {
  try {
    const hospitales = await Hospital.findAll({
      include: { model: Departamento },
    });
    res.json(hospitales);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener hospitales', error });
  }
};

export const getHospitalById = async (req, res) => {
  try {
    const { id } = req.params;
    const hospital = await Hospital.findByPk(id, {
      include: { model: Departamento },
    });

    if (!hospital) {
      return res.status(404).json({ message: 'Hospital no encontrado' });
    }

    res.json(hospital);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el hospital', error });
  }
};

export const createHospital = async (req, res) => {
  try {
    const nuevoHospital = await Hospital.create(req.body);

    res.status(201).json(nuevoHospital);
  } catch (error) {
    console.error('Error al crear un hospital:', error);
    if (
      error.name === 'SequelizeValidationError' ||
      error.name === 'SequelizeUniqueConstraintError'
    ) {
      return res.status(400).json({
        message: 'Error de validación',
        errors: error.errors.map((e) => e.message),
      });
    }
    res
      .status(500)
      .json({ message: 'Error interno del servidor', error: error.message });
  }
};

export const updateHospital = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre } = req.body;

    const hospital = await Hospital.findByPk(id);
    if (!hospital) {
      return res.status(404).json({ message: 'Hospital no encontrado' });
    }

    await hospital.update({ nombre });

    res.json(hospital);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el hospital', error });
  }
};

export const deleteHospital = async (req, res) => {
  try {
    const { id } = req.params;

    const hospital = await Hospital.findByPk(id);
    if (!hospital) {
      return res.status(404).json({ message: 'Hospital no encontrado' });
    }

    await hospital.destroy();
    res.json({ message: 'Hospital eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el hospital', error });
  }
};
