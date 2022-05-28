// https://www.nowcoder.com/practice/9a763ed59c7243bd8ab706b2da52b7fd

function classify(nums, rules) {
    nums = nums.split(' ').slice(1)
    rules = rules.split(' ').slice(1)

    // R去重排序
    rules = [...new Set(rules)].sort((a, b) => +a - +b)

    // 分类
    const output = [0]
    for (let rule of rules) {
        let pairs = 0
        output.push(rule) // 规则数
        output.push(0) // 对数
        for (let i = 0; i < nums.length; i++) {
            if (nums[i].includes(rule)) {
                output.push(i, nums[i]) // 索引、数
                pairs++
            }
        }
        if (pairs === 0) { // 去掉没有命中数的规则
            output.length -= 2
        } else {
            output[output.length - pairs * 2 - 1] = pairs
        }
    }
    // 总数
    output[0] = output.length - 1
    return output
}
console.log(classify(
    '15 123 456 786 453 46 7 5 3 665 453456 745 456 786 453 123',
    '5 6 3 6 3 0'))