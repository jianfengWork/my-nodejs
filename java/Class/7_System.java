/**
 * System 类：包含一些有用的类字段和方法，不能被实例化
 * 
 * 方法：
 *  public static void gc()：运行垃圾回收器
 *  public static void exit(int status)
 *  public static long currentTimeMillis()
 */
public class SystemDemo {
  public static void main(String[] args) {
    Person sys = new Person("summer", 18);
    System.out.println(sys);

    sys = null; // 让 sys 不再指定堆内存
    System.gc();
  }
}
