const assert = require('assert')

// assert(条件，消息)

assert(5 < 3, 'error')

// assert.deepEqual(变量, 预期的值, msg) // 比较数组里面的成员
// assert.deepStrictEqual(变量, 预期的值, msg) // 比较数组里面的成员&类型
