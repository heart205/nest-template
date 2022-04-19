/**
 * @author heart
 * @description 函数式中间件
 * @Date 2022-04-20
 */
// 当您的中间件没有任何依赖关系时，我们可以考虑使用函数式中间件
export function logger(req: Request, res: Response, next: () => void) {
  console.log('进入函数式中间件');
  next();
}
