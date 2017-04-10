/**
 * Created by silence on 2017/4/10.
 */

function  $(id) {
    // 类型判断
    return typeof id === 'string' ? document.getElementById(id) : id ;
}

window.onload = function () {
    // 拿到所有的li标签和对应的内容

    var list = $('tab-header').getElementsByTagName('li') ;
    var content = $('tab-content').getElementsByClassName('dom') ;

    if (list.length != content.length) return ;

    // 遍历
    for (var i = 0 ; i<list.length;i++) {
        var  li = list[i] ;
        li.id = i;

        // 监听鼠标移动
        li.onmousemove = function () {
            // 设置当前的className
            for(var j=0; j<list.length; j++){
                //让所有的li标签都不被选中
                list[j].className = '';
                content[j].style.display = 'none';
            }
            // 设置当前对象的className
            this.className = 'selected';
            content[this.id].style.display = 'block';
        }
    }
}
