

export class Prioridade {

    async create(request: Request, response: Response) {

        const { descricao } = request.body;
        var result1;
        try {
            
            const result = await prisma.prioridade_reuniao.create({
                data: {
                    descricao: descricao
                }
            });
            
            result1 = result;
            response.send(result);
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

        var result1;
        try {
            
            const result = await prisma.prioridade_reuniao.findMany({

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
    async alterar(request: Request, response: Response) {

        const { pk_prioridade, descricao } = request.body;
        var result1;
        try {
            
            const result = await prisma.prioridade_reuniao.update({
                where: {
               pk_prioridade:pk_prioridade
                },
                data: {
                    descricao: descricao
                }
            });
            
            result1 = result;
            response.send(result);
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

        const { pk_prioridade } = request.body;
        var result1;
        try {
            
            const result = await prisma.prioridade_reuniao.delete({
                where: {
               pk_prioridade:pk_prioridade
                }
            });
            
            result1 = result;
            response.send(result);
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