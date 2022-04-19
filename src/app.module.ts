import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UserService } from './users/users.service';
import { CatsControll } from './services/cats/cats.controller';
import { CatsService } from './services/cats/cats.service';
import { TestModules } from './services/module/modules.module';
@Module({
  imports: [TestModules],
  controllers: [AppController, UsersController, CatsControll],
  providers: [AppService, UserService, CatsService],
})
export class AppModule {}
