

export class Reuniao {

    async create(request: Request, response: Response) {

        const { reuniao, participante } = request.body;
        const result = await prisma.reuniao.create({
            data: {
                "title": reuniao.title,
                "duracao": reuniao.duracao,
                "date_realizacao": reuniao.date_realizacao,
                "tempo_inicio": reuniao.tempo_inicio,
                "tempo_final": reuniao.tempo_final,
                "estado_reuniao": reuniao.estado_reuniao,
                "prioridade_reuniao": { connect: { pk_prioridade: reuniao.prioridade_reuniao } },
                "sala": { connect: { pk_sala: reuniao.pk_sala } }

            }
        });

        var resultpasr: any[];
        participante.forEach(async (element: any, i: number) => {
            resultpasr[i] = await prisma.participante.create({
                data: {
                    fk_usuario: element.pk_usuario,
                    fk_reuniao: result.pk_reuniao
                }
            })
        });
        response.send(result);
        return result;
    }

    async listar(request: Request, response: Response) {
        const result = await prisma.reuniao.findMany({

            include: { participante: true }

        });
        console.log(result);
        response.send(result);
        return result
    }

    async alterar(request: Request, response: Response) {

        const { reuniao, participante } = request.body;

        const result = await prisma.reuniao.update({
            where: { pk_reuniao: reuniao.pk_reuniao },
            data: {
                "title": reuniao.title,
                "duracao": reuniao.duracao,
                "date_realizacao": reuniao.date_realizacao,
                "tempo_inicio": reuniao.tempo_inicio,
                "tempo_final": reuniao.tempo_final,
                "estado_reuniao": reuniao.estado_reuniao,
                "prioridade_reuniao": { connect: { pk_prioridade: reuniao.prioridade_reuniao } },
                "sala": { connect: { pk_sala: reuniao.pk_sala } }

            }
        });
        response.send(result);
        return result;
    }

    async remove(request: Request, response: Response) {

        const { reuniao, participante } = request.body;

        const result = await prisma.reuniao.delete({
            where: { pk_reuniao: reuniao.pk_reuniao },

        });
        response.send(result);
        return result;
    }

}

/*
try {
   
} catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        if (e.code === 'P2002') {
            console.log( '')
        }
    }
    throw e
}
*/
import { app } from "../imports/importesClient";
import { Prisma } from "@prisma/client";
import { prisma } from "../imports/importesClient";
import { Request, Response } from "../imports/importesClient";
