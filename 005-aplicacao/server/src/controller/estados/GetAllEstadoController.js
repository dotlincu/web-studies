import { prisma } from "../../database/client.js"; 

export class GetAllEstadoController {

    async handle(request, response) {
        try {
        
            const estados = await prisma.estado.findMany();
            return response.json(estados);
        } catch (error) {
            return response.status(500).json({
                message: error.message || 'Erro inesperado ao obter estados.'
            });
        }
    }

}