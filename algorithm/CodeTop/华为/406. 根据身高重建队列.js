// 406. 根据身高重建队列
// https://leetcode.cn/problems/queue-reconstruction-by-height/

// 题解套路：https://leetcode.cn/problems/queue-reconstruction-by-height/solution/xian-pai-xu-zai-cha-dui-dong-hua-yan-shi-suan-fa-g/
function reconstructQueue(people) {
    people.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1] // 人数升序
        }
        return b[0] - a[0] // 身高降序
    })

    let res = []
    for (let i = 0; i < people.length; i++) {
        if (res.length <= people[i][1]) {
            res.push(people[i])
        } else {
            res.splice(people[i][1], 0, people[i])
        }
    }
    return res
}