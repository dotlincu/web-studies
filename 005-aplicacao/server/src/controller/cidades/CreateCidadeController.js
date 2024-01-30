import { prisma } from '../../database/client.js'

export class CreateCidadeController {

    async handle(request, response) {
        try {
            const { nome, estado_id } = request.body;

            const cidade = await prisma.cidade.create({

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
        } catch (error) {
            // Manipulação de erros
            console.error('Erro ao criar cidade:', error);

            return response.status(500).json({
                success: false,
                message: 'Erro interno do servidor ao criar cidade.',
                error: error.message || 'Erro desconhecido.',
            });
        }
    }

}