import { prisma } from "../../database/client.js";

export class DeleteEstadoController {
    async handle(request, response) {
        const { id } = request.params;

        const estado = await prisma.estado.delete({
            where: {
                id: parseInt(id)
            }
        });

        return response.json(estado);
    }
}
