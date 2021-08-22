/**
 * 多态：同一个对象(事物)，在不同时刻体现出来的不同状态
 *  猫是猫，猫是动物
 *  水(液体，固体，气态)
 * 
 * 多态的前提：
 *  1.要有继承关系
 *  2.要有方法重写
 *  3.要有父类引用指向子类对象：父 f =  new 子()
 * 
 * 多态中的成员访问特点：
 *  1.成员变量：编译看 F，运行看 F
 *  2.构造方法：创建子类对象的时候，访问父类的构造方法，对父类的数据进行初始化
 *  3.成员方法：编译看 F，运行看 Z
 *  4.静态方法：编译看 F，运行看 F
 * 静态和类相关，算不上重写，所以，访问还是 F 的
 * 成员方法存在方法重写，所以运行看 Z
 */
class Fu {
  public int num = 100;

  public void show() {
    System.out.println("show Fu");
  }
    
  public static void function() {
    System.out.println("function Fu");
  }
}

class Zi extends Fu {
  public int num = 1000;
  public int num2 = 200;

  public void show() {
    System.out.println("show Zi");
  }
    
  public void method() {
    System.out.println("method zi");
  }
    
  public static void function() {
    System.out.println("function Zi");
  }
}

class DuoTaiDemo {
  public static void main(String[] args) {
    // 要有父类引用指向子类对象
    Fu f = new Zi();
    System.out.println(f.num);
    // 找不到符号
    // System.out.println(f.num2);
    
    f.show();
    // 找不到符号
    // f.method();
    f.function();
  }
}
