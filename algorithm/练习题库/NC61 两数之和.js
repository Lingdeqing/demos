// NC61 两数之和
// https://www.nowcoder.com/practice/20ef0972485e41019e39543e8e895b7f?tpId=188&&tqId=38589&rp=1&ru=/activity/oj&qru=/ta/job-code-high-week/question-ranking

function twoSum(numbers, target) {
    const map = new Map()
    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i]
        if (map.has(target - num)) {
            return [map.get(target - num) + 1, i + 1]
        }
        map.set(num, i)
    }
    return
}