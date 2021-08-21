/**
 * 构造方法：
 *  给对象的数据进行初始化
 * 
 * 格式：
 *  1.方法名与类名相同
 *  2.没有返回值类型，连 void 都没有
 *  3.没有具体的返回值
 */
class Student {
  private String name;
  private int age;

  public Student() {
    System.out.println("这是无参构造方法");
  }
    
  // 构造方法的重载格式
  public Student(String name) {
    System.out.println("这是带一个String类型的构造方法");
    this.name = name;
  }
    
  public Student(int age) {
    System.out.println("这是带一个int类型的构造方法");
    this.age = age;
  }
    
  public void show() {
    System.out.println(name + "---" + age);
  }
}

class ConstructDemo2 {
  public static void main(String[] args) {
    // 创建对象
    Student s = new Student();
    s.show();
    System.out.println("-------------");
    
    // 创建对象2
    Student s2 = new Student("summer");
    s2.show();
    System.out.println("-------------");
    
    // 创建对象3
    Student s3 = new Student(27);
    s3.show();
    System.out.println("-------------");
  }
}
