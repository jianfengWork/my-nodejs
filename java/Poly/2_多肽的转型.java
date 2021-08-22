/**
 * 多肽优点：
 *  1.提高代码的维护性
 *  2.提高代码的扩展性
 * 
 * 多肽缺点：
 *  1.不能使用子类的特有功能
 * 优化：
 *  1.创建子类对象调用方法即可（不推荐，占内存）
 *  2.把父类的引用强制转换为子类的引用（向下转型）
 * 
 * 对象间的转型：
 *  1.向上转型：Fu f = new Zi();
 *  2.向下转型：Zi z = (Zi)f;
 */
class Fu {
  public void show() {
    System.out.println("show fu");
  }
}

class Zi extends Fu {
  public void show() {
    System.out.println("show zi");
  }
    
  public void method() {
    System.out.println("method zi");
  }

}

class DuoTaiDemo4 {
  public static void main(String[] args) {
    Fu f = new Zi();
    f.show();
    // f.method();
    
    // 创建子类对象（占内存）
    // Zi z = new Zi();
    // z.show();
    // z.method();

    // 向下转型
    Zi z = (Zi)f;
    z.show();
    z.method();
  }
}
