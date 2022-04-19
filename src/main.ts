import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use() 注册全局中间件
  await app.listen(3000);
}
bootstrap();
