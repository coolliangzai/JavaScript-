//01. 实例化一个Array对象在声明的时候赋值
var arry1 = new Array({
    name: 'bobo',
    age: 18
})
console.log(arry1);
console.log('-------------------------------------------');
//02.和第一种类似，但是实例化数组对象的时候并没有赋值，而实实例化之后再赋值
var arry2 = new Array();
arry2[0] = '李四',
    arry2[1] = '张三',
    arry2[2] = '小明'
console.log(arry2);
console.log('-------------------------------------------');
//03.通过字面量来创建
var arry3 = ['高数', '英语', '历史', '思修']
console.log(arry3);
console.log('-------------------------------------------');
// 访问数组成员
var arry4 = ['高数', '英语', '历史', '思修']
console.log(arry4);
//修改属性中的某个成员
arry4[1] = '体育'
var classname = arry4[1];
console.log(classname);
console.log('-------------------------------------------');



//自定义数组对象中的方法通过原型prototype
Array.prototype.myCase = function () {

    for (var i = 0; i < this.length; i++) {
        console.log(this[i]);
    }

}
arry4.myCase()
console.log('-------------------------------------------');
console.log('-------------------------------------------');
console.log('-------------------------------------------');
console.log('-------------------------------------------');
console.log('-------------------------------------------');
console.log('-------------------------------------------');




//数组中的every方法用于检测数组中所有元素是否都符合条件
//通过使用方法function(){}来实现对元素是否符合条件进行判断,返回值是boolean值
// every() 方法用于检测数组所有元素是否都符合指定条件（通过函数提供）。

// every() 方法使用指定函数检测数组中的所有元素：

// 如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。
// 如果所有元素都满足条件，则返回 true。
// 注意： every() 不会对空数组进行检测。

// 注意： every() 不会改变原始数组。
var arryage = [16, 17, 18, 23, 24, 28];

// function CheckAge(age) {
//     return age > 0
// }
var state = arryage.every(function (age) {
    return age > 14
})
console.log(state);
console.log('-------------------------------------------');
console.log('-------------------------------------------');




//filter方法用来返回数组中所有满足条件的元素，并返回一个数组
// filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。

// 注意： filter() 不会对空数组进行检测。

// 注意： filter() 不会改变原始数组。
var arryage2 = [16, 17, 18, 23, 24, 28];
//function里面的参数age就是前面的arryage2数组里面的每一个元素,index也是
var newarryage2 = arryage2.filter(function (age, index) {
    return index > 1 && age > 23
})
console.log(newarryage2);
console.log('-------------------------------------------');
console.log('-------------------------------------------');





// find() 方法返回通过测试（函数内判断）的数组的第一个元素的值。

// find() 方法为数组中的每个元素都调用一次函数执行：

// 当数组中的元素在测试条件时返回 true 时, find() 返回符合条件的元素，之后的值不会再调用执行函数。
// 如果没有符合条件的元素返回 undefined
// 注意: find() 对于空数组，函数是不会执行的。

// 注意: find() 并没有改变数组的原始值
var FirstElement = arryage2.find(function (age) {
    return age > 23
})
console.log(FirstElement);
console.log('-------------------------------------------');
console.log('-------------------------------------------');
// findIndex() 方法返回传入一个测试条件（函数）符合条件的数组第一个元素位置。

// findIndex() 方法为数组中的每个元素都调用一次函数执行：

// 当数组中的元素在测试条件时返回 true 时, findIndex() 返回符合条件的元素的索引位置，之后的值不会再调用执行函数。
// 如果没有符合条件的元素返回 -1
// 注意: findIndex() 对于空数组，函数是不会执行的。

// 注意: findIndex() 并没有改变数组的原始值。
var set = arryage2.findIndex(function (age) {
    return age == 23;
})
console.log(set);
console.log('-------------------------------------------');
console.log('-------------------------------------------');

// includes() 方法用来判断一个数组是否包含一个指定的值，如果是返回 true，否则false。
var ye = arryage2.includes(20)
console.log(ye);







