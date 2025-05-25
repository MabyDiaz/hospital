import express from 'express';
import cors from 'cors';
import { sequelize } from './src/models/index.js';

<<<<<<< HEAD
// Importar rutas
import routerPrincipal from './src/routes/index.js';
=======
import apiRoutes from './src/routes/index.js'; // Importa el index de rutas agrupadas

>>>>>>> 92bba70e866063da3b963f61582bac9732901328

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors()); // 👈 habilitar CORS para todas las rutas
app.use(express.json()); // convierte el body a JSON

app.get('/', (req, res) => {
  res.send('¡Backend funcionando!');
});

// Usar las rutas
app.use('/api', routerPrincipal);

// Iniciar servidor y sincronizar DB
async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión a la base de datos establecida correctamente.');

    // Sincroniza los modelos con la base de datos.
    // force: false (default) - No borra tablas si existen.
    // force: true - Borra y recrea tablas. ¡PELIGROSO en producción!
    // alter: true - Intenta modificar tablas existentes.
    await sequelize.sync({ force: false }); // Cambia bajo tu propio riesgo
    console.log('🔄 Modelos sincronizados con la base de datos.');

    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Error al iniciar el servidor:', error);
  }
}

startServer();
