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
