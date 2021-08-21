/**
 * static 的特点：可以修饰成员变量，也可以修饰成员方法
 *  1.随着类的加载而加载
 *  2.优先于对象存在
 *  3.被类的所有对象共享
 *    举例：同个班级的学生应该共用同一个班级编号
 *    如果某个成员变量是被所有对象共享的，那么它就应该定义为静态的
 *  4.可以通过类名调用
 *    推荐使用类名调用
 *    静态修饰的内容一般我们称其为：与类相关的，类成员
 * 
 * 注意事项：静态只能访问静态
 *  1.在静态方法中是没有 this 关键字的
 *    静态是随着类的加载而加载，this 是随着对象的创建而存在，静态比对象先存在
 *  2.静态方法只能访问静态的成员变量和静态的成员方法
 *    静态方法：
 *      成员变量：只能访问静态变量
 *      成员方法：只能访问静态成员方法
 *    非静态方法：
 *      成员变量：可以是静态的，也可以是非静态的
 *      成员方法：可是是静态的成员方法，也可以是非静态的成员方法
 */
class Student {
  // 非静态变量
  int num = 10;
    
  // 静态变量
  static int num2 = 20;

  public void show() {
    System.out.println(this.num); // 明确的告诉你访问的是成员变量
    System.out.println(num2);
  }

  public static void method() {
    // 无法从静态上下文中引用非静态 变量 num
    // System.out.println(num);
    System.out.println(num2);
    
    // 无法从静态上下文中引用非静态 方法 function()
    function();
  }

  public void function() {}

}

class StudentDemo {
  public static void main(String[] args) {
    Student s = new Student();
    System.out.println(s.num);
    
    System.out.println(Student.num2);
    System.out.println(s.num2);

    s.show();
    s.method();
  }
}
