import Departamento from '../models/Departamento.js';
import Hospital from '../models/Hospital.js';

export const getDepartamentos = async (req, res) => {
  try {
    const departamentos = await Departamento.findAll({
      include: { model: Hospital, as: 'hospital' },
    });
    res.json(departamentos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener departamentos', error });
  }
};

export const getDepartamentoById = async (req, res) => {
  try {
    const { id } = req.params;
    const departamento = await Departamento.findByPk(id, {
      include: { model: Hospital, as: 'hospital' },
    });

    if (!departamento) {
      return res.status(404).json({ message: 'Departamento no encontrado' });
    }

    res.json(departamento);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error al obtener el departamento', error });
  }
};

export const createDepartamento = async (req, res) => {
  try {
    const { nombre, jefeDeDepartamento, idHospital } = req.body;

    // Validación: que el hospital exista
    const hospital = await Hospital.findByPk(idHospital);
    if (!hospital) {
      return res.status(400).json({ message: 'Hospital no válido' });
    }

    const nuevoDepartamento = await Departamento.create({
      nombre,
      jefeDeDepartamento,
      idHospital,
    });

    res.status(201).json(nuevoDepartamento);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el departamento', error });
  }
};

export const updateDepartamento = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, jefeDeDepartamento, idHospital } = req.body;

    const departamento = await Departamento.findByPk(id);
    if (!departamento) {
      return res.status(404).json({ message: 'Departamento no encontrado' });
    }

    if (idHospital) {
      const hospital = await Hospital.findByPk(idHospital);
      if (!hospital) {
        return res.status(400).json({ message: 'Hospital no válido' });
      }
    }

    await departamento.update({
      nombre,
      jefeDeDepartamento,
      idHospital,
    });

    res.json(departamento);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error al actualizar el departamento', error });
  }
};

export const deleteDepartamento = async (req, res) => {
  try {
    const { id } = req.params;
    const departamento = await Departamento.findByPk(id);

    if (!departamento) {
      return res.status(404).json({ message: 'Departamento no encontrado' });
    }

    await departamento.destroy();
    res.json({ message: 'Departamento eliminado correctamente' });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error al eliminar el departamento', error });
  }
};
