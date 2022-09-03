// 621. 任务调度器
// https://leetcode.cn/problems/task-scheduler/


// https://leetcode.cn/problems/task-scheduler/solution/ren-wu-diao-du-qi-by-leetcode-solution-ur9w/1436596
var leastInterval = function (tasks, n) {
    const counter = Object.values(tasks.reduce((ret, cur) => {
        ret[cur] = (ret[cur] || 0) + 1
        return ret
    }, {})).sort((a, b) => b - a)

    let minLen = (n + 1) * (counter[0] - 1) + 1
    for (let i = 1; i < counter.length; i++) {
        if (counter[i] === counter[0]) minLen++
    }

    return Math.max(tasks.length, minLen)
};