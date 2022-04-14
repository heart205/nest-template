import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';
@Controller('cats')
// 使用接口声明会找不到依赖
// https://blog.csdn.net/u011607490/article/details/86577556
export class CatsControll {
  constructor(private catsService: CatsService) {}

  @Get()
  getCats(): string {
    return ' ';
  }
}
