/**
 * this 和 super 的区别：
 *  this代表本类对应的引用
 *  super代表父类存储空间的标识(可以理解为父类引用，可以操作父类的成员)
 * 
 * 使用区别：
 *  1.调用成员变量
 *    this.成员变量：调用本类的成员变量
 *    super.成员变量：调用父类的成员变量
 *  2.调用构造方法
 *    this(...)：调用本类的构造方法
 *    super(...)：调用父类的构造方法
 *  3.调用成员方法
 *    this.成员方法：调用本类的成员方法
 *    super.成员方法：调用父类的成员方法
 */
class Father {
  public int num = 10;
}

class Son extends Father {
  public int num = 20;
    
  public void show() {
    int num = 30;
    System.out.println(num);
    System.out.println(this.num);
    System.out.println(super.num);
  }
}

class ExtendsDemo {
  public static void main(String[] args) {
    Son s = new Son();
    s.show();
  }
}
