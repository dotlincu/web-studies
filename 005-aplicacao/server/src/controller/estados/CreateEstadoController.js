import { prisma } from '../../database/client.js'

export class CreateEstadoController {

    async handle(request, response) {

        try {
            console.log(request.body);

            // request.body -> JSON
            const { nome, sigla } = request.body;

            // Validações: model, DTO, Parser, ...
            if (nome === "") {
                return response.status(400).json({
                    message: 'Invalid data. Nome and sigla are required.'
                })
            };

            // Sanitização ...

            // Persistência dos dados -> Model
            const estado = await prisma.estado.create({
                data: {
                    nome,
                    sigla
                }
            });

            return response.json(estado);
        } catch (error) {
            if (error.code === 'P2002' && error.meta.target.includes('sigla')) {
              // Trate a violação de restrição única aqui
              console.error('Erro: A sigla já está em uso.');
            } else {
              // Outro erro não relacionado à violação de restrição única
              console.error(error);
            }
        }
    }
}