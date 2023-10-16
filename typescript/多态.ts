class Person {
  private name: string;
  private age: number;
}

class Staff extends Person {
  private job: string;
}

class Manager extends Staff {
  private count: number;
}

// 子类是父类的一种特殊实现，父类是子类的统一实现
const he: Person = new Staff();
// const he: Manager = new Person();
