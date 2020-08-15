//创建类

class Star {
    constructor(name, music) {
        //这里这个this是指向方法的调用者也就是zjl这个对象
        this.name = name
        this.music = music
    }
    //类里面的函数不需要用funciton来声明,同时类里面不用像对象一样用逗号隔开
    Sing(name) {
        console.log('哎哟不错哦！' + name);
    }

}
//类构造函数constructor
// constructor(方法是类的构造函数(默认方法) ,用于传递参数返回实例对象,通过new命令生成对象实例时
// 自动调用该方法。如果没有显示定义类内部会自动给我们创建一个constructor()

// 利用phone这个类创建一个实例zjl
var zjl = new Star('周杰伦', '稻香')
console.log(zjl);
// 给类里面的函数方法传递参数
zjl.Sing('小子')

console.log('-------------------------------------');
console.log('-------------------------------------');
console.log('-------------------------------------');
console.log('-------------------------------------');

//类的继承
// class Father {
//     constructor(name) {
//         this.name = name
//     }
//     money() {

//         console.log(100);
//     }
// }
// var xiaoming = new Father('xiaoxiao')
// xiaoming.money()
// class Son extends Father {

// }
// var xiao = new Son('xiao')
// console.log(xiao);
// xiao.money()

// class Father {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y
//     }
//     money() {
//         //这里的this.x和this.y是父类的，因此字类不能调用父类的函数
//         return this.x + this.y
//     }
// }
// var father1 = new Father(100, 200)
// console.log(father1.money());
// // 继承
// class Son extends Father {
//     constructor(x, y) { //super关键字用于访问和调用对象父类上的函数。可以调用父类的构造函数,也可以调用父类的普通函数

//         super(x, y) //super方法会调用父亲的构造函数把x,y传给父类中的构造函数
//     }
// }
// var son1 = new Son(7, 9)
// console.log(son1);




class Father {
    constructor(x, y) {
        //constructor里面的this是指向创建的实例对象
        this.x = x;
        this.y = y
    }
    say() {
        return '我是爸爸'
    }
    money() {
        //这里的this.x和this.y是父类的，因此字类不能调用父类的函数
        return this.x + this.y
    }
}
var father1 = new Father(100, 200)
console.log(father1.money());
// 继承
class Son extends Father {
    constructor(x, y) { //super关键字用于访问和调用对象父类上的函数。可以调用父类的构造函数,也可以调用父类的普通函数
        super(x, y) //super方法会调用父亲的构造函数把x,y传给父类中的构造函数
        //super必须在子类this之前进行调用
        this.x = x;
        this.y = y //Must call super constructor in derived class before accessing 'this' or returning from derived constructor

    }
    say() {
        console.log(super.say() + '的儿子'); //super方法还可以调用父类中的普通函数
    }
}
var son1 = new Son(7, 9)
console.log(son1);
console.log(son1.money());
son1.say()