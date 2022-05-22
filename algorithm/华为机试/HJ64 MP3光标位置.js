// https://www.nowcoder.com/practice/eaf5b886bd6645dd9cfb5406f3753e15

function moveCursor(n, keys) {
    // 初始化界面
    let list = [], currentIndex = 0
    for (let i = 0; i < n && i < 4; i++) {
        list.push(i + 1)
    }

    // 模拟交互
    for (let key of keys) {
        if (key === 'U') move(-1)
        else move(1)
    }

    function move(dir) {
        // 切换list
        if (n > 4) {
            if (list[0] === 1 && currentIndex === 0 && dir === -1) {
                // 第一页=>最后一页
                list.forEach((item, index) => {
                    list[index] = (item - 1 - 4 + n) % n + 1
                })
                currentIndex = 3;
            } else if (list[3] === n && currentIndex === 3 && dir === 1) {
                // 最后一页=>第一页
                list.forEach((item, index) => {
                    list[index] = (item - 1 + 4 + n) % n + 1
                })
                currentIndex = 0;
            } else if ((currentIndex === 0 && dir === -1) || (currentIndex === 3 && dir === 1)) { // 普通翻页
                list.forEach((item, index) => {
                    list[index] = (item - 1 + dir) % n + 1
                })
            } else { // 普通翻页
                currentIndex = currentIndex + dir
            }
        } else {
            const size = Math.min(4, n)
            currentIndex = (currentIndex + dir + size) % size
        }
    }

    return [list, list[currentIndex]]
}

console.log(moveCursor(10, 'UUUU'))