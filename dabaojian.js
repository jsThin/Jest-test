/* function baojian1(money) {
    return money >= 200 ? '至尊享受' : '基本按摩'
}
function baojian2(money) {
    return money >= 1000 ? '双人服务' : '单人服务'
}

// commonJs导出方式
module.exports = {
    baojian1,
    baojian2
} */


// Es6模块导出方式
export function baojian1(money) {
    return money >= 200 ? '至尊享受' : '基本按摩'
}
export function baojian2(money) {
    return money >= 1000 ? '双人服务' : '单人服务'
}