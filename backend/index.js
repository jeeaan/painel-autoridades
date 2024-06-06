const express = require('express');
const cors = require('cors');
const app = express();
const apiRoutes = require('./src/routes/api');

const PORT = process.env.PORT || 3000;

app.use(cors());

// Middlewares
app.use(express.json()); // Para lidar com JSON

// Rotas
app.use('/api', apiRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});