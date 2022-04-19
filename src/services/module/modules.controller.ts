import { Controller, Get } from '@nestjs/common';
import { ModulesService } from './modules.service';
@Controller('module')
export class TestModuleController {
  // private modulesService: ModulesService;
  private number = 'number';
  // 运行时会进行依赖注入 依赖会通过constructor注入到modulesService中 因此要在module中指定provider
  // 依赖注入只有在形参中定义了(private modulesService: ModulesService)才有 在构造函数内部或者在外部定义的变量不会被注入
  constructor(private modulesService: ModulesService) {
    this.number = '123';
  }

  @Get('modules')
  getModule(): string {
    console.log(this.modulesService.testMoudles());
    return 'module is ok';
  }
}

// @see: https://zhuanlan.zhihu.com/p/419853778 依赖注入
// @see: https://www.jianshu.com/p/07af9dbbbc4b 控制反转
