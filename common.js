
/**获取网页滚动出去的距离  
@return : {scrollLeft:x,scrollTop:y}
*/

function getScrollPoint() {
    //1.能力检测
    //逻辑或短路：找真
    //最后的0，提高代码易读性。某些极少浏览器三者都不支持，返回undefined语义不明确
    var x = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
    var y = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    return {
        scrollLeft: x,
        scrollTop: y
    };
};


/**获取页面可视区域大小
      * @return: {
            clientWidth:w,
            clientHeight:y
        }
*/
function getClientSize() {
    //能力检测：逻辑或短路
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0;
    var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
    return {
        clientWidth: w,
        clientHeight: h
    };
};


/** 获取鼠标触发点相对于页面的距离 
    IE8不支持pageX，没有任何替代方案
    IE8只能手动计算：  pageX = scrollLeft + clientX
*/
    function getPagePoint(e){
        //能力检测
        var x = e.pageX || getScrollPoint().scrollLeft+e.clientX || 0;
        var y = e.pageY || getScrollPoint().scrollTop+e.clientY || 0;

        return {
            pageX:x,
            pageY:y
        };
    };
