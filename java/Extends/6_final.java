/**
 * final：修饰类，方法，变量
 * 特点：
 *  1.修饰类，该类不能被继承
 *  2.修饰方法，该方法不能被重写(覆盖，复写)
 *  3.修饰变量，该变量不能被重新赋值
 */

// final class Fu // 无法从最终Fu进行继承

class Fu {
  public int num = 10;
  public final int num2 = 20;

  public final void show() {}

}

class Zi extends Fu {
  // Zi 中的 show() 无法覆盖 Fu 中的 show()
  public void show() {
    num = 100;
    System.out.println(num);
    
    // 无法为最终变量 num2 分配值
    // num2 = 200;
    System.out.println(num2);
  }
}

class FinalDemo {
  public static void main(String[] args) {
    Zi z = new Zi();
    z.show();
  }
}
