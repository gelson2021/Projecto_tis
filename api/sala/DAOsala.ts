
export class Sala {

    async create(request: Request, response: Response) {

        const { nome, piso, edificio } = request.body;
        const result = await prisma.sala.create({
            data: {
                nome: nome,
                piso: piso,
                edificio: edificio
            }
        });
        response.send(result);
        return result;
    }

    async listar(request: Request, response: Response) {

        const result = await prisma.sala.findMany({

        });
        response.send(result);
        return result;
    }
    async remove(request: Request, response: Response) {

        const { pk_sala } = request.body;
        const result = await prisma.sala.delete({
            where: {
                pk_sala: pk_sala
            }
        });
        response.send(result);
        return result;
    }

    async alterar(request: Request, response: Response) {

        const { pk_sala ,nome, piso, edificio} = request.body;
        const result = await prisma.sala.update({
            where: {
                pk_sala: pk_sala
            },
            data: {
                nome: nome,
                piso: piso,
                edificio: edificio
            }
        });
        response.send(result);
        return result;
    }

}


import { app } from "../imports/importesClient";
import { Prisma } from "@prisma/client";
import { prisma } from "../imports/importesClient";
import { Request, Response } from "../imports/importesClient";


