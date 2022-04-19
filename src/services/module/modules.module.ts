import { Module } from '@nestjs/common';
import { TestModuleController } from './modules.controller';
import { ModulesService } from './modules.service';
@Module({
  controllers: [TestModuleController],
  providers: [ModulesService],
})
export class TestModules {}
