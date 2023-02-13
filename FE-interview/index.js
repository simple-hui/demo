// 页面倒入样式，使用link与@import区别
// 1.link是xhtml标签，除了加载css样式以外，还可以定义rel加载属性，@import只能加载css
// 2.link加载样式是同时进行加载。@import引入的样式会在页面加载完后才进行加载
// 3.link不存在兼容性问题。@import ie5以下不支持
// 4.link可以通过js 动态引入， @import 不允许

// 创建一个随机数大于2小于32的长度为5的数组 2019 0418
function insertArr(arr, i = 0, min = 2, max = 32) {
    const num = Math.max(min, Math.ceil(Math.random() * max))
    console.info(!arr[arr.length - 1])
    if (!arr[arr.length - 1]) {
        if (!arr.includes(num)) {
            arr[i++] = num
        }
        return insertArr(arr, i)
    }
    return arr
}
const arr = new Array(5);
const result = insertArr(arr)

console.info(result)

// 去除字符串中所有的空格 2019 04 19

const reg = /\s+/g
const str = '123 12313 3213 123'
str.replaceAll(str, reg)

// 去除字符串中最后一个指定的字符 2019 0420
const str1 = 'kkkooo poknooi opo inkkl kn'
const deleteLastStr = (key)=>{
    console.info(str1.indexOf(key) > -1)
    if (str1.indexOf(key) === -1) {
        return
    }
    const leftIndex = str1.lastIndexOf(key)
    const rightIndex = leftIndex + key.length
    console.info(leftIndex, rightIndex)
    return `${str1.substring(0, leftIndex)}${str1.substring(rightIndex, str1.length)}`
}
console.info(deleteLastStr('kn'))

// 写一个方法把下划线命名转成大驼峰命名 2019 0421
let str2 = 'a_bc_cd_dc'
const replaceUnderline = (str)=>{
    if (typeof str !== "string") {
        return
    }
    for (let i = 0; i< str.length ;i+=1) {
        if (str[i] === '_') {
            str = str.replace(str.substring(i,i+1), str.substring(i+1,i+2).toUpperCase())
        }
    }
    return str
}

console.info(replaceUnderline(str2))

// 写一个方法将字符串中的大小写颠倒 2019 0422

const caseConvert = (str)=>{
    return str.replace((/([a-z]*)([A-Z]*)/g),(m,s1,s2)=>{
        return `${s1.toUpperCase()}${s2.toLowerCase()}`
    })
}

console.info(caseConvert('qqeSde2D33312wwSAw221wE'))

// 写一个去除制表符和换行符的方法 2019 0423
const deleteT =(str)=>{
    if (typeof str !== "string") {
        return
    }
    return str.replace(/\s/g,'')
}
const str3 = '123123 3123 3132 12' +
    '1231231' +
    '1231233'
console.info(deleteT(str3))

// 统计某一字符或字符串在另一个字符串中出现的次数 2019 4 23
const getStrFromStr = (key, str)=>{

    if (typeof key !== "string" && typeof str !== 'string' && key.length === 0) {
        return 0
    }
    const firstLetter = key.substring(0,1)
    let num = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i]=== firstLetter && key === str.substring(i,i+key.length)) {
            num +=1
        }
    }
    return num
}
console.info(getStrFromStr('123','1212121212341123'))

// 写一个获取当前url查询字符串中的参数方法
const getUrlParams = (url, key)=>{
    const urlParams = new URL(url)
    return urlParams.searchParams.get(key)
}

console.info(getUrlParams('http://admin-tools-sccc.beemhub.com/rongcloud/client_log/index?ref=addtabs', 'ref'))

const getUrlAllParams = (url)=>{
    let search = ''
    search = url.substring(1)
    console.info(search)
    const res = {}
    search.split('&').map((item)=>{
        console.info(item)
        const [key, value] = item.split('=')
        res[key]=decodeURI(value)
    })
    return res
}
console.info(getUrlAllParams('?ref=addtabs&a=b&b=c'))

// js数组驱去重支持多维数组
const duplicateRemovalArr = (arr) => {
    return Array.from(new Set(arr.flat(Infinity)))
}
console.info(duplicateRemovalArr([[1,2,3],[[12],[1,2]],1,3,4,5,[[6],[8,7],[0]]]))

// new操作服的理解，以及实现一个new方法 --
// 1.创建一个空的简单JavaScript对象
// 2.为步骤1新创建的对象添加属性_proto_，讲该属性链接至构造函数的原型对象
// 3.将步骤1新创建的对象作为this的上下文
// 4.如果该函数没有返回对象，则返回this。
const testNew = (obj)=>{
    const o = {}
    const args = [].slice.call(arguments)
    o._proto_ = args.prototype
    const res= obj.apply(o,args.slice(1))
    return typeof res === 'object' ? res : o
}

// 乱序一个数组（洗牌算法）
const shuffle = (arr)=>{
    for (let i = arr.length-1; i>0; i--) {
        let j = Math.floor(Math.random() * (i+1))
        console.info(j)
        if (i !== j) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
    return arr
}
console.info(shuffle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]))

// 可以利用navigator.userAgent判断设备来源

// 说说bind， call，apply的用法，以及手写一个bind
// apply 接收一个包含多个参数的数组  call接收一个参数列表

const myCall = (context = window)=>{
    context.fn = this
    let args = [...arguments].slice(1)
    let result = context.fn(...args)
    delete context.fn
    return result
}

const myApply = (context = window)=>{
    context.fn = this
    let result
    if (arguments[1]) {
        result = context.fn([...arguments])
    } else {
        result = context.fn()
    }
    delete context.fn
    return result
}
const myBind = (context)=>{
// 实现bind bind接收第一个参数为this指向，第二个为函数被调用时，被预置入绑定函数的参数列表中的参数
    if (typeof context !== 'function') {
        return
    }
    let _this = this;
    let args = [...arguments].slice(1)
    return function F() {
        if (this instanceof F) {
            return new _this(...args, ...arguments)
        }
        return _this.apply(context, args.concat(...arguments))
    }
}
// 数组获取最大值和最小值
const getMaxAndMin = (arr)=>{
    if (Object.prototype.toString.call(arr) !== '[object Array]') {
        return
    }
    // 前提数组中的每一项都是数字 否则会返回NaN
    return {
        max: Math.max(...arr),
        min: Math.min(...arr)
    }

}

// 写一个方法判断是否为回文字符串
const isHuiStr = (str)=>{
    if (typeof str !== 'string'){
        return false
    }
    const s = str.replace(/[^a-zA-Z0-9]/g,'')
    const reverseStr = s.split('').reverse().join('')
    console.info(reverseStr)

    return s === reverseStr
}

console.info(isHuiStr('aabbbcc,aabbcc'))

