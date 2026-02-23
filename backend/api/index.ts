import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { ValidationPipe } from '@nestjs/common';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import * as express from 'express';

// Cache the Nest app across warm Lambda invocations
let cachedApp: express.Express | null = null;

async function createNestApp(): Promise<express.Express> {
    const expressApp = express();

    const app = await NestFactory.create(AppModule, new (await import('@nestjs/platform-express')).ExpressAdapter(expressApp));

    app.enableCors({
        origin: process.env.FRONTEND_URL || '*',
        methods: 'GET,POST',
        allowedHeaders: 'Content-Type, Authorization',
    });

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
        }),
    );

    await app.init();
    return expressApp;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (!cachedApp) {
        cachedApp = await createNestApp();
    }
    cachedApp(req as any, res as any);
}
