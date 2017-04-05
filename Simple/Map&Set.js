/**
 * Created by silence on 2017/4/5.
 */

'use strict';
var m = new Map();
var s = new Set();
alert('你的浏览器支持Map和Set！');

var names = ['Michael', 'Bob', 'Tracy'];
var scores = [95, 75, 85];

var m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]) ;
m.get('Michael');

var m = new Map(); // 空Map
m.set('Adam', 67); // 添加新的key-value
m.set('Bob', 59);
m.has('Adam'); // 是否存在key 'Adam': true
m.get('Adam'); // 67
m.delete('Adam'); // 删除key 'Adam'
m.get('Adam'); // undefined

var m = new Map();
m.set('Adam', 67);
m.set('Adam', 88);
m.get('Adam'); // 88

var s1 = new Set() ;
var s2 = new Set([1,2,3]);

var s = new Set([1, 2, 3, 3, '3']);
s; // Set {1, 2, 3, "3"}

s.add(4)
s //{1, 2, 3, 4}
s.add(4)
s // {1, 2, 3, 4}

var s = new Set([1, 2, 3]);
s; // Set {1, 2, 3}
s.delete(3);
s; // Set {1, 2}