/**
 * StringBuffer 类：线程安全的可变字符串
 * 
 * StringBuffer 和 String 的区别
 *  1.前者长度和内容可变，后者不可变
 *  2.使用前者做字符串的拼接，不会浪费太多的资源
 * 
 * StringBuffer的构造方法
 *  public StringBuffer()：无参构造方法
 *  public StringBuffer(int capacity)：指定容量的字符串缓冲区对象
 * 
 * StringBuffer的方法
 *  public int capacity()：返回当前容量
 *  public int length()：返回长度（字符数）
 */
public class StringBufferDemo {
  public static void main(String[] args) {

    // public StringBuffer()：无参构造方法
    StringBuffer sb = new StringBuffer();
    System.out.println("sb:" + sb);
    System.out.println("sb.capacity():" + sb.capacity());
    System.out.println("sb.length():" + sb.length());
    System.out.println("--------------------------");

  }
}
