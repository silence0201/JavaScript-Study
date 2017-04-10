/**
 * Created by silence on 2017/4/10.
 */

function $(id){
    return typeof id === 'string' ? document.getElementById(id):id;
}

//  当网页加载完毕
window.onload = function () {
    // 实现瀑布流布局
    waterFall('main', 'box');

    window.onscroll = function () {
        if (isLoadBox()) {
            // 造数据
            var dataImg = {'data':[{'src':'0.jpg'},{'src':'2.jpg'},{'src':'1.jpg'},{'src':'5.jpg'},{'src':'6.jpg'}]};
            for(var i=0; i<dataImg.data.length; i++){
                //创建盒子
                var newBox = document.createElement('div');
                newBox.className = 'box';
                $('main').appendChild(newBox);
                // 创建里面的盒子
                var newPic = document.createElement('div');
                newPic.className = 'pic';
                newBox.appendChild(newPic);
                // 创建图片
                var newImg = document.createElement('img');
                newImg.src = 'images/' + dataImg.data[i].src;
                newPic.appendChild(newImg);
            }
            // 实现瀑布流布局
            waterFall('main', 'box');
        }
    } ;
} ;

// 实现瀑布流
function waterFall(parent,box) {
    // 拿到所有的子盒子
    var allBox = $(parent).getElementsByClassName(box) ;
    // 取出宽度
    var boxWidth = allBox[0].offsetWidth ;
    // 浏览器宽度
    var screenWidth = document.body.offsetWidth ;
    // 求出列数
    var cols = Math.floor(screenWidth / boxWidth) ;
    // 父标签居中
    $(parent).style.width =  boxWidth * cols + 'px' ;
    $(parent).style.margin = '0 auto' ;

    // ----- 定位------
    // 高度数组
    var heightArr = [] ;
    // 遍历
    for (var i=0 ;i<allBox.length;i++) {
        var boxHeight = allBox[i].offsetHeight ;
        if(i<cols) { // 第一行
            heightArr.push(boxHeight) ;
        }else {
            // 求出最矮盒子
            var minBoxHeight = Math.min.apply(this,heightArr) ;
            var minBoxIndex = getMinBoxIndex(minBoxHeight,heightArr);
            // 盒子定位
            allBox[i].style.position = 'absolute' ;
            allBox[i].style.top = minBoxHeight + 'px';
            allBox[i].style.left = boxWidth * minBoxIndex + 'px';
            // 更新高度
            heightArr[minBoxIndex] += boxHeight;
        }
    }
} ;

// 遍历取出最矮盒子对应的索引
function getMinBoxIndex(value, arr){
    for(var i in arr){
        if(arr[i] == value){
            return i;
        }
    }
}

// 判断是否加载新的盒子
function isLoadBox(){
    // 取出所有的盒子
    var allBox = $('main').getElementsByClassName('box');
    // 拿到最后一个盒子
    var lastBox = allBox[allBox.length -1];
    // 求出最后一个盒子自身高度的一半 + 其头部偏离浏览器的高度
    var lastBoxDis = lastBox.offsetTop + Math.floor(lastBox.offsetHeight / 2.0);
    // 求出浏览器的高度
    var screenHeight = document.body.clientHeight || document.documentElement.clientHeight;
    // 求出页面偏离浏览器的高度
    var offSetTop = document.body.scrollTop;

    console.log(lastBoxDis,screenHeight,offSetTop);
    // 判断是否具备加载条件
    return lastBoxDis < screenHeight + offSetTop ? true : false;
}