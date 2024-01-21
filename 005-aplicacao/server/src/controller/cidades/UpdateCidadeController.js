import { prisma } from "../../database/client.js";

export class UpdateCidadeController {
    async handle(request, response) {
        const { id } = request.body;

        const cidade = await prisma.cidade.update({

            where: {
                id
            },
            
            data: {
                nome: request.body.nome,
                sigla: request.body.sigla
            }
        });

        return response.json(cidade);

    };
};