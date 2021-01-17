### 启动
```
  npm install
  npm run build
```

### 安装
```
  全局 npm install @babel/cli -g

  1.配套库
  npm install @babel/cli @babel/core @babel/preset-env -D

  2.配套库
  npm install babel-cli babel-preset-es2015 babel-register -D
  babel-preset-es2015: es6 转 es5
  babel-register: 实时编译 es6
```

### 使用
```
  直接输出在终端
  babel demo.js

  输出单个文件
  babel express.js --out-file build.js（简写 -o）

  监测文件的修改同时编译: --watch
  babel express.js --watch --out-file build.js

  输出目录
  babel src --out-dir dist（简写 -d）

  编译整个src文件夹目录并将其输出到单个文件
  babel src --out-file build.js

  编译src目录的时候忽略test和spec文件: --ignore
  npx babel src --out-dir dist --ignore test.js,spec.js

  生成 source map 文件: -s
  babel src -d dist -s
```
