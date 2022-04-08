import { Controller, Get, Next, Post, Put, Res } from '@nestjs/common';
import { UserService } from './users.service';
import type { Users } from './users';

@Controller('users')
export class UsersController {
  constructor(private readonly appService: UserService) { }

  /**
   * 使用 @Get() @post方法时 如果返回的是对象或者是一个数组 将会被自动序列化 如果返回的是一个基本类型 将不会做任何处理 只是返回
   */
  @Get()
  getProvinces(): Users.User {
    return this.appService.getProvinces();
  }

  @Post()
  postPrice(): string {
    return 'hello world';
  }

  /**
   * res 是函数签名
   * passthrough: true 设置了这个之后 请求之后会将控制权重新交给nest（nest的return就是返回值） 不会影响后续的请求队列 如果没有设置 则执行的权利将还是res的（return无效）
   */
  @Put()
  putPrice(@Res({ passthrough: true }) res: any, @Next() next): string | void {
    // 设置请求头
    res.header('Content-Type', 'text/html');
    // next 走下一个请求的队列
    next();
    // res.send({ data: 'foo' });
    return 'hello world';
    // 由于函数默认返回void 返回了一个空
  }

  @Put()
  putPrice1(@Res() res): string {
    // res.send({ data: 'foo' });
    console.log('运行了');
    // 由于没有设置 { passthrough: true } 导致return的值无效
    return 'hello world';
  }
}
