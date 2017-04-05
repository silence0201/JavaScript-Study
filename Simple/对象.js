/**
 * Created by silence on 2017/4/5.
 */

var xiaoming = {
    name: '小明',
    birth: 1990 ,
    school: 'No.1 Middle School',
    height: 1.70,
    weight: 65,
    score: null
}

xiaoming.name; // '小明'
xiaoming.birth; // 1990

var xiaohong = {
    name: '小红',
    'middle-school': 'No.1 Middle School'
};

xiaohong['middle-school']; // 'No.1 Middle School'
xiaohong['name']; // '小红'
xiaohong.name; // '小红'

var xiaoming = {
    name: '小明'
};
xiaoming.age; // undefined

// 由于JavaScript的对象是动态类型，你可以自由地给一个对象添加或删除属性
var xiaoming = {
    name: '小明'
};
xiaoming.age; // undefined
xiaoming.age = 18; // 新增一个age属性
xiaoming.age; // 18
delete xiaoming.age; // 删除age属性
xiaoming.age; // undefined
delete xiaoming['name']; // 删除name属性
xiaoming.name; // undefined
delete xiaoming.school; // 删除一个不存在的school属性也不会报错

// 如果我们要检测xiaoming是否拥有某一属性，可以用in操作符
var xiaoming = {
    name: '小明',
    birth: 1990,
    school: 'No.1 Middle School',
    height: 1.70,
    weight: 65,
    score: null
};
'name' in xiaoming; // true
'grade' in xiaoming; // false

// 不过要小心，如果in判断一个属性存在，这个属性不一定是xiaoming的，它可能是xiaoming继承得到的
'toString' in xiaoming; // true

// 要判断一个属性是否是xiaoming自身拥有的，而不是继承得到的，可以用hasOwnProperty()方法
var xiaoming = {
    name: '小明'
};
xiaoming.hasOwnProperty('name'); // true
xiaoming.hasOwnProperty('toString'); // false