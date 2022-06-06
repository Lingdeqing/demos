// 679. 24 点游戏
// https://leetcode.cn/problems/24-game/

// 时间复杂度: O(9216)=O(1) https://leetcode.cn/problems/24-game/solution/24-dian-you-xi-by-leetcode-solution/
function judgePoint24(cards) {
    const ops = [
        (a, b) => a + b,
        (a, b) => a - b,
        (a, b) => a * b,
        (a, b) => a / b,
        (a, b) => b - a, // 注意 -/ 调换位置
        (a, b) => b / a,
    ]
    // const path = []
    const EPSILON = 1e-6
    function dfs(nums) {
        if (nums.length === 1) {
            // if (Math.abs(nums[0] - 24) < 0.00001) {
            //     console.log(path)
            // }
            return Math.abs(nums[0] - 24) < 0.00001 // 注意这边以防浮点数运算精度问题
        }

        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                for (let k = 0; k < 6; k++) {
                    // path.push([nums[i], nums[j], op.toString()])
                    if (
                        (k === 3 && Math.abs(nums[j]) < EPSILON)
                        || (k === 5 && Math.abs(nums[i]) < EPSILON)
                    ) { // 除法注意 除0
                        continue
                    }
                    if (dfs([
                        ops[k](nums[i], nums[j]),
                        ...nums.filter((n, k) => k !== i && k !== j)
                    ])) {
                        return true
                    }
                    // path.pop()
                }
            }
        }
        return false
    }
    return dfs(cards)
}


// 带出表达式版本
function judgePoint24_2(cards) {
    const ops = [
        (a, b) => a + b,
        (a, b) => a - b,
        (a, b) => a * b,
        (a, b) => a / b,
        (a, b) => b - a, // 注意 -/ 调换位置
        (a, b) => b / a,
    ]
    const opStr = [
        (a, b) => a + '+' + b,
        (a, b) => a + '-' + b,
        (a, b) => a + '*' + b,
        (a, b) => a + '/' + b,
        (a, b) => b + '-' + a, // 注意 -/ 调换位置
        (a, b) => b + '/' + a,
    ]
    const wrapPair = c => c.length > 1 ? `(${c})` : c // 因为数字大小0～9，长度超过1的肯定是表达式
    const EPSILON = 1e-6
    function dfs(nums, exprs) {
        if (nums.length === 1) {
            return Math.abs(nums[0] - 24) < 0.00001 ? exprs[0] : '' // 注意这边以防浮点数运算精度问题
        }

        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                for (let k = 0; k < 6; k++) {
                    if (
                        (k === 3 && Math.abs(nums[j]) < EPSILON)
                        || (k === 5 && Math.abs(nums[i]) < EPSILON)
                    ) { // 除法注意 除0
                        continue
                    }
                    const expr = dfs([
                        ops[k](nums[i], nums[j]),
                        ...nums.filter((n, k) => k !== i && k !== j)
                    ], [
                        opStr[k](wrapPair(exprs[i]), wrapPair(exprs[j])),
                        ...exprs.filter((n, k) => k !== i && k !== j)
                    ])
                    if (expr) {
                        return expr
                    }
                }
            }
        }
        return ''
    }
    return dfs(cards, cards.map(num => num.toString())) || 'NONE'
}

console.log(judgePoint24_2([3, 3, 8, 8]))