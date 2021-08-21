/**
 * 封装：是指隐藏对象的属性和实现细节，仅对外提供公共访问方式
 * 
 * private:
 *  是一个权限修饰符
 *  可以修饰成员变量和成员方法
 *  被其修饰的成员只能在本类中被访问
 */
class Student {
  // 姓名
  String name;
  // 年龄
  private int age;
    
  // 年龄获取值
	public int getAge() {
		return age;
	}
  
  // 年龄设置值
  public void setAge(int a) {
    if (a < 0 || age > 120) {
      System.out.println("你给的年龄有问题");
    } else {
      age = a;
    }
  }
    
  // show() 方法，显示所有成员变量值
  public void show() {
    System.out.println("姓名：" + name);
    System.out.println("年龄：" + age);
  }
}

class StudentDemo {
  public static void main(String[] args) {
    // 创建学生对象
    Student s = new Student();
    s.show();
    System.out.println("--------------");
    
    // 给成员变量赋值
    s.name = "summer";
    s.setAge(27);
    s.show();
    System.out.println("--------------");
    
    // 通过方法给值
    s.setAge(-27);
    s.show();
    System.out.println("--------------");
  }
}
