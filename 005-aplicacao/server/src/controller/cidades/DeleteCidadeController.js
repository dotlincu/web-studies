import { prisma } from '../../database/client.js'

export class DeleteCidadeController {

    async handle(request, response) {
        try {
            const { id } = request.body;

            const cidade = await prisma.cidade.delete({
                where: {
                    id: parseInt(id)
                }
            });

            return response.json(cidade);
        } catch (error) {
            if (error.code === 'P2025') {
                // Código P2025 indica que nenhum registro foi encontrado para exclusão
                console.error('Erro: ID não encontrado. Nenhuma cidade foi excluída.');
                return response.status(404).json({ error: 'ID não encontrado. Nenhuma cidade foi excluída.' });
            } else {
                // Outro erro não relacionado ao ID não encontrado
                console.error(error);
                return response.status(500).json({ error: 'Erro interno do servidor.' });
            }
        }
    }
}