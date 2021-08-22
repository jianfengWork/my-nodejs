/**
 * 继承的特点：
 *  1.只支持单继承，不支持多继承
 *  2.支持多层继承(继承体系) => 父父 > 父 > 子
 * 
 * 注意事项：
 *  1.子类只能继承父类所有非私有的成员(成员方法和成员变量)
 *  2.子类不能继承父类的构造方法，但是可以通过 super 关键字去访问父类构造方法
 */
class GrandFather {
  public void show() {
    System.out.println("我是爷爷");
  }
}

class Father extends GrandFather {
  public void method(){
    System.out.println("我是老子");
  }
}

class Son extends Father {}

class ExtendsDemo2 {
  public static void main(String[] args) {
    Son s = new Son();
    s.show(); // 使用爷爷的
    s.method(); // 使用父亲的
  }
}
