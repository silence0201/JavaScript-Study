/**
 * Created by silence on 2017/4/5.
 */

var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};

JSON.stringify(xiaoming); // '{"name":"小明","age":14,"gender":true,"height":1.65,"grade":null,"middle-school":"\"W3C\" Middle School","skills":["JavaScript","Java","Python","Lisp"]}'
//  要输出得好看一些，可以加上参数，按缩进输出
JSON.stringify(xiaoming, null, '  ');

// {
//     "name": "小明",
//     "age": 14,
//     "gender": true,
//     "height": 1.65,
//     "grade": null,
//     "middle-school": "\"W3C\" Middle School",
//     "skills": [
//     "JavaScript",
//     "Java",
//     "Python",
//     "Lisp"
//     ]
// }

// 第二个参数用于控制如何筛选对象的键值，如果我们只想输出指定的属性，可以传入Array：
JSON.stringify(xiaoming, ['name', 'skills'], '  ');

// {
//     "name": "小明",
//     "skills": [
//     "JavaScript",
//     "Java",
//     "Python",
//     "Lisp"
//     ]
// }

// 还可以传入一个函数，这样对象的每个键值对都会被函数先处理：

function convert(key, value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    return value;
}

JSON.stringify(xiaoming, convert, '  ');

// {
//     "name": "小明",
//     "age": 14,
//     "gender": true,
//     "height": 1.65,
//     "grade": null,
//     "middle-school": "\"W3C\" MIDDLE SCHOOL",
//     "skills": [
//     "JAVASCRIPT",
//     "JAVA",
//     "PYTHON",
//     "LISP"
//      ]
// }

// 如果我们还想要精确控制如何序列化小明，可以给xiaoming定义一个toJSON()的方法，直接返回JSON应该序列化的数据

var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp'],
    toJSON: function () {
        return { // 只输出name和age，并且改变了key：
            'Name': this.name,
            'Age': this.age
        };
    }
};

JSON.stringify(xiaoming); // '{"Name":"小明","Age":14}'

// 拿到一个JSON格式的字符串，我们直接用JSON.parse()把它变成一个JavaScript对象：
JSON.parse('[1,2,3,true]'); // [1, 2, 3, true]
JSON.parse('{"name":"小明","age":14}'); // Object {name: '小明', age: 14}
JSON.parse('true'); // true
JSON.parse('123.45'); // 123.45

// JSON.parse()还可以接收一个函数，用来转换解析出的属性
JSON.parse('{"name":"小明","age":14}', function (key, value) {
    // 把number * 2:
    if (key === 'name') {
        return value + '同学';
    }
    return value;
}); // Object {name: '小明同学', age: 14}