// 71. 简化路径
// https://leetcode.cn/problems/simplify-path/

// 正则写起来太难啦，总有测试用例通不过，妈蛋
// function simplifyPath(path) {
//     if (!path) return '/'
//     if (path[0] !== '/') path = '/' + path
//     path = path.replace(/\/+/g, '/') // 连续 //

//     // 当前目录/./ 换成 /
//     const curReg = /\/\.(\/|$)/
//     while (curReg.test(path)) {
//         path = path.replace(curReg, '/')
//     }

//     // 上级目录
//     const parentReg = /\/([^/.]+)\/\.\.(\/|$)/
//     while (parentReg.test(path)) {
//         path = path.replace(parentReg, '/')
//     }
//     // 根上级目录
//     path = path.replace(/^\/\.\.(\/|$)/, '/')

//     path = path.replace(/\/+$/, '') // 去除结尾 /
//     return path || '/'
// }


// 直接用栈来搞
function simplifyPath(path) {
    const stack = []
    let i = 0;
    while (i < path.length) {
        if (path[i] === '/') {
            // 连续的 / 合并为1
            while (i < path.length && path[i] === '/') i++
        } else if (path[i] === '.') {
            if (i === path.length - 1) { // 以 . 收尾
                i++
            } else if (path[i + 1] === '/') { // ./
                i += 2
            } else if (i + 1 === path.length - 1 && path[i + 1] === '.') { // 以 .. 收尾
                popDir()
                i += 2
            } else if (i + 2 < path.length && path[i + 1] === '.' && path[i + 2] === '/') { // ../
                popDir()
                i += 3
            } else {
                // 其他形式 例如 ...、.ab 视为目录，入栈
                pushDir()
            }
        } else {
            pushDir()
        }
    }
    function pushDir() {
        let dir = ''
        while (i < path.length && path[i] !== '/') {
            dir += path[i]
            i++
        }
        stack.push(dir)
    }
    function popDir() {
        if (stack.length > 0) {
            stack.pop()
        }
    }
    return stack.length > 0 ? '/' + stack.join('/') : '/'
}


function simplifyPath(path) {
    const stack = []
    path = path.split('/')
    path.forEach(item => {
        if (!item || item === '.') return;
        if (item === '..') {
            if (stack.length > 0) {
                stack.pop()
            }
        } else {
            stack.push(item)
        }
    })
    return '/' + stack.join('/')
}

console.log(simplifyPath("/a//b////c/d//././/.."))