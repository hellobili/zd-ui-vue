import { createTest, destroyVM } from '../util'
import Demo from 'packages/demo'

describe('Demo', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('create', () => {
    vm = createTest(Demo, true)
    expect(vm.$el).to.exist
  })
})
