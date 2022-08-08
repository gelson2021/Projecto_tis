
export class Depastamento {

    async create(request: Request, response: Response) {
        console.log("tfste");
        
        const { nome } = request.body;

        console.log(nome);
        
        const result = await prisma.departamento.create({
            data: {
                nome: nome
            }
        });
        response.send(result);
        return result;
    }

    async alterar(request: Request, response: Response) {

        const { pk_departamento, nome } = request.body;
        const result = await prisma.departamento.update({
            where: { pk_departamento: pk_departamento
            },
            data: {
                nome: nome
            }
        });
        response.send(result);
        return result;
    }

    async listar(request: Request, response: Response) {
        const result = await prisma.departamento.findMany({
        });
        response.send(result);
        return result;
    }

    async remove(request: Request, response: Response) {

        const { pk_departamento} = request.body;
        const result = await prisma.departamento.delete({
            where: { pk_departamento: pk_departamento
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