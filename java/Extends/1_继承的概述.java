/**
 * 继承概述：把多个类中相同的内容给提取出来定义到一个类中
 * 格式：class 子类名 extends 父类名 {}
 * 优点：
 *  1.提高代码的复用性
 *  2.提高代码的维护性
 *  3.让类与类之间产生了关系，是多态的前提
 * 缺点：
 *  1.类的耦合性增强了
 * 开发原则：低耦合，高内聚
 *  1.耦合：类与类的关系
 *  2.内聚：自己完成某件事情的能力
 */
class Person {
  public void eat() {
    System.out.println("吃饭");
  }
    
  public void sleep() {
    System.out.println("睡觉");
  }
}

class Student extends Person {}

class Teacher extends Person {}

class ExtendsDemo {
  public static void main(String[] args) {
    Student s = new Student();
    s.eat();
    s.sleep();
    System.out.println("-------------");
    
    Teacher t = new Teacher();
    t.eat();
    t.sleep();
  }
}
