/**
 * String 类：由多个字符组成的一串数据。也可以看成是一个字符数组
 * 
 * 构造方法：
 *  public String()：空构造
 *  public String(byte[] bytes)：把字节数组转成字符串
 *  public String(char[] value)：把字符数组转成字符串
 * 
 * 字符串的方法：
 *  public int length()：返回此字符串的长度
 */
public class StringDemo {
  public static void main(String[] args) {
    
    // public String()：空构造
    String s1 = new String();
    System.out.println("s1:" + s1);
    System.out.println("s1.length():" + s1.length());
    System.out.println("--------------------------");

  }
}
