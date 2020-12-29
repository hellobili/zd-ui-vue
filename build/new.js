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
// const fs = require('fs')
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
    filename: path.join('../../examples/docs', `${componentname}.md`),
    content: `## ${ComponentName} ${chineseName}`
  }
  //   {
  //     filename: path.join('../../tests/unit/specs', `${componentname}.spec.js`),
  //     content: `import { createTest, destroyVM } from '../util';
  // import ${ComponentName} from 'packages/${componentname}';

  // describe('${ComponentName}', () => {
  //   let vm;
  //   afterEach(() => {
  //     destroyVM(vm);
  //   });

//   it('create', () => {
//     vm = createTest(${ComponentName}, true);
//     expect(vm.$el).to.exist;
//   });
// });
//     `
//   }
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

// 创建package
Files.forEach(file => {
  fileSave(path.join(PackagePath, file.filename))
    .write(file.content, 'utf8')
    .end('\n')
})

console.log('DONE!')
