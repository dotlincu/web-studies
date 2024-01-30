import { prisma } from "../../database/client.js";

export class DeleteEstadoController {

    async handle(request, response) {

        try {
        
            const { id } = request.body;

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
            } else if (error.code === 'P2003' && error.meta?.modelName === 'Estado' && error.meta?.field_name === 'foreign key') {
                // Código P2003 indica violação de chave estrangeira
                console.error('Erro: Violação de chave estrangeira. Existem dependências associadas a este estado.');
                return response.status(400).json({ error: 'Existem dependências associadas a este estado. Nenhum estado foi excluído.' });
            } else {
                // Outro erro não relacionado ao ID não encontrado
                console.error(error);
                return response.status(500).json({ error: 'Erro interno do servidor.' });
            }
        }
    }
}