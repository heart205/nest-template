import { Injectable, Scope } from '@nestjs/common';

/**
 * @Injectable({scope: Scope.REQUEST | Scope.SINGLETON | Scope.TRANSIENT | Scope.DEFAULT})
 * REQUEST：  一个请求一个实例  请求（REQUEST）：
 * TRANSIENT  一个Controller 一个实例 瞬态（TRANSIENT）
 * 默认（DEFAULT）默认的时候 所有的Controller 都共用一个实例
 */

// 存在作用域链的关系 被依赖方会和依赖方同一生命周期
// 相当于Controller的实例的生命周期取决于Service的生命周期
@Injectable({
  scope: Scope.TRANSIENT,
})
export class CatsService {
  private scoped = 'Cats';
  // 不能有contractor
  get Cats(): string {
    return this.scoped;
  }

  set Cats(str: string) {
    this.scoped = str;
  }
}
