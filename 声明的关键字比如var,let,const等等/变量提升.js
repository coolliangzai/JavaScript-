//1.var 声明变量存在变量提升的问题
// var name = 'xiaoming'
// console.log(name); //xiaoming
// 2.
// console.log(name); //undefined
// var name = 'xiaoming'
//存在变量提升等同于如下
// var name;
// console.log(name); //undefined
// name = 'xiaoming';
// 3.let声明变量不会存在变量提升的问题
console.log(name); //输出name is not defined，因为let 不存在变量提升
let name = 'xiaoming'