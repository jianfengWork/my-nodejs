/**
 * 高内聚、低耦合（）
 * 类：小狗
 * 共有属性：四条腿、圆脑袋
 * 私有属性：公或母
 * 传参：起名字
 * 成员方法：吃饭、睡觉
 * 私有方法：只对主人摇尾巴
 * 封装：狗叫、放养还是家养
 * 继承：生一窝小狗
 * 多态：小狗像隔壁家的
 */
interface IPoint {
  x: number;
  y: number;
  drawPoint: () => void;
  getDistances: (p: IPoint) => number;
}

class Point implements IPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  drawPoint = () => {
    console.log('x:', this.x, 'y:', this.y)
  }
  getDistances = (p: IPoint) => {
    return this.y + this.y
  };
}



class PersonOne {
  public name: string;

  private job: string = 'front'
  public getJob() {
    return this.job
  }

  private _age: number;
  get age() {
    return this._age
  }
  set age(val) {
    if (val < 0) {
      throw new Error('年龄不为负数')
    }
    this._age = val
  }

  constructor(name: string, age: number) {
    this.name = name;
    console.log(this.job)
  }
}

let p = new PersonOne('blue', 88);
console.log(p.name);
// console.log(p.job);
console.log(p.getJob);
