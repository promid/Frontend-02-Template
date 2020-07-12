学习笔记

带括号加减乘除BNF
<AdditiveExpression> ::=  <AdditiveExpression> "+" <MultipleExpression> | <AdditiveExpression> "-" <MultipleExpression> | <MultipleExpression>

<MultipleExpression> ::= <MultipleExpression> "×" <BracketExpression> | <MultipleExpression> "/" <BracketExpression> | <BracketExpression>

<BracketExpression> ::= "(" <AdditiveExpression> ")" | <Number>

2**1**2 乘方,右结合,等于2

练习：尽可能寻找你知道的计算机语言，尝试把它们分类
数据描述语言: JSON, HTML, XML, SQL, CSS
编程语言: C, C++, C#, Java, Swift, Object C, Javasciipt, Python, Ruby, Golang, Perl, Clojure, Haskell, Lisp
声明式语言: JSON, HTML, XML, SQL, CSS, Clojure, Lisp, Haskell
命令型语言: C, C++, C#, JAVA, JavaScript, Python, Golang, Ruby, Perl
解释性编程语言: JavaScript、Perl、Python、Ruby
编译型编程语言: C, C++, C#, Java, Golang

写一段 JS 的函数，把一个 string 它代表的字节给它转换出来，用 UTF8 对 string 进行遍码。
function encodeUtf8(text) {
    const code = encodeURIComponent(text);
    const bytes = [];
    for (var i = 0; i < code.length; i++) {
        const c = code.charAt(i);
        if (c === '%') {
            const hex = code.charAt(i + 1) + code.charAt(i + 2);
            const hexVal = parseInt(hex, 16);
            bytes.push(hexVal);
            i += 2;
        } else bytes.push(c.charCodeAt(0));
    }
    return bytes;
}

练习：用 JavaScript 去设计狗咬人的代码
class Dog {   
    constructor(name, size, age, damage) {
        this.name = name
        this.size = size
        this.age = age
        this.damage = damage
    }
}

class Human {
    constructor(name, sex, age, health) {
        this.name = name
        this.sex = sex
        this.age = age
        this.health = health
    }
    getHurtBy(obj) {
        const oriHealth = this.health
        this.health -= obj.damage
        console.log(this.name + ' was hurt by ' + obj.name + ' . His health decreased from ' + oriHealth + ' to ' + this.health)
    }
}

let dog = new Dog("doggie", "80cm", "2", 2)
let human = new Human("Annie", "female", 29, 100)
human.getHurtBy(dog)

作业：找出 JavaScript 标准里面所有具有特殊行为的对象
Function
Array
Object.prototype


js 在非严格意义上来讲是上下文无关文法

Number
0.toString() ❎
0 .toString() ✅

用void 0产生undefined

原型prototype与类class

设计原则: 行为改变对象

[[call]]无法被js语言访问到, 但可以被调用js引擎的语言访问到
普通对象: 属性+原型
