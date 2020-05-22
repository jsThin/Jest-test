/* console.log([] instanceof Array);
console.log({} instanceof Object);
console.log(new Date() instanceof Date);
console.log(new RegExp() instanceof RegExp);
console.log(12 instanceof Number); */

/* function deleteTabs(str = '') {
    return str.replace(/\s+/g,'')
} */

/* function codeNums(code,str) {
    let regexp = new RegExp(code,'g')
    return str.match(regexp).length
}
console.log(codeNums('as','asgasagasga')); */

function baseCode(str='',type,space=3) {
    // type=1 加密，type=2解密
    if(type === 1) {
        return str.
        split("")
        .map((s) => {
            return String.fromCharCode(s.charCodeAt() + space)
        })
        .join("")
        
    }else if(type === 2) {
        return str.
        split("")
        .map((s) => {
            return String.fromCharCode(s.charCodeAt() - space)
        })
        .join("")
    }
}
console.log(baseCode('hello world',1,2));   //jgnnq"yqtnf
console.log(baseCode('jgnnq"yqtnf',2,2));   //hello world

// 凯撒密码
/* const encodeCaesar = ({str = "", padding = 3}) =>
  !str
    ? str
    : str
        .split("")
        .map((s) => String.fromCharCode(s.charCodeAt() + padding))
        .join("");

const decodeCaesar = ({str = "", padding = 3}) =>
  !str
    ? str
    : str
        .split("")
        .map((s) => String.fromCharCode(s.charCodeAt() - padding))
        .join("");

console.log(encodeCaesar({str: "hello world"})); */

// function strEncrypt(str) {
//     return str.split('').map(s => {
//       return String.fromCharCode(s.charCodeAt() + 1)
//     }).join('')
//   }
  
//   console.log(strEncrypt('hello world')) // ifmmp!xpsme