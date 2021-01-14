# 组件开发指南

## Pull Request 规范
- 请先从 dev 分支 checkout 一个新的功能分支，命名：feat_<name>。

- commit 信息要以`[组件名]: 描述信息` 的形式填写，例如 `Button: fix xxx bug`。

- **不要提交** `lib` 里面打包的文件。

- 执行 `npm run dist` 后可以正确打包文件。

- 提交 PR 前请 rebase，确保 commit 记录的整洁。

- 确保 PR 是提交到 `dev` 分支，而不是 `master` 分支。

- 如果是修复 bug，请在 PR 中给出描述信息。

## 开发环境搭建
```shell
git clone ssh://git@192.168.0.200:10022/web-h5/npm-libs/zd-ui-vue.git

git checkout -b feat_<name>
npm run dev

```

打包代码：

```shell
npm run dist
```

## 组件开发规范
- 通过 `make new` 创建组件目录结构，包含测试代码、入口文件、文档
<!-- - 如果包含父子组件，需要更改目录结构，参考 `Button` -->
<!-- - 组件内如果依赖了其他组件，需要在当前组件内引入，参考 `Select` -->

