/**
 * 继承中构造方法的关系：
 *  1.子类中所有的构造方法默认都会访问父类中空参数的构造方法
 *  2.原因：
 *    因为子类会继承父类中的数据，可能还会使用父类的数据
 *    所以，子类初始化之前，一定要先完成父类数据的初始化
 * 注意：子类每一个构造方法的第一条语句默认都是：super()
 * 
 * 如果父类没有无参构造方法，那么子类的构造方法会 报错
 *  解决方案：
 *    1.父类中加一个无参构造方法
 *    2.通过 super 关键字去显示的调用父类的带参构造方法
 *    3.子类通过 this 去调用本类的其他构造方法
 * 
 * 注意事项：
 *  this(...) 或者 super(...) 必须出现在第一条语句上
 */
class Father {
  int age;

  public Father() {
    System.out.println("Father的无参构造方法");
  }
    
  public Father(String name) {
    System.out.println("Father的带参构造方法");
  }
}

class Son extends Father {
  public Son() {
    super('随便给 Father 数据'); // 此处调用 public Father(String name)
    System.out.println("Son的无参构造方法");
  }
    
  public Son(String name) {
    // super();
    this(); // 此处调用 public Son()
    System.out.println("Son的带参构造方法");
  }
} 

class ExtendsDemo {
  public static void main(String[] args) {
    // 创建对象
    Son s = new Son();
    System.out.println("------------");
    Son s2 = new Son("summer");
  }
}
