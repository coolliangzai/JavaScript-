//函数的声明
var num = 3;

function getData(id) {
    console.log(id);
}
//调用函数
getData(num);
//JavaScript 函数可以通过一个表达式定义。

// 函数表达式可以存储在变量中：
var x = function () { //这个function是一个匿名函数
    return 2
}
//此时x就是一个函数表达式
// 函数存储在变量中，不需要函数名称，通常通过变量名来调用。
console.log(typeof x); //输出function
console.log(x()); //输出2


console.log('------------------------');
console.log('------------------------');
console.log('------------------------');
console.log('下面是构造函数');
// 在以上实例中，我们了解到函数通过关键字 function 定义。

// 函数同样可以通过内置的 JavaScript 函数构造器（Function()）定义。
var myFunction = new Function("a", "b", "return a+b");
y = myFunction(2, 3);
console.log(y);

console.log('------------------------');
console.log('------------------------');
console.log('------------------------');
// 在之前的教程中我们已经了解了 "hoisting(提升)"。
// 提升（Hoisting）是 JavaScript 默认将当前作用域提升到前面去的的行为。
// 提升（Hoisting）应用在变量的声明与函数的声明。
// 因此，函数可以在声明之前调用：

myFunction1();

function myFunction1() {
    console.log('这是我的方法');
}
console.log('------------------------');
console.log('------------------------');
console.log('------------------------');
console.log('下面是自调用函数');
// 函数表达式可以 "自调用"。
// 自调用表达式会自动调用。
// 如果表达式后面紧跟 () ，则会自动调用。
// 不能自调用声明的函数。
// 通过添加括号，来说明它是一个函数表达式：
var myFunction2 = function () {
    console.log('这是我的方法2');
};
(function () {
    console.log('这是我的方法3');
})()