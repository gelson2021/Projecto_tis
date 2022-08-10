

export class Funcao {

    async create(request: Request, response: Response) {

        const { nome, departamento } = request.body;
        var result1;
        try {
            
            const result = await prisma.funcao.create({
                data: {
                    nome: nome,
                    departamento: {
                        connectOrCreate: {
                            where: {
                                pk_departamento: departamento.id
                            },
                            create: {
                                nome: departamento.nome
                            }
                        }
                    }
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

        const {pk_funcao, nome, departamento } = request.body;
        var result1;
        try {
            
            const result = await prisma.funcao.update({
                where: {
                    pk_funcao:pk_funcao
                },
                data: {
                    nome: nome,
                    departamento: {
                        connectOrCreate: {
                            where: {
                                pk_departamento: departamento.id
                            },
                            create: {
                                nome: departamento.nome
                            }
                        }
                    }
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
            
            const result = await prisma.funcao.findMany({

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

        const { pk_funcao } = request.body;
        var result1;
        try {
            
            const result = await prisma.funcao.delete({
                where: {
                    pk_funcao:pk_funcao
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


