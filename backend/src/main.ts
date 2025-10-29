import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors({
    origin: [
      'http://localhost:5173',
      'https://ia03-user-registration-mu.vercel.app',
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  });
  await app.listen(process.env.PORT || 3000);
  console.log(`Server running on port ${process.env.PORT || 3000}`);
}

bootstrap().catch((err) => console.error(err));
