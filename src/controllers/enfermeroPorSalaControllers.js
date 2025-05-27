import EnfermeroPorSala from '../models/EnfermeroPorSala.js';
import Enfermero from '../models/Enfermero.js';
import Sala from '../models/Sala.js';

export const getAll = async (req, res) => {
  try {
    const data = await EnfermeroPorSala.findAll({
      include: [
        {
          model: Enfermero,
          attributes: ['id', 'nombre', 'apellido'] // seleccioná solo los campos que quieras
        },
        {
          model: Sala,
          attributes: ['id', 'nombre'] // idem
        }
      ]
    });
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
