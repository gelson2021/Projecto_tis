
export class Sala {

    async create(request: Request, response: Response) {

        const { nome, piso, edificio } = request.body;
        var result1;
        try {
            
            const result = await prisma.sala.create({
                data: {
                    nome: nome,
                    piso: piso,
                    edificio: edificio
                }
            });
            result1 = result;
            response.send(result);
        } catch (e:any) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                // The .code property can be accessed in a type-safe manner
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

        var result1;
        try {
            
            const result = await prisma.sala.findMany({

            });
            result1 = result;
            response.send(result);
        } catch (e:any) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                // The .code property can be accessed in a type-safe manner
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

        const { pk_sala } = request.body;
        var result1;
        try {
            
            const result = await prisma.sala.delete({
                where: {
                    pk_sala: pk_sala
                }
            });
            result1 = result;
            response.send(result);
        } catch (e:any) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                // The .code property can be accessed in a type-safe manner
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

        const { pk_sala ,nome, piso, edificio} = request.body;
        var result1;
        try {
            
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
            
            result1 = result;
            response.send(result);
        } catch (e:any) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                // The .code property can be accessed in a type-safe manner
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


