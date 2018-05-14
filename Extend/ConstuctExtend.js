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

function Cat() {
    Animal.call(this);
    this.name = 'Tom';
}

// TestCode
var cat = new Cat()
console.log(cat.name);
console.log(cat.sleep);
console.log(cat instanceof Animal); // false
console.log(cat instanceof Cat); // true


