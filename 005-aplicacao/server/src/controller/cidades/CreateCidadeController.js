import { prisma } from '../../database/client.js';

export class CreateCidadeController {

    async handle(request, response) {

        console.log(request.body);

        // request.body -> JSON
        const { nome, estado_id } = request.body;

        // Validações: model, DTO, Parser, ...
        if (nome === "") {
            return response.status(400).json({
                message: 'Invalid data. Nome and estado_id are required.'
            });
        };
        
        // Persistência dos dados -> Model
        const cidade = await prisma.cidade.create({
            data: {
                nome,
                estado_id
            }
        });

        return response.json(cidade);

    };
};