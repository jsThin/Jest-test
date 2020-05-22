/* 
    Jest真假匹配器
    toBe: 严格相等，相当于===
    toEqual: 内容相等
    toBeNull: 只匹配null，其它都不匹配，包括undefined
    toBeUndefined: 匹配undefined
    toBeDefined: 只要定义过了，就能匹配
    toBeTruthy/toBeFalsy: 判断真假
*/

/* test('测试007号技师的匹配',()=> {
    expect('07号技师').toBe('07号技师')
})
test('测试严格相等',() => {
    let a = {
        a:123
    }
    expect(a).toEqual({a:123})
})


test('toBeNull测试',() => {
    let a = null
    expect(a).toBeNull()
})
// 等价于
test('toBeNull测试',()=> {
    let a = null
    expect(a).toBe(null)
})

test('toBeUndefined',() => {
    let a
    expect(a).toBeUndefined()
})
// 等价于
test('toBeUndefined测试',()=> {
    let a
    expect(a).toBe(undefined)
})

test('toBeDefined',() => {
    let a = null
    expect(a).toBeDefined()
})

test('toBeTruthy测试',()=> {
    let a = 'so'
    expect(a).toBeTruthy()
})
test('toBeFalsy测试',()=> {
    let a = null
    expect(a).toBeFalsy()
})
 */

test('toBeGreaterThan()匹配器作数字比较，大于指定值通过测试',()=> {
    let a = 10
    expect(a).toBeGreaterThan(9)
})
test('toBeGreaterThanOrEqual()匹配器作数字比较，大于或等于指定值通过测试',()=> {
    let a = 10
    expect(a).toBeGreaterThanOrEqual(10)
})
test('toBeLessThan()匹配器作数字比较，小于指定值通过测试',()=> {
    let a = 10
    expect(a).toBeLessThan(12)
})
test('toBeLessThanOrEqual()匹配器作数字比较，小于指定值通过测试',()=> {
    let a = 10
    expect(a).toBeLessThanOrEqual(10)
})
// toBeCloseTo() 消除JavaScript浮点精度错误的匹配器。比如0.1+0.2，在JavaScript中得到的值是0.3000000000004，如果用toEqual()匹配会失败
// 所有有了toBeCloseTo()
test('toBeCloseTo()匹配器',() => {
    let a = 0.1
    let b = 0.2
    // expect(a+b).toEqual(0.3)  //测试不通过
    expect(a+b).toBeCloseTo(0.3) //测试通过
})

// toMatch()匹配器，字符串包含匹配器
test('toMatch匹配器',() => {
    const str = '谢大脚，刘英，小红'
    // expect(str).toMatch('谢大脚')
    expect(str).toMatch(/谢大脚/)
})

// toContain()匹配器，数组包含匹配器
test('测试toContain',() => {
    const arr = ['谢大脚','刘英','小红']
    expect(arr).toContain('谢大脚')
})
test('测试toContain在set中的应用',() => {
    const array = ['谢大脚','刘英','小红']
    let set = new Set(array)
    expect(set).toContain('谢大脚')
})

// toThrow()匹配器，对异常进行处理的匹配器。可以检测一个方法会不会抛出异常
const throwNewError = () => {
    throw new Error('this is a new error')
}
test('toThorw匹配器测试',() => {
    expect(throwNewError).toThrow()
    expect(throwNewError).toThrow('this is a new error')           //指定抛出错的字符，字符串不相同，也无法通过测试
})


// not 匹配器，意思是相反或者取反，如果通过的加了not就会不通过，反之亦然
/* const throwNewError = () => {
    throw new Error('this is a new error')
}
test('toThorw匹配器测试',() => {
    expect(throwNewError).not.toThrow()
}) */
