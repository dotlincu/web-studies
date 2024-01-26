import { prisma } from "../../database/client.js"; 

export class GetAllEstadoController {

    async handle(request, response) {
      
        try {

        
            const estados = await prisma.estado.findMany({
                select: {
                    id: true,
                    nome: true,
                    sigla: true
                }
            });
            return response.json(estados);
        } catch (error) {
            return response.status(500).json({
                message: error.message || 'Unexpected error.'
            })
        }
    };

};