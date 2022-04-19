/**
 * @author heart
 * @description 中间件
 * @Date 2022-04-19
 */

import { Injectable, NestMiddleware } from '@nestjs/common';
@Injectable()
export class ModulesMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    next();
  }
}
