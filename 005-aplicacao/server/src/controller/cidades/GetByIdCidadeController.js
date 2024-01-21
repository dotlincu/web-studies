import { prisma } from "../../database/client.js";


export class GetByIdCidadeController {

    async handle(request, response) {


        // POST
        // request.body

        // GET
        // /cidade/?id=1: request.query
        // /cidade/1: request.params 
        // /cidade/{id}

        const { id } = request.params;

        try {
            const cidade = await prisma.cidade.findUniqueOrThrow({
                where: {
                    id: parseInt(id)
                }
            });
    
            return response.json(cidade);
            
        } catch (error) {
            response.status(400).json({
                message: 'Invalid request.',
                error
            });
        };

    };

};