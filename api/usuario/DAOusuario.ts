
export class Usuario {

    async alterarPasse(request: Request, response: Response) {

        const { pk_usuario, password } = request.body;
        var result1;
        try {
            
            const result = await prisma.usuario.update({
                where: { pk_usuario: pk_usuario },
                data: {
                    "password": password,
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

    async alterarDados(request: Request, response: Response) {

        const { pk_usuario, email, nome, password, perfil, pk_funcao } = request.body;
        var result1;
        try {
            
            const result = await prisma.usuario.update({
                where: { pk_usuario: pk_usuario },
                data: {
                    "email": email,
                    "nome": nome,
                    "password": password,
                    "perfil": perfil == null ? "USER" : perfil,
                    "funcao": { connect: { pk_funcao: pk_funcao } }
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

    async create(request: Request, response: Response) {

        const { email, nome, password, perfil, pk_funcao } = request.body;
        var result1;
        try {
            
            const result = await prisma.usuario.create({
                data: {
                    "email": email,
                    "nome": nome,
                    "password": password,
                    "perfil": perfil == null ? "USER" : perfil,
                    "funcao": { connect: { pk_funcao: pk_funcao } }
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

    async login(request: Request, response: Response) {

        const { email, password } = request.body;
        var result1;
        try {
            
            const result = await prisma.usuario.findFirst({
                where: {
                    AND: {
                        email: email,
                        password: password
                    }
                }
            });
            if (result != null) {
                response.send(result)
    
            }
            else response.send("Usuario não encontrado");
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

    async listar(request: Request, response: Response) {

        const { pk_usuario } = request.body;

        var result1;
        try {
            
            const result = await prisma.usuario.findMany({
                /*where: {
                    pk_usuario: pk_usuario
                },*/
                include: { funcao: true }
    
            })

            result1 = result;
            if(result.length === 0)response.send("lista vazia");
            else response.send(result);
             
        } catch (e:any) {
            response.send("ecooreu algum erro verifica os dados");
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
    /*
        promise.then(function(result) {
            console.log(result); // "Funcionou!"
          }, function(err) {
            console.log(err); // Error: "Deu errado"
          });
          */

    async remove(request: Request, response: Response) {

        const { pk_usuario } = request.body;

        var result1;
        try {
            
            const result = await prisma.usuario.delete({
                where: {
                    pk_usuario: pk_usuario
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


}

import { Request, Response } from "../imports/importesClient";
import { app } from "../imports/importesClient";
import { Prisma } from "@prisma/client";
import { prisma } from "../imports/importesClient";











