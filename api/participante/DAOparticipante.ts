



export class Participante {

    async create(request: Request, response: Response) {

        const { pk_usuario, pk_reuniao } = request.body;
        const result = await prisma.participante.create({
            data: {
                fk_reuniao: pk_reuniao,
                fk_usuario: pk_usuario
            }
        });
        response.send(result);
        return result;
    }
    async listar(request: Request, response: Response) {

        const { fk_reuniao, fk_usuario } = request.body;
        const result = await prisma.participante.findMany({
            where: {
            AND :{fk_reuniao : fk_reuniao, fk_usuario:fk_usuario}
            }
        });
        response.send(result);
        return result;
    }

    async alterar(request: Request, response: Response) {

        const { fk_reuniao, fk_usuario , nova } = request.body;
        const result = await prisma.participante.update({
            where: {
                fk_usuario_fk_reuniao :{fk_reuniao : fk_reuniao, fk_usuario:fk_usuario}
            },
            data:{
                fk_reuniao: nova.pk_reuniao,
                fk_usuario: nova.pk_usuario
            }
        });
        response.send(result);
        return result;
    }

    async remove(request: Request, response: Response) {

        const { fk_reuniao, fk_usuario } = request.body;
        const result = await prisma.participante.delete({
            where: {
            fk_usuario_fk_reuniao :{fk_reuniao : fk_reuniao, fk_usuario:fk_usuario}
            }
        });
        response.send(result);
        return result;
    }

}

import { Request, Response } from "../imports/importesClient";
import { app } from "../imports/importesClient";
import { Prisma } from "@prisma/client";
import { prisma } from "../imports/importesClient";