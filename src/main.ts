import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function start() {
  const PORT: number = Number(process.env.PORT) || 3000;
  const app = await NestFactory.create(AppModule);

  // Swagger 
  const config = new DocumentBuilder()
    .setTitle('User API')
    .setDescription('API для управления пользователями')
    .setVersion('1.0')
    .addTag('user')
    .build();

  app.setGlobalPrefix('api');


  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Swagger is available at http://localhost:${PORT}/api-doc`);
  })
}


start();
