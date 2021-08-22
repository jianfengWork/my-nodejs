class ArrayDemo {
  public static void main(String[] args) {
    // 定义数组
    int[] arr = {28, 55, 37, 46, 19};
    
    // 遍历
    printArray(arr);
  }

  public static void printArray(int[] arr) {
    System.out.print("[");
    for (int x = 0; x < arr.length; x++) {
      if (x == arr.length - 1) {
        System.out.println(arr[x] + "]");
      } else {
        System.out.print(arr[x] + ", ");
      }
    }
  }

}
