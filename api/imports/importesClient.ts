import express, { Request, Response } from 'express'

import { PrismaClient } from '@prisma/client';

const cors = require('cors');


const prisma = new PrismaClient({
    log: [
        { level: 'warn', emit: 'event' },
        { level: 'info', emit: 'event' },
        { level: 'error', emit: 'event' },
    ],
})

const app = express();
var bodyParser = require('body-parser')
app.use(cors());
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