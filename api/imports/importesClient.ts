import express, { Request, Response } from 'express'

import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient({
    log: [
        { level: 'warn', emit: 'event' },
        { level: 'info', emit: 'event' },
        { level: 'error', emit: 'event' },
    ],
})

prisma.$on('warn', (e) => {
    console.log(e)
})

prisma.$on('info', (e) => {
    console.log(e)
})

prisma.$on('error', (e) => {
    console.log(e)
})
const app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

prisma.$use(async (params: any, next: any) => {
    // Manipulate params here
    const result = await next(params)
    // See results here
    return result
})

export { Request, Response }
export { app };
export { prisma }