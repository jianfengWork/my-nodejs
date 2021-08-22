/**
 * Scanner 类：用于接收键盘录入数据
 * 
 * 前置：
 *  1.导包
 *  2.创建对象
 *  3.调用方法
 */
import java.util.Scanner;

public class ScannerDemo {
  public static void main(String[] args) {
    // 创建对象
    Scanner sc = new Scanner(System.in);

    int x = sc.nextInt();
    
    System.out.println("x:" + x);
  }
}
