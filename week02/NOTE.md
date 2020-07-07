学习笔记

练习1(带括号加减乘除BNF)
<AdditiveExpression> ::=  <AdditiveExpression> "+" <MultipleExpression> | <AdditiveExpression> "-" <MultipleExpression> | <MultipleExpression>

<MultipleExpression> ::= <MultipleExpression> "×" <BracketExpression> | <MultipleExpression> "/" <BracketExpression> | <BracketExpression>

<BracketExpression> ::= "(" <AdditiveExpression> ")" | <Number>

2**1**2 乘方,右结合,等于2

js 在非严格意义上来讲是上下文无关文法

Number
0.toString() ❎
0 .toString() ✅

用void 0产生undefined

原型prototype与类class

设计原则: 行为改变对象

[[call]]无法被js语言访问到, 但可以被调用js引擎的语言访问到
普通对象: 属性+原型