//数组中的array.join(separator)方法,用来将数组中的所有元素变成字符串。separator参数是用来指定数组中的分隔符
var newstring = arryage2.join("&")
console.log(newstring);
console.log(typeof newstring);
console.log('-------------------------------------------');
console.log('-------------------------------------------');
console.log('向数组中添加元素的一些函数方法');
// unshift() 方法可向数组的开头添加一个或更多元素!!!，并返回新的长度。

// 注意： 该方法将改变数组的数目。

// 提示: 将新项添加到数组末尾，请使用 push() 方法。
var furit = ['苹果', '橘子', '凤梨', '香蕉']
furit.unshift('火龙果')
console.log(furit);
furit.push('榴莲')
console.log(furit);
console.log('-------------------------------------------');
console.log('-------------------------------------------');
// splice() 方法用于添加或删除数组中的元素。splice(index,num,element)index是需要添加或者删除的位置索引，num是需要删除元素的个数，element是需要添加的元素
// 注意：这种方法会改变原始数组。
var furit1 = ['苹果', '橘子', '凤梨', '香蕉']
furit1.splice(0, 1, '榴莲', '草莓');
console.log(furit1);
// orEach() 方法用于调用数组的每个元素，并将元素传递给回调函数。

// 注意: forEach() 对于空数组是不会执行回调函数的。function()里面的val就是数组中的每一个元素
var furit2 = ['苹果', '橘子', '凤梨', '香蕉']
furit2.forEach(function (val) {
    console.log(val);
})
console.log('-------------------------------------------');
console.log('-------------------------------------------');

// indexOf() 方法可返回数组中某个指定的元素位置。
// 该方法将从头到尾地检索数组，看它是否含有对应的元素。开始检索的位置在数组 start 处或数组的开头（没有指定 start 参数时）。如果找到一个 item，则返回 item 的第一次出现的位置。开始位置的索引为 0。
// 如果在数组中没找到指定元素则返回 -1。
var fruits = ["Banana", "Orange", "Apple", "Mango", "Banana", "Orange", "Apple"];
var a = fruits.indexOf("Apple", 4);
console.log(a);
console.log('-------------------------------------------');
console.log('-------------------------------------------');



//concat()连接两个或更多的数组，并返回结果。
// copyWithin()	从数组的指定位置拷贝元素到数组的另一个指定位置中。
// every()	检测数值元素的每个元素是否都符合条件。
// fill()	使用一个固定值来填充数组。
// filter()	检测数值元素，并返回符合条件所有元素的数组。
// find()	返回符合传入测试（函数）条件的数组元素。
// findIndex()	返回符合传入测试（函数）条件的数组元素索引。
// forEach()	数组每个元素都执行一次回调函数。
// from()	通过给定的对象中创建一个数组。
// includes()	判断一个数组是否包含一个指定的值。
// indexOf()	搜索数组中的元素，并返回它所在的位置。
// isArray()	判断对象是否为数组。
// join()	把数组的所有元素放入一个字符串。
// keys()	返回数组的可迭代对象，包含原始数组的键(key)。
// lastIndexOf()	搜索数组中的元素，并返回它最后出现的位置。
// map()	通过指定函数处理数组的每个元素，并返回处理后的数组。
// pop()	删除数组的最后一个元素并返回删除的元素。
// push()	向数组的末尾添加一个或更多元素，并返回新的长度。
// reduce()	将数组元素计算为一个值（从左到右）。
// reduceRight()	将数组元素计算为一个值（从右到左）。
// reverse()	反转数组的元素顺序。
// shift()	删除并返回数组的第一个元素。
// slice()	选取数组的一部分，并返回一个新数组。
// some()	检测数组元素中是否有元素符合指定条件。
// sort()	对数组的元素进行排序。
// splice()	从数组中添加或删除元素。
// toString()	把数组转换为字符串，并返回结果。
// unshift()	向数组的开头添加一个或更多元素，并返回新的长度。
// valueOf()	返回数组对象的原始值