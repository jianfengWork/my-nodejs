import { mount, config } from '@vue/test-utils'
config.showDeprecationWarnings = true
console.log(config)
import Counter from './counter'
import { expect } from 'chai'

describe('Counter', () => {
  // 现在挂载组件，你便得到了这个包裹器
  const wrapper = mount(Counter)

  it('renders the correct markup', () => {
    expect(wrapper.html()).to.include('<span class="count">0</span>')
  })

  // 也便于检查已存在的元素
  it('has a button', () => {
    console.log(wrapper.contains('button'), 1)
    // expect(wrapper.contains('button')).to.include(true)
  })
})