// 	JavaScript 对象是变量的容器。

var person = {
    name: '小明',
    age: 19,
    hobbies: ['唱歌', '打篮球', '看书', '跑步']
}
console.log(person);
//访问对象中的属性有两种方法
//方法1:  person.name
console.log(person.name);
//方法2:  person["hobbies"],
console.log(person["hobbies"]);
//对象中的方法
var person1 = {
    name: '小明',
    age: 19,
    hobbies: ['唱歌', '打篮球', '看书', '跑步'],
    getName: function () {
        return this.age;
    }
}
// 对象的方法定义了一个函数，并作为对象的属性存储。

// 对象方法通过添加 () 调用 (作为一个函数)。

// 该实例访问了 person 对象的 getName() 方法:
console.log(person1.getName());
// 如果你要访问 person 对象的 getName 属性，它将作为一个定义函数的字符串返回：
console.log(person1.getName);