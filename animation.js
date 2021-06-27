

/**匀速动画封装
 * @param: ele:元素
 * @param: target:目标位置
 */
function animationMove(ele,target){
    //1.先清除之前的定时器，以本次为准
    clearInterval(ele.timeID);
    //2.开始本次移动
    ele.timeID = setInterval(function(){
        //2.1 获取元素当前位置
        var currentLeft = ele.offsetLeft;
        //2.2 开始移动
        var isLeft = currentLeft <= target?true:false;
        isLeft?currentLeft += 15 : currentLeft -= 15;
        ele.style.left = currentLeft + 'px';
        //2.3 边界检测
        if(isLeft?currentLeft >= target:currentLeft <= target){
            //(1)停止定时器
            clearInterval(ele.timeID);
            //(2)元素复位
            ele.style.left = target + 'px';
        };
    },10);
};