// trim() 方法用于删除字符串的头尾空格。
// trim() 方法不会改变原始字符串。
var str = '   bobo    '
console.log(str);
console.log(str.trim());
console.log("-------------------------------");
// toUpperCase() 方法用于把字符串转换为大写。
console.log(str.trim().toUpperCase());
console.log("-------------------------------");
console.log("-------------------------------");


// toLowerCase() 方法用于把字符串转换为小写
var str1 = 'JONE'
console.log(str1);
console.log(str1.toLowerCase());
console.log("-------------------------------");
console.log("-------------------------------");
//substring() 方法用于提取字符串中介于两个指定下标之间的字符。

// substring() 方法返回的子串包括 开始 处的字符，但不包括 结束 处的字符。substring(from,to)
//from:必需。一个非负的整数，规定要提取的子串的第一个字符在 string Object 中的位置。
//to:可选。一个非负的整数，比要提取的子串的最后一个字符在 string Object 中的位置多 1。如果省略该参数，那么返回的子串会一直到字符串的结尾。

var str2 = "Hello world!";

var str3 = str2.substring(0, 4)
console.log(str3);
console.log("-------------------------------");
console.log("-------------------------------");
// substr() 方法可在字符串中抽取从 开始 下标开始的指定数目的字符。substr(start,length)start是截取字符串开始的位置，length是需要截取字符串的长度

// 提示： substr() 的参数指定的是子串的开始位置和长度，因此它可以替代 substring() 和 slice() 来使用。

console.log(str2.substr(0, 5));