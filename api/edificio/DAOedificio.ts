
export class Edificio {

    async create(request: Request, response: Response) {

        const {  nome } = request.body;
        var result1;
        try {
            
            const result = await prisma.edificio.create({
                data: {
                    nome: nome
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

        const {  pk_edificio, nome } = request.body;
        var result1;
        try {
            
            const result = await prisma.edificio.update({
                where: {
                    pk_edificio: pk_edificio
                },
                data: {
                    nome: nome
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
            
            const result = await prisma.edificio.findMany({
           
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

        const { pk_edificio } = request.body;
        var result1;
        try {
            const result = await prisma.edificio.delete({
                where: {pk_edificio: pk_edificio
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

import {  app } from "../imports/importesClient"; 
import { Prisma } from "@prisma/client";
import { prisma } from "../imports/importesClient";
import { Request, Response } from "../imports/importesClient";