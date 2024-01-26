import { prisma } from "../../database/client.js";

export class DeleteEstadoController {
    async handle(request, response) {
        const { id } = request.params;

        try {

        
            const estado = await prisma.estado.delete({
                where: {
                    id: parseInt(id)
                }
            });

            return response.json(estado);
        } catch (error) {
            if (error.code === 'P2025') {
                // Código P2025 indica que nenhum registro foi encontrado para exclusão
                console.error('Erro: ID não encontrado. Nenhum estado foi excluído.');
                return response.status(404).json({ error: 'ID não encontrado. Nenhum estado foi excluído.' });
                
            } else {
                // Outro erro não relacionado ao ID não encontrado
                console.error(error);
                return response.status(500).json({ error: 'Erro interno do servidor.' });
            }
        }
    }
}
