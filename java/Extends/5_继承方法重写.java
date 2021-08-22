/**
 * 方法重写：子类中出现了和父类中方法声明一模一样的方法
 * 方法重载：本类中出现的方法名一样，参数列表不同的方法
 * 子类对象调用方法：先找子类本身，再找父类
 * 
 * 方法重写的注意事项：
 *  1.父类中私有方法不能被重写
 *  2.子类重写父类方法的时候，最好声明一模一样
 *  3.
 */
class Phone {
  public void call(String name) {
    System.out.println("给" + name + "打电话");
  }
}

class NewPhone extends Phone {
  public void call(String name) {
    super.call(name);
    System.out.println("干些其他事情");
  }
}

class ExtendsDemo9 {
  public static void main(String[] args) {
    NewPhone np = new NewPhone();
    np.call("summer");
  }
}
