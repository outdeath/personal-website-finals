import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // CORS — allow the Vue frontend to access the API
    app.enableCors({
        origin: process.env.FRONTEND_URL || 'http://localhost:5173',
        methods: 'GET,POST',
        allowedHeaders: 'Content-Type, Authorization',
    });

    // Auto-validate incoming request bodies
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
        }),
    );

    const port = process.env.PORT ?? 3000;
    await app.listen(port);
    console.log(`🚀 Backend running on http://localhost:${port}`);
}

bootstrap();
