/**
 * 接口的概述：
 *  1.接口用关键字 interface 表示：interface 接口名 {}
 *  2.类实现接口用 implements 表示：class 类名 implements 接口名 {}
 *  3.接口不能实例化：按照多态的方式实例化
 *  4.接口的子类：
 *    可以是抽象类，但是意义不大
 *    可以是具体类，要重写接口中的所有抽象方法（推荐）
 * 
 * 具体类多态(几乎没有)、抽象类多态(常用)、接口多态(最常用)
 */
// 定义动物培训接口
interface AnimalTrain {
  public abstract void jump();
}

// 抽象类实现接口
abstract class Dog implements AnimalTrain {}

// 具体类实现接口
class Cat implements AnimalTrain {
  public void jump() {
    System.out.println("猫可以跳高了");
  }
}

class InterfaceDemo {
  public static void main(String[] args) {
    // AnimalTrain 是抽象的，无法实例化
    // AnimalTrain at = new AnimalTrain();
    // at.jump();
    
    AnimalTrain at = new Cat();
    at.jump();
  }
}
