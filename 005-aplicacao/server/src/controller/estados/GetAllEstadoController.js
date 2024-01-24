import { prisma } from "../../database/client.js"; 

export class GetAllEstadoController {

    async handle(request, response) {
      
        const estados = await prisma.estado.findMany({
            select: {
                id: true,
                nome: true,
                sigla: true
            }
        });
        return response.json(estados);

    };

};