

export class Reuniao {

    async create(request: Request, response: Response) {

        const { reuniao, participante } = request.body;
        var result1:any;
        try {
            const result = await prisma.reuniao.create({
                data: {
                    "title": reuniao.title,
                    "duracao": reuniao.duracao,
                    "date_realizacao": reuniao.date_realizacao,
                    "tempo_inicio": reuniao.tempo_inicio,
                    "tempo_final": reuniao.tempo_final,
                    "estado_reuniao": reuniao.estado_reuniao,
                    "prioridade_reuniao": { connect: { pk_prioridade: reuniao.prioridade_reuniao } },
                    "sala": { connect: { pk_sala: reuniao.pk_sala } },
                    "usuario": { connect: { pk_usuario: reuniao.pk_usuario } }
    
                }
            });
            result1 = result;

            
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
        try {
            var resultpasr: any[];
            participante.forEach(async (element: any, i: number) => {
                resultpasr[i] = await prisma.participante.create({
                    data: {
                        fk_usuario: element.pk_usuario,
                        fk_reuniao: result1.pk_reuniao
                    }
                })
            });
            
            response.send(result1);
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
            const result = await prisma.reuniao.findMany({

                include: { participante: true }
    
            });
            result1 = result;
            if(result.length === 0) response.send("lista vazia")
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

        const { reuniao, participante } = request.body;
        var result1;
        try {
            
            const result = await prisma.reuniao.update({
                where: { pk_reuniao: reuniao.pk_reuniao },
                data: {
                    "title": reuniao.title,
                    "duracao": reuniao.duracao,
                    "date_realizacao": reuniao.date_realizacao,
                    "tempo_inicio": reuniao.tempo_inicio,
                    "tempo_final": reuniao.tempo_final,
                    "estado_reuniao": reuniao.estado_reuniao,
                    "prioridade_reuniao": { connect: { pk_prioridade: reuniao.prioridade_reuniao } },
                    "sala": { connect: { pk_sala: reuniao.pk_sala } },
                    "usuario": { connect: { pk_usuario: reuniao.pk_usuario } }
                }
            });
            
            result1 = result;
            response.send(result);
        } catch (e:any) {
            response.send("ecooreu algum erro verifica os dados"+e);
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

        try {
            const { reuniao } = request.body;

        const result = await prisma.reuniao.delete({
            where: { pk_reuniao: reuniao.pk_reuniao },

        });
        response.send(result);
   
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                // The .code property can be accessed in a type-safe manner
                if (e.code === 'P2002') {
                    console.log( '')
                }
            }
            throw e
        }

    }

}

/*
try {
   
} catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        if (e.code === 'P2002') {
            console.log( '')
        }
    }
    throw e
}
*/
import { app } from "../imports/importesClient";
import { Prisma } from "@prisma/client";
import { prisma } from "../imports/importesClient";
import { Request, Response } from "../imports/importesClient";
