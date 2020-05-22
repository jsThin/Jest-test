
import { fetchData,fetchTwoData,fetchThreeData } from './fetchData.js'

/* test('fetchData测试',() => {
    fetchData((data) => {
        expect(data).toEqual({success: true})
        done()
    })
}) */


test('fetchTwoData测试',() => {
    return fetchTwoData().then((res) => {
        expect(res.data).toEqual({success: true})
    })
})

// 测试请求是否为404
test('fetchThreeData测试',() => {
    expect.assertions(1)   //断言必须执行一次
    return fetchThreeData().catch(err => {
        expect(err.toString().indexOf('404') > -1).toBe(true)
    })
})