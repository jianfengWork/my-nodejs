#### 运行
```
  javac 1_成员变量和局部变量.java
  java VariableDemo
```

#### 抽象类和接口的区别
```
  1.成员区别
    抽象类：
      成员变量：可以变量，也可以常量
      构造方法：有
      成员方法：可以抽象，也可以非抽象
    接口：
      成员变量：只可以常量
      构造方法：无
      成员方法：只可以抽象

  2.关系区别
    类与类：继承，单继承
    类与接口：实现，单实现，多实现
    接口与接口：继承，单继承，多继承

  3.理念区别
    抽象类 被继承体现的是：'is a' 的关系，抽象类中定义的是该继承体系的共性功能
    接口 被实现体现的是：'like a' 的关系，接口中定义的是该继承体系的扩展功能
```

#### 包
```
  1.就是文件夹

  2.作用
    把相同的类名放到不同的包中
    对类进行分类管理
  
  代码中：
  package com.summer; __dirname/com/summer/
```

#### 导包
```
  import com.summer.Demo; __dirname/com/summer/Demo.class

  class Test {
	  public static void main(String[] args) {
      Demo demo = new Demo();
      System.out.println(demo.sum(10, 20));
    }
  }
```

#### 修饰符
```
  权限修饰符：private，void，protected，public
  状态修饰符：static，final
  抽象修饰符：abstract

  类
    权限修饰符：void，public
    状态修饰符：final
    抽象修饰符：abstract

  成员变量
    权限修饰符：private，void，protected，public
    状态修饰符：static，final

  构造方法：
    权限修饰符：private，void，protected，public

  成员方法：
    权限修饰符：private，void，protected，public
    状态修饰符：static，final
    抽象修饰符：abstract
```

#### 集合框架
```
  对象数组
    数组既可以存储基本数据类型，也可以存储引用类型，存储引用类型的时候的数组就叫对象数组

  Collection（单列集合）
    集合可变，只能是引用类型，可以存储不同类型
  
  List(有序，可重复)，是 Collection 的子接口
    ArrayList：List list = new ArrayList();
      底层数据结构是数组，查询快，增删慢
      线程不安全，效率高
    Vector：
      底层数据结构是数组，查询快，增删慢
      线程安全，效率低
    LinkedList：
      底层数据结构是链表，查询慢，增删快
      线程不安全，效率高
  
  Set(无序，唯一)
    HashSet：底层数据结构是哈希表
    LinkedHashSet：底层数据结构由链表和哈希表组成，由链表保证元素有序，由哈希表保证元素唯一
    TreeSet：底层数据结构是红黑树（一种自平衡的二叉树）
  
  Map（双列集合）
    1.Map 集合的数据结构仅仅针对键有效，与值无关
    2.存储的是键值对形式的元素，键唯一，值可重复
    HashMap：底层数据结构是哈希表，线程不安全，效率高
    LinkedHashMap：底层数据结构由链表和哈希表组成，由链表保证元素有序，由哈希表保证元素唯一
    Hashtable：底层数据结构是哈希表，线程安全，效率低
    TreeMap：底层数据结构是红黑树（一种自平衡的二叉树）
  
  泛型，明确类型的工作推迟到创建对象或者调用方法的时候才去明确的特殊的类型
    格式：<数据类型>，只能是引用类型
    优点：
      1.把运行时期的问题提前到了编译期间
      2.避免了强制类型转换
      3.优化了程序设计，让程序更安全
```

#### 错误处理
```
  异常的体系：
  Throwable
    Error
    Exception
      RuntimeException：运行期异常
      非RuntimeException：编译期异常
  
  异常的处理：
    1.JVM 默认处理：把异常的名称，原因，位置等信息输出在控制台
    2.用户处理：try...catch...finally、throws
```

#### IO流 - File
```
  构造方法：
    File file = new File("e:\\demo\\a.txt");
    File file = new File("e:\\demo", "a.txt");
  
  File类的功能：
    创建功能
    删除功能
    重命名功能
    判断功能
    获取功能
    高级获取功能
    过滤器功能
  
  分类：
    1.流向
      输入流：读取数据
      输出流：写出数据
    2.数据类型
      字节流：字节输入流、字节输出流
      字符流：字符输入流、字符输出流
    3.读写
      FileOutputStream：写出数据
      FileInputStream：读取数据
```
