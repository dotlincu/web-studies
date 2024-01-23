import express from 'express';
// import { prisma } from "./src/database/client.js";
import cors from 'cors';
import { estadoRouter } from "./src/routes/estados.js";
import { cidadeRouter } from "./src/routes/cidades.js";

const server = express();
const port = 5555;

// ROUTES
server.get('/', (req, res) => {
    res.json({ message: 'Status: Server Running!' });

    res.send('Hello World!');
});

// server.get('/estados', async (req, res) => {
//     const estados = await prisma.estado.findMany();

//     return res.json(estados);
// });

// server.get('/cidades', async (req, res) => {
//     const cidades = await prisma.cidade.findMany();
    
//     return res.json(cidades);
// });

// Middleware para fazer o parsing de JSON
server.use(express.json());

// Middleware para permitir o CORS
server.use(cors());

// Usando os routers
server.use(estadoRouter);
server.use(cidadeRouter);

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});