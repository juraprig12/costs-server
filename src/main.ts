import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// yarn add @nestjs/core@8.4.7

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(process.env.PORT || 5555, () =>
    console.log(`Server started on port ${process.env.PORT}`),
  );
}
bootstrap();
