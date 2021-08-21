/**
 * main方法格式讲解：public static void main(String[] args) {...}
 *  public：公共的，访问权限是最大的。由于 main 方法是被 jvm 调用，所以权限要够大
 *  static：静态的，不需要创建对象，通过类名就可以访问，方便 jvm 的调用
 *  void：无效返回值。main方法是被 jvm 调用，返回内容给 jvm 没有意义
 *  main：是一个常见的方法入口，多数语言都是以 main 作为入口
 *  String[] args：是一个字符串数组，javac 9_main方法.java => java MainDemo hello world java
 */
class MainDemo {
	public static void main(String[] args) {
		System.out.println(args); 
		System.out.println(args.length); 
		for (int x = 0; x < args.length; x++) {
			System.out.println(args[x]);
		}
	}
}
