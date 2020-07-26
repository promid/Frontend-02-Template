学习笔记

浏览器
      HTTP        parse       css computing                 layout                    render
URL ------> HTML ------> DOM ----------------> DOM with CSS ------> DOM with position ------> BitMap

有限状态机
    每一个状态都是一个机器
        计算, 存储, 输出
        每个机器输入一致
        每一个机器本身无状态, 用函数表示状态机->纯函数, 无副作用
    每个机器知道下一个状态
        每个机器都有确定的下一个状态 Moore
        每个机器根据输入决定下一个状态 Mealy

// Mealy
function state(input) {
    return next
}

while(input) {
    state = state(input)
}


字符串中找到字符a
function findA(str){
    for (let s of str) {
        if s === 'a' {
            return true
        }
    }
    return false
}

字符串中找到字符ab
function findAB(str) {
    for (let index in str) {
        if (index + 1 < str.length) {
            if (str[index] === 'a' && str[index+1] === 'b') {
                return true
            }
        }
    }
    return false
}

字符串中找到字符abcdef
function findABCDEF(str) {
    for (let index in str) {
        if (index + 5 < str.length) {
            if (str[index] === 'a' && str[index+1] === 'b' && str[index+2] === 'c' && str[index+3] === 'd' && str[index+4] === 'e' && str[index+5] === 'f') {
                return true
            }
        }
    }
    return false
}

使用状态机的代码:

function match(string) {
    let state = start
    for (let s of string) {
        state = state(s)
    }
    return state === end
}

function start(s) {
    if (s === 'a') 
        return foundA;
    else
    return start
}

function end(s) {
    return end;
}

function foundA(s) {
    if (s === 'b') 
        return foundB;
    else
     return start(s)
}

function foundB(s) {
    if (s === 'c') 
        return foundC;
    else
        return start(s)
}

function foundC(s) {
    if (s === 'd') 
        return foundD;
    else
        return start(s)
}

function foundD(s) {
    if (s === 'e') 
        return foundE;
    else
        return start(s)
}

function foundE(s) {
    if (s === 'f') 
        return end;
    else
        return start(s)
}

console.log(match("abcdef"))

HTTP 协议解析
    7层模型, 4层模型
        应用
        表示
        会话       HTTP
        传输       TCP
        网络       Internet
        数据链路
        物理层     4G/5G/Wi-Fi 

HTTP请求
    content-type必要字段
    body是kv
    不同content-type影响body格式
send
    在request构造器中收集必要信息
    send函数将请求发送到服务器
    异步,返回promise

从标签构建DOM树: 栈.
自封笔记诶单可视为入栈后立即出栈