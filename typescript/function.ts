function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(12, 5));

// never 一个函数永远执行不完
function throwError(message: string, code: number): never {
  throw {
    message,
    code
  }
}
throwError('not found', 404)

// 可选参数应在最后
function buildName(firstName: string, lastName?: string) {}
