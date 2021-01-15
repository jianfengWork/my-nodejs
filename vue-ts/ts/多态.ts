class Person {
  private name;
  private age;
}

class Staff extends Person {
  private job;
}

class Manager extends Staff {
  private count;
}

// 子类是父类的一种特殊实现，父类是子类的统一实现
const he: Person = new Staff();
// const he: Manager = new Person();
