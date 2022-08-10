
export class Contato {

    async create(request: Request, response: Response) {

        const { numero, pk_usuario } = request.body;
        var result1;
        try {
            const result = await prisma.contacto.create({
                data: {
                    fk_usuario: pk_usuario,
                    numero: numero
                }
            });
            result1 = result;
            if(result == null)
                response.send("lista vazia");
            else response.send(result);
        } catch (e:any) {
            response.send("ecooreu algum erro verifica os dados"+e);
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                // The .code property can be accessed in a type-safe manner
                response.send(e);
                if (e.code === 'P2002') {
                    console.log(
                        'There is a unique constraint violation, a new user cannot be created with this email'
                    )
                }
            }
            throw e
        }
        return result1;
        
    }

    async alterar(request: Request, response: Response) {

        const { numero, pk_usuario } = request.body;
        var result1;
        try {
            const result = await prisma.contacto.update({
                where: {numero:numero},
                data: {
                    fk_usuario: pk_usuario,
                    numero: numero
                }
            });
            result1 = result;
            if(result == null)
                response.send("lista vazia");
            else response.send(result);
        } catch (e:any) {
            response.send("ecooreu algum erro verifica os dados"+e);
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                // The .code property can be accessed in a type-safe manner
                response.send(e);
                if (e.code === 'P2002') {
                    console.log(
                        'There is a unique constraint violation, a new user cannot be created with this email'
                    )
                }
            }
            throw e
        }
        return result1;
        
    }


    async listar(request: Request, response: Response) {

        const { fk_usuario } = request.body;
        var result1;
        try {
            const result = await prisma.contacto.findMany({
                where: {
                    fk_usuario: fk_usuario
                }
            });
            result1 = result;
            if(result.length === 0)response.send("lista vazia");
            else   response.send(result);
        } catch (e:any) {
            response.send("ecooreu algum erro verifica os dados"+e);
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                // The .code property can be accessed in a type-safe manner
                response.send(e);
                if (e.code === 'P2002') {
                    console.log(
                        'There is a unique constraint violation, a new user cannot be created with this email'
                    )
                }
            }
            throw e
        }
        return result1;
        
    }


    async remove(request: Request, response: Response) {

        const { numero } = request.body;
        var result1;
        try {
            const result = await prisma.contacto.delete({
                where: {
                    numero: numero
                }
            });
            result1 = result;
            if(result == null)
                response.send("lista vazia");
            else response.send(result);
        } catch (e:any) {
            response.send("ecooreu algum erro verifica os dados"+e);
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                // The .code property can be accessed in a type-safe manner
                response.send(e);
                if (e.code === 'P2002') {
                    console.log(
                        'There is a unique constraint violation, a new user cannot be created with this email'
                    )
                }
            }
            throw e
        }
        return result1;
       
    }

}



import { app } from "../imports/importesClient";
import { Prisma } from "@prisma/client";
import { prisma } from "../imports/importesClient";
import { Request, Response } from "../imports/importesClient";