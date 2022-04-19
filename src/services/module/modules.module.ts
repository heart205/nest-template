import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { TestModuleController } from './modules.controller';
import { ModulesService } from './modules.service';
import { ModulesMiddleware } from './modules.middleware';
import { logger } from './logger.middleware';

@Module({
  controllers: [TestModuleController],
  providers: [ModulesService],
})
export class TestModules implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // forRoutes 路由路径 或者是请求方法
    // 如果是路由路径 (路由路径需要逐级匹配)
    // get: module/modules/1  forRouter可以是 module module/modules module/modules/1 都可以进入中间件
    // consumer.apply(ModulesMiddleware).forRoutes('module');
    // 2. 另外一种写法
    // 这里的路径需要指定为详细的路径 或者为模式匹配
    consumer
      .apply(ModulesMiddleware, logger)
      // 采用一个字符串，多个字符串或一个 RouteInfo 对象来标识要排除的路由
      .exclude(
        { path: 'module/modules/1', method: RequestMethod.GET },
        { path: 'module/modules/2', method: RequestMethod.GET },
        'modules/*',
      )
      // forRoutes() 可接受一个字符串、多个字符串、对象、一个控制器类甚至多个控制器类
      .forRoutes({ path: 'module/*', method: RequestMethod.GET });
  }
}
