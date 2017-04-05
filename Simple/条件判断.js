/**
 * Created by silence on 2017/4/5.
 */

var age = 20 ;
if (age >= 18) { // 如果age >= 18为true，则执行if语句块
    alert('adult');
} else { // 否则执行else语句块
    alert('teenager');
}

// 其中else语句是可选的。如果语句块只包含一条语句，那么可以省略{}：
var age = 20;
if (age >= 18)
    alert('adult');
else
    alert('teenager');


// 省略{}的危险之处在于，如果后来想添加一些语句，却忘了写{}，就改变了if...else...的语义
var age = 20;
if (age >= 18)
    alert('adult');
else
    console.log('age < 18'); // 添加一行日志
alert('teenager'); // <- 这行语句已经不在else的控制范围了

// 多行条件判断
var age = 3;
if (age >= 18) {
    alert('adult');
} else if (age >= 6) {
    alert('teenager');
} else {
    alert('kid');
}