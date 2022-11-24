/**
 * js判断元素是否可以滚动
 * @param {*} el 元素
 * @returns 
 */
// https://segmentfault.com/a/1190000021934483
function eleCanScroll(el) {
    return el.scrollHeight - el.clientHeight > 5;
}

/**
 * 阻止滚动穿透，绑定在modal元素根元素的touchmove上面，在modal上面有滚动元素时使用
 * @param {*} event 事件
 * @param {*} [innerScroll=null] 内部滚动容器
 */
function stopScrollChaining(event, innerScroll = null) {
    if (
        innerScroll &&
        (event.target === innerScroll || innerScroll.contains(event.target)) &&
        eleCanScroll(innerScroll)
    ) {
        // 不阻止内部滚动容器的滚动
    } else {
        // 阻止滚动向外传递
        event.preventDefault();
    }
}


// 安卓键盘收起事件，点击键盘自带的收起按钮，默认不触发blur事件
const winHeight = window.innerHeight
function onAndroidKeyboardDown(callback) {
    const handler = () => {
        if (window.innerHeight === winHeight) {
            callback()
        }
    }
    if (callback) {
        window.addEventListener('resize', handler)
    }
    return () => {
        window.removeEventListener('resize', handler)
    }
}