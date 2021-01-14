'use strict'

process.on('exit', () => {
  console.log()
})

if (!process.argv[2]) {
  console.error('[组件名]必填')
  process.exit(1)
}

function resolve (dir) {
  return path.join(__dirname, '../', dir)
}

const path = require('path')
const fs = require('fs')
const fileSave = require('file-save')
const uppercamelcase = require('uppercamelcase')
const componentname = process.argv[2]
const chineseName = process.argv[3] || componentname
const ComponentName = uppercamelcase(componentname)
const PackagePath = path.resolve(__dirname, '../packages', componentname)
const Files = [
  {
    filename: 'index.js',
    content: `import ${ComponentName} from './src/main'

/* istanbul ignore next */
${ComponentName}.install = function (Vue) {
  Vue.component(${ComponentName}.name, ${ComponentName})
}

export default ${ComponentName}`
  }, {
    filename: 'src/main.vue',
    content: `<template>
    <div class="zd-${componentname}"> </div>
</template>

<script>
export default {
  name: 'Zd${ComponentName}'
}
</script>`
  }, {
    filename: path.join('../../docs/components/basic', `${componentname}.md`),
    content: `# ${ComponentName} ${chineseName}`
  },
  {
    filename: path.join('../../packages/theme-chalk/src', `${componentname}.scss`),
    content: `@import "mixins/mixins";
@import "common/var";

@include b(${componentname}) {
}`
  },
  {
    filename: path.join('../../types', `${componentname}.d.ts`),
    content: `import { ZdUIComponent } from './component'

/** ${ComponentName} Component */
export declare class Zd${ComponentName} extends ZdUIComponent {
}`
  },
  {
    filename: path.join('../../tests/unit/specs', `${componentname}.spec.js`),
    content: `import { createTest, destroyVM } from '../util';
  import ${ComponentName} from 'packages/${componentname}';

  describe('${ComponentName}', () => {
    let vm;
    afterEach(() => {
      destroyVM(vm);
    });

  it('create', () => {
    vm = createTest(${ComponentName}, true);
    expect(vm.$el).to.exist;
  });
});
    `
  }
]

// 添加到 components.json
const componentsFile = require('../components.json')
if (componentsFile[componentname]) {
  process.error(`${componentname} 已存在`)
  process.exit(1)
}

componentsFile[componentname] = `./packages/${componentname}/index.js`
fileSave(resolve('components.json'))
  .write(JSON.stringify(componentsFile, null, '   '), 'utf8')
  .end('\n')

// 添加到 index.scss
const sassPath = path.join(__dirname, '../packages/theme-chalk/src/index.scss')
const sassImportText = `${fs.readFileSync(sassPath)}@import "./${componentname}.scss";`
fileSave(sassPath)
  .write(sassImportText, 'utf8')
  .end('\n')

// 添加到 zd-ui.d.ts
const elementTsPath = path.join(__dirname, '../types/zd-ui.d.ts')

let elementTsText = `${fs.readFileSync(elementTsPath)}
/** ${ComponentName} Component */
export class ${ComponentName} extends Zd${ComponentName} {}`

const index = elementTsText.indexOf('export') - 1
const importString = `import { Zd${ComponentName} } from './${componentname}'`

elementTsText = elementTsText.slice(0, index) + importString + '\n' + elementTsText.slice(index)

fileSave(elementTsPath)
  .write(elementTsText, 'utf8')
  .end('\n')

// 添加到 .vuepress/config.js
const navConfigFile = require('../docs/.vuepress/config.js')

navConfigFile.themeConfig.sidebar['/components/'][1].children.push('basic/' + componentname)

const navTemp = 'module.exports = ' + JSON.stringify(navConfigFile, null, '  ')

fileSave(path.join(__dirname, '../docs/.vuepress/config.js'))
  .write(navTemp, 'utf8')
  .end('\n')

// 创建package
Files.forEach(file => {
  fileSave(path.join(PackagePath, file.filename))
    .write(file.content, 'utf8')
    .end('\n')
})

console.log('DONE!')
