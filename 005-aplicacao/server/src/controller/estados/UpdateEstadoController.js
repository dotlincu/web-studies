import { prisma } from "../../database/client.js";

export class UpdateEstadoController {
    async handle(request, response) {
        const { id } = request.body;

        try {

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
        } catch (error) {
            return response.status(404).json({ error: "Estado não encontrado." });
        }

    };
};