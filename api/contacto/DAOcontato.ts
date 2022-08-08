
export class Contato {

    async create(request: Request, response: Response) {

        const { numero, pk_usuario } = request.body;
        const result = await prisma.contacto.create({
            data: {
                fk_usuario: pk_usuario,
                numero: numero
            }
        });
        response.send(result);
        return result;
    }

    async alterar(request: Request, response: Response) {

        const { numero, pk_usuario } = request.body;
        const result = await prisma.contacto.update({
            where: {numero:numero},
            data: {
                fk_usuario: pk_usuario,
                numero: numero
            }
        });
        response.send(result);
        return result;
    }


    async listar(request: Request, response: Response) {

        const { fk_usuario } = request.body;
        const result = await prisma.contacto.findMany({
            where: {
                fk_usuario: fk_usuario
            }
        });
        response.send(result);
        return result;
    }


    async remove(request: Request, response: Response) {

        const { numero } = request.body;
        const result = await prisma.contacto.delete({
            where: {
                numero: numero
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