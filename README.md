# 介绍
该项目是基于vue的UI组件库模板，其中已经集成element-ui ,可基于element组件的二次开发。文档采用vuepress，文档配置具体参考vuepress。

# 开始
项目开始前，修改package.json的name为你所想生成的组件库名称，同时修改main的入口、重命名types下的入口文件。


## 起步
```bash
npm i 
# or
yarn 
```

## 组件开发

```bash
make new <组件名>（采用连字符形式：a-comp） <中文名>

```

> 脚本会直接生成组件文件、样式文件、测试文件、说明文档。

## 组件注册
```bash
npm run build:file
```

## 打包
```
npm run dist
```
> 打包时会重新注册组件、打包样式文件、打包组件

## 其他
```bash
# 测试
npm run test
# 生成测试分析结果 tests/unit/coverage/
```

