
export class Usuario {

    async alterarPasse(request: Request, response: Response) {

        const { pk_usuario, password } = request.body;
        const result = await prisma.usuario.update({
            where: { pk_usuario: pk_usuario },
            data: {
                "password": password,
            }

        });
        response.send(result);
        return result;
    }

    async alterarDados(request: Request, response: Response) {

        const { pk_usuario, email, nome, password, perfil, pk_funcao } = request.body;
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
        response.send(result);
        return result;
    }

    async create(request: Request, response: Response) {

        const { email, nome, password, perfil, pk_funcao } = request.body;
        const result = await prisma.usuario.create({
            data: {
                "email": email,
                "nome": nome,
                "password": password,
                "perfil": perfil == null ? "USER" : perfil,
                "funcao": { connect: { pk_funcao: pk_funcao } }
            }
        });
        response.send(result);
        return result;
    }

    async login(request: Request, response: Response) {

        const { email, password } = request.body;
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

        return result;
    }

    async listar(request: Request, response: Response) {

        const { pk_usuario } = request.body;


        const result = await prisma.usuario.findMany({
            /*where: {
                pk_usuario: pk_usuario
            },*/
            include: { funcao: true }

        }).catch(e => {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                if (e.code === 'P2002') {
                    console.log(
                        'There is a unique constraint violation, a new user cannot be created with this email'
                    )
                    response.send("erro1");
                }
                else
                    response.send("erro2");
            }//else response.send("erro3");
        })
        if (result == null) console.log("nada");
        else
            console.log(result);
        response.send(result);
        return result;
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
        const result = await prisma.usuario.delete({
            where: {
                pk_usuario: pk_usuario
            }
        });
        response.send(result);
        return result;
    }


}

import { Request, Response } from "../imports/importesClient";
import { app } from "../imports/importesClient";
import { Prisma } from "@prisma/client";
import { prisma } from "../imports/importesClient";











