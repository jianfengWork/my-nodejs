/**
 * Object 类：Object 是类层次结构的根类，每个类都使用 Object 作为超类
 * 
 * Object 类的方法：
 *  1.public int hashCode()：返回该对象的哈希码值
 *  2.public final Class getClass()：返回此 Object 的运行时类
 *  3.public static String toHexString(int i)：把一个整数转成一个十六进制表示的字符串
 *  4.protected void finalize()：当垃圾回收器确定不存在对该对象的更多引用时，由对象的垃圾回收器调用此方法
 *  5.protected Object clone()：创建并返回此对象的一个副本
 */
public class Student extends Object {}

public class StudentTest {
  public static void main(String[] args) {
    Student s1 = new Student();
    System.out.println(s1.hashCode()); // 11299397
    System.out.println("-----------");

    Student s = new Student();
    Class c = s.getClass();
    String str = c.getName();
    System.out.println(str); // Student
    System.out.println("-----------");
    
  }
}
