/**
 * Created by silence on 2017/4/5.
 */

var x = 0;
var i;
for (i=1; i<=10000; i++) {
    x = x + i;
}
x; // 50005000

var arr = ['Apple', 'Google', 'Microsoft'];
var i, x;
for (i=0; i<arr.length; i++) {
    x = arr[i];
    alert(x);
}

// for循环的3个条件都是可以省略的，如果没有退出循环的判断条件，就必须使用break语句退出循环，否则就是死循环
var x = 0;
for (;;) { // 将无限循环下去
    if (x > 100) {
        break; // 通过if判断来退出循环
    }
    x ++;
}

// for in
var o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};

for (var key in o){
    alert(key)
}

// 要过滤掉对象继承的属性，用hasOwnProperty()来实现
var o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};
for (var key in o) {
    if (o.hasOwnProperty(key)) {
        alert(key); // 'name', 'age', 'city'
    }
}

// Array
var a = ['A', 'B', 'C'];
for (var i in a) {
    alert(i); // '0', '1', '2'
    alert(a[i]); // 'A', 'B', 'C'
}

// while循环只有一个判断条件，条件满足，就不断循环，条件不满足时则退出循环
var x = 0;
var n = 99;
while (n > 0) {
    x = x + n;
    n = n - 2;
}
x; // 2500

// do while
var n = 0;
do {
    n = n + 1;
} while (n < 100);
n; // 100

