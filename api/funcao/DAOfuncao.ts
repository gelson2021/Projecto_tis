

export class Funcao {

    async create(request: Request, response: Response) {

        const { nome, departamento } = request.body;
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
        response.send(result);
        return result;
    }

    async alterar(request: Request, response: Response) {

        const {pk_funcao, nome, departamento } = request.body;
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
        response.send(result);
        return result;
    }
    
    async listar(request: Request, response: Response) {
        const result = await prisma.funcao.findMany({

        });
        return result;
    }

    async remove(request: Request, response: Response) {

        const { pk_funcao } = request.body;
        const result = await prisma.funcao.delete({
            where: {
                pk_funcao:pk_funcao
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


