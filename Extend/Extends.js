// 定义一个动物类
function Animal() {
    // 属性
    this.name = 'Animal';
    // 实例方法
    this.sleep = function () {
        console.log(this.name + '正在睡觉！');
    }
}

// 原型方法
Animal.prototype.eat = function (food) {
    console.log(this.name + '正在吃：' + food);
};

function Cat(name) {
    Animal.call(this);
    this.name = name || 'Tom';
}
(function () {
    // 创建一个没有实例方法的类
    var Super = function () { };
    Super.prototype = Animal.prototype;
    //将实例作为子类的原型
    Cat.prototype = new Super();
})();

// Test Code
var cat = new Cat();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Animal); // true
console.log(cat instanceof Cat); //true
Cat.prototype.constructor = Cat; // 需要修复下构造函数
