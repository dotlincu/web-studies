import { prisma } from "../../database/client.js";


export class UpdateEstadoController {
    
    async handle(request, response) {
        const { id, nome, sigla } = request.body
        try {

        
            const estado = await prisma.estado.update({

                where: {
                    id
                },

                data: {
                    nome, 
                    sigla
                }

            })

            return response.json(estado)
        } catch (error) {
            if (error.code === 'P2025') {
                // Código P2025 indica que nenhum registro foi encontrado para atualização
                console.error('Erro: ID não encontrado. Nenhum estado foi atualizado.');
                return response.status(404).json({ error: 'ID não encontrado. Nenhum estado foi atualizado.' });
            } else if (error.code === 'P2002' && error.meta && error.meta.target.includes('sigla')) {
                // Código P2002 indica violação de chave única, ou seja, a sigla já existe
                console.error('Erro: Sigla já existe. Nenhum estado foi atualizado.');
                return response.status(400).json({ error: 'Sigla já existe. Nenhum estado foi atualizado.' });
            } else {
                // Outro erro não relacionado ao ID não encontrado ou à violação de chave única
                console.error(error);
                return response.status(500).json({ error: 'Erro interno do servidor.' });
            }
        }
    }
}