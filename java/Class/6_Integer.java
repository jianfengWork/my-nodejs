/**
 * Integer 类：Integer 类型的对象包含 int 类型的字段
 * 
 * Integer的构造方法：
 *  public Integer(int value)
 *  public Integer(String s)：由数字字符组成
 */
public class IntegerDemo {
  public static void main(String[] args) {
    // 方式1
    int i = 100;
    Integer ii = new Integer(i);
    System.out.println("ii:" + ii);

    // 方式2
    String s = "100";
    Integer iii = new Integer(s);
    System.out.println("iii:" + iii);
  }
}
