学习笔记

运算符和表达式

    Reference = Object + key (key可以为String也可以为Symbol)
    3 ** 2 ** 3 乘方 右结合
    &&, ||, ?: 都有短路逻辑


类型转换
Boxing: new Object(Symbol("a"))

Realms

In ECMAScript specification there is notion of "realms" introduced: Before it is evaluated, all ECMAScript code must be associated with a realm. Conceptually, a realm consists of a set of intrinsic objects, an ECMAScript global environment, all of the ECMAScript code that is loaded within the scope of that global environment, and other associated state and resources.

https://stackoverflow.com/questions/49832187/how-to-understand-js-realms

https://jakearchibald.com/2017/arrays-symbols-realms/



<iframe srcdoc="<script>var arr = [];</script>"></iframe>
<script>
  const iframe = document.querySelector('iframe');
  const arr = iframe.contentWindow.arr;
  console.log(arr.constructor === Array); // false
  console.log(arr.constructor instanceof Array); // false
</script>

为什么呢? 因为:
console.log(Array === iframe.contentWindow.Array); // false

…the iframe has its own array constructor, which is different to the one in the parent page.

console.log(Array.isArray(arr)); // true
Array.isArray will return true for arrays, even if they were created in another realm. It'll also return true for subclasses of Array, from any realm. This is what JSON.stringify uses internally.