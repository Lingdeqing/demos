/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
// 题解： https://leetcode.cn/problems/task-scheduler/solution/ren-wu-diao-du-qi-by-leetcode-solution-ur9w/1436596
var leastInterval = function (tasks, n) {
    const countMap = new Map()
    tasks.forEach(t => countMap.set(t, (countMap.get(t) || 0) + 1));
    const countArr = [...countMap.entries()].sort((a, b) => a[1] - b[1]);

    const maxCount = countArr[countArr.length - 1][1]
    let minLen = (n + 1) * (maxCount - 1) + 1
    for (let i = 0; i < countArr.length - 1; i++) {
        if (countArr[i][1] === maxCount) minLen++
    }

    return Math.max(minLen, tasks.length)
};