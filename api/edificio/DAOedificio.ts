
export class Edificio {

    async create(request: Request, response: Response) {

        const {  nome } = request.body;
        const result = await prisma.edificio.create({
            data: {
                nome: nome
            }
        });
        response.send(result);
        return result;
    }

    async alterar(request: Request, response: Response) {

        const {  pk_edificio, nome } = request.body;
        const result = await prisma.edificio.update({
            where: {
                pk_edificio: pk_edificio
            },
            data: {
                nome: nome
            }
        });
        response.send(result);
        return result;
    }

    async listar(request: Request, response: Response) {

        const result = await prisma.edificio.findMany({
           
        });
        response.send(result);
        return result;
    }

    async remove(request: Request, response: Response) {

        const { pk_edificio } = request.body;
        const result = await prisma.edificio.delete({
            where: {pk_edificio: pk_edificio
            }
        });
        response.send(result);
        return result;
    }

}

import {  app } from "../imports/importesClient"; 
import { Prisma } from "@prisma/client";
import { prisma } from "../imports/importesClient";
import { Request, Response } from "../imports/importesClient";