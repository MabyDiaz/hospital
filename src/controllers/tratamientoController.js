import { Tratamiento, HistorialMedico, Medico } from "../models";


export const getTratamientos = async(req, res) => {
    try {
        const tratamientos = await Tratamiento.findAll({
            include:[
                    {
                        model: HistorialMedico,
                        attributes: ['id']
                    },
                    {
                        model: Medico,
                        attributes: ['id']
                    }

                    ]
        }); 

        res.status(200).json(tratamientos)
        
    } catch (error) {
        res.status(500).json( {error: 'Error al obtener tratamientos'})
    }
}