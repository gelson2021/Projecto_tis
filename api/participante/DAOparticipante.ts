



export class Participante {

    async create(request: Request, response: Response) {

        const { pk_usuario, pk_reuniao } = request.body;
        var result1;
        try {
            
            const result = await prisma.participante.create({
                data: {
                    fk_reuniao: pk_reuniao,
                    fk_usuario: pk_usuario
                }
            });
            
            result1 = result;
            if(result != null)
                response.send(result);
            else response.send("lista vazia");
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

        const { fk_reuniao, fk_usuario } = request.body;
        var result1;
        try {
            
            const result = await prisma.participante.findMany({
                where: {
                AND :{fk_reuniao : fk_reuniao, fk_usuario:fk_usuario}
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

    async alterar(request: Request, response: Response) {

        const { fk_reuniao, fk_usuario , nova } = request.body;
        var result1;
        try {
            
            const result = await prisma.participante.update({
                where: {
                    fk_usuario_fk_reuniao :{fk_reuniao : fk_reuniao, fk_usuario:fk_usuario}
                },
                data:{
                    fk_reuniao: nova.pk_reuniao,
                    fk_usuario: nova.pk_usuario
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

        const { fk_reuniao, fk_usuario } = request.body;
        var result1;
        try {
            
            const result = await prisma.participante.delete({
                where: {
                fk_usuario_fk_reuniao :{fk_reuniao : fk_reuniao, fk_usuario:fk_usuario}
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

import { Request, Response } from "../imports/importesClient";
import { app } from "../imports/importesClient";
import { Prisma } from "@prisma/client";
import { prisma } from "../imports/importesClient";