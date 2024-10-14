import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT: number = Number.parseInt(process.env.PORT);

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const origins = [process.env.FRONTEND_URL];

  app.enableCors({
    origin: origins,
    credentials: true,
  });

  await app.listen(PORT);
}

bootstrap();