import { Body, Controller, Get, Post } from '@nestjs/common';
import { Cats } from './cats.interface';
import { CatsService } from './cats.service';
@Controller('cats')
// 使用接口声明会找不到依赖
// https://blog.csdn.net/u011607490/article/details/86577556
export class CatsControll {
  constructor(private catsService: CatsService) {}
  private age = 18;
  @Get()
  getCats(): Record<string, unknown> {
    console.log(this.catsService.Cats);
    console.log(this.age);
    return { message: this.catsService.Cats };
  }

  @Post()
  setCats(@Body() cats: Cats): string {
    this.catsService.Cats = cats.name;
    this.age = 22;
    console.log(cats.name);
    return this.catsService.Cats;
  }
}
