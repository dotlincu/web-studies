import { prisma } from "../../database/client.js";

export class UpdateEstadoController {
    async handle(request, response) {
        const { id } = request.body;

        const estado = await prisma.estado.update({

            where: {
                id
            },
            
            data: {
                nome: request.body.nome,
                sigla: request.body.sigla
            }
        });

        return response.json(estado);

    };
};