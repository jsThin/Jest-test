
// CommonJs方式导入
// const dabaojian = require('./dabaojian')
// const {baojian1,baojian2} = dabaojian

// Es6模块化导入
import {baojian1,baojian2} from './dabaojian'

test('保健1 300元',() => {
    expect(baojian1(300)).toBe('至尊享受')
})
test('保健2 2000元',() => {
    expect(baojian2(2000)).toBe('双人服务')
})