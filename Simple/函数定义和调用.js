/**
 * Created by silence on 2017/4/5.
 */

function abs(x) {
    if (x >= 0) {
        return x ;
    }else {
        return -x ;
    }
}


var abbs = function (x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
};

abs(10); // 返回10
abbs(-9); // 返回9


abs(10, 'blablabla'); // 返回10
abs(-9, 'haha', 'hehe', null); // 返回9

abs(); // 返回NaN

function abs(x) {
    if (typeof x !== 'number') {
        throw 'Not a number';
    }
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}

// arguments，它只在函数内部起作用，并且永远指向当前函数的调用者传入的所有参数
function foo(x) {
    alert(x)
    for (var i = 0 ; i < arguments.length; i++){
        alert(arguments[i])
    }
}

foo(10, 20, 30);


function foo(a, b) {
    var i, rest = [];
    if (arguments.length > 2) {
        for (i = 2; i<arguments.length; i++) {
            rest.push(arguments[i]);
        }
    }
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}

function foo(a, b, ...rest) {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}

foo(1, 2, 3, 4, 5);
// 结果:
// a = 1
// b = 2
// Array [ 3, 4, 5 ]

foo(1);
// 结果:
// a = 1
// b = undefined
// Array []

function foo() {
    return { name: 'foo' };
}

foo(); // { name: 'foo' }


function foo() {
    return
    { name: 'foo' };
}

foo(); // undefined


