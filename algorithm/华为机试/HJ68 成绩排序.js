// https://www.nowcoder.com/practice/8e400fd9905747e4acc2aeed7240978b

// 考虑到数据大小满足0~100，只需要用长度为100的数组处理即可
function sort2(students, dir) {
    const arr = new Array(101)
    for (let item of students) {
        if (!arr[item[1]]) {
            arr[item[1]] = []
        }
        arr[item[1]].push(item)
    }
    const res = []
    if (dir === '0') {
        arr.reverse()
    }

    arr.forEach((items) => {
        items.forEach(item => res.push(item))
    })
    return res
}


console.log(sort2(`aexd 64
rsktnrbpl 33
sfdn 3
u 33`.split('\n').map(item => item.split(' ')), '0'))