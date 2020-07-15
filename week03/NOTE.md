学习笔记

运算符和表达式

    Reference = Object + key (key可以为String也可以为Symbol)
    3 ** 2 ** 3 乘方 右结合
    &&, ||, ?: 都有短路逻辑


类型转换
Boxing: new Object(Symbol("a"))

完成 StringToNumber 和 NumberToString 两个函数, 注意考虑精度问题
function NumberToString(number) {
    return number + ''
}

function StringToNumber(str) {
    return Math.floor(str)
}