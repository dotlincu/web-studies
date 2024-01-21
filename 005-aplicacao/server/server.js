import express from "express";
import { prisma } from "./src/database/client.js";
import { estadoRouter } from "./src/routes/estados.js";
import { cidadeRouter } from "./src/routes/cidades.js";

const server = express();
const port = 5555;

// ROUTES
server.get('/', (req, res) => {
    res.json({ message: 'Status: Server Running!' });

    res.send('Hello World!');
});

server.get('/estados', async (req, res) => {
    const estados = await prisma.estado.findMany();

    return res.json(estados);
});

server.get('/cidades', async (req, res) => {
    const cidades = await prisma.cidade.findMany();

    return res.json(cidades);
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

server.use(express.json());
server.use(estadoRouter);
server.use(cidadeRouter);
