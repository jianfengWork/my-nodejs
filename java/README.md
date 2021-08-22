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
