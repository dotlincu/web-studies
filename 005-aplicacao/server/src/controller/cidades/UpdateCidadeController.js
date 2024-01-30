import { prisma } from '../../database/client.js'

export class UpdateCidadeController {

    async handle(request, response) {
        try {

        
            const { id, nome, estado_id } = request.body;

            const cidade = await prisma.cidade.update({

                where: {
                    id: parseInt(id)
                },
                data: {
                    nome,
                    estado: {
                        connect: {
                            id: estado_id
                        }
                    }

                }

            });

            return response.json(cidade);
        } catch {
            if (error.code === 'P2025') {
                // Código P2025 indica que nenhum registro foi encontrado para atualização
                console.error('Erro: ID não encontrado. Nenhum estado foi atualizado.');
                return response.status(404).json({ error: 'ID não encontrado. Nenhum estado foi atualizado.' });
            } else {
                // Outro erro
                console.error(error);
                return response.status(500).json({ error: 'Erro interno do servidor.' });
            }
        }
    }

}