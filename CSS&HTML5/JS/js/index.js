/**
 * Created by silence on 2017/4/10.
 */

document.write('<p id="hello">Hello,World</p>') ;

// 拿到div
var main = document.getElementById('main') ;
var img = document.createElement('img') ;
img.src = 'image/img_01.jpg' ;
main.appendChild(img)

// 删除
var p = document.getElementById("hello");
p.remove() ;

console.log(main.childNodes) ;