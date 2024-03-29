/**
 * this：某个对象调用那个方法，this 就代表那个对象
 */
class Student {
  private String name;
  private int age;
    
  public String getName() {
    return name; // 这里其实是隐含了 this
  }

  public void setName(String name) {
    this.name = name;
  }
    
  public int getAge() {
    return age;
  }
    
  public void setAge(int age) {
    this.age = age;
  }
}

class StudentTest2 {
  public static void main(String[] args) {
    // 创建一个对象
    Student s1 = new Student();
    s1.setName("summer");
    s1.setAge(27);
    System.out.println(s1.getName() + "---" + s1.getAge());
    
    // 创建第二个对象
    Student s2 = new Student();
    s2.setName("jianfeng");
    s2.setAge(30);
    System.out.println(s2.getName() + "---" + s2.getAge());
  }
}
