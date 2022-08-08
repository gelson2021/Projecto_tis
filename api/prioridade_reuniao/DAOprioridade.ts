

export class Prioridade {

    async create(request: Request, response: Response) {

        const { descricao } = request.body;
        const result = await prisma.prioridade_reuniao.create({
            data: {
                descricao: descricao
            }
        });
        response.send(result);
        return result;
    }

    async listar(request: Request, response: Response) {
        const result = await prisma.prioridade_reuniao.findMany({

        });
        response.send(result);
        return result;
    }
    async alterar(request: Request, response: Response) {

        const { pk_prioridade, descricao } = request.body;
        const result = await prisma.prioridade_reuniao.update({
            where: {
           pk_prioridade:pk_prioridade
            },
            data: {
                descricao: descricao
            }
        });
        response.send(result);
        return result;
    }

    async remove(request: Request, response: Response) {

        const { pk_prioridade } = request.body;
        const result = await prisma.prioridade_reuniao.delete({
            where: {
           pk_prioridade:pk_prioridade
            }
        });

        return result;
    }

}

import { app } from "../imports/importesClient";
import { Prisma } from "@prisma/client";
import { prisma } from "../imports/importesClient";
import { Request, Response } from "../imports/importesClient";