.PHONY: dist test
default: help

# build all theme
build-theme:
	npm run build:theme

install:
	npm install

install-cn:
	npm install --registry=http://registry.npm.taobao.org

dev:
	npm run dev

new:
	node script/new.js $(filter-out $@,$(MAKECMDGOALS))


dist: install
	npm run dist


build-docs:
	npm run docs:build

deploy:
	npm run deploy

pub:
	npm run pub

test:
	npm run test:watch

help:
	@echo "   \033[35mmake\033[0m \033[1m命令使用说明\033[0m"
	@echo "   \033[35mmake install\033[0m\t\033[0m\t\033[0m\t\033[0m\t---  安装依赖"
	@echo "   \033[35mmake new <component-name> [中文名]\033[0m\t---  创建新组件 package. 例如 'make new button 按钮'"
	@echo "   \033[35mmake dev\033[0m\t\033[0m\t\033[0m\t\033[0m\t---  开发模式"
	@echo "   \033[35mmake dist\033[0m\t\033[0m\t\033[0m\t\033[0m\t---  组件打包"
	@echo "   \033[35mmake build-docs\033[0m\t\033[0m\t\033[0m\t---  打包文档"
	@echo "   \033[35mmake deploy\033[0m\t\033[0m\t\033[0m\t\033[0m\t---  部署文档"
	@echo "   \033[35mmake pub\033[0m\t\033[0m\t\033[0m\t\033[0m\t---  发布到 npm 上"
