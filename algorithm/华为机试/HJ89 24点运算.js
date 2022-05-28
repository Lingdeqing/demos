// https://www.nowcoder.com/practice/7e124483271e4c979a82eb2956544f9d

// 注意题目+-*/没有优先级的概念，只能从前到后运算
// 本质上是个全排列的题目，在四个位置选择数字，然后三个位置选择操作符
function game24(nums) {
    if (nums.find(num => num.toLowerCase() === 'joker')) {
        return 'ERROR'
    }
    nums = nums.map(num => {
        if (num === 'J') return 11
        if (num === 'Q') return 12
        if (num === 'K') return 13
        if (num === 'A') return 1
        return +num
    })


    const op = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
    }
    let res = [0]
    const used = new Set()
    function dfs(prev) {
        if (res.length === 9) {
            return prev === 24
        }
        for (let i = 0; i < nums.length; i++) {
            if (used.has(i)) continue;
            for (let key in op) {
                if (res.length === 1 && key !== '+') { // 第一个数字仅做0+
                    continue
                }
                res.push(key)
                res.push(nums[i])
                used.add(i)
                if (dfs(op[key](prev, nums[i]))) {
                    return true
                }
                res.pop()
                res.pop()
                used.delete(i)
            }
        }
        return false
    }

    // 可以通过初始 0+ 的方式去避免多余的循环
    // for (let i = 0; i < nums.length; i++) {
    //     res.push(nums[i])
    //     used.add(i)
    //     if (dfs(nums[i])) {
    //         return res.map(item => {
    //             if (item === 11) return 'J'
    //             if (item === 12) return 'Q'
    //             if (item === 13) return 'K'
    //             if (item === 1) return 'A'
    //             return item
    //         }).join('')
    //     }
    //     res.pop()
    //     used.delete(i)
    // }

    return dfs(0) ? res.slice(2).map(item => {
        if (item === 11) return 'J'
        if (item === 12) return 'Q'
        if (item === 13) return 'K'
        if (item === 1) return 'A'
        return item
    }).join('') : 'NONE'
}

// function game24(nums) {
//     if (nums.find(num => num.toLowerCase() === 'joker')) {
//         return 'ERROR'
//     }
//     nums = nums.map(num => {
//         if (num === 'J') return 11
//         if (num === 'Q') return 12
//         if (num === 'K') return 13
//         if (num === 'A') return 1
//         return +num
//     })


//     const op = {
//         '+': (a, b) => a + b,
//         '-': (a, b) => a - b,
//         '*': (a, b) => a * b,
//         '/': (a, b) => a / b,
//         '/1': (a, b) => b / a,
//         '-1': (a, b) => b - a,
//     }
//     const opStr = {
//         '+': (a, b) => a + '+' + b,
//         '-': (a, b) => a + '-' + b,
//         '*': (a, b) => a + '*' + b,
//         '/': (a, b) => a + '/' + b,
//         '/1': (a, b) => b + '/' + a,
//         '-1': (a, b) => b + '-' + a,
//     }
//     let res = ''
//     function dfs(path, prevOp, prevNum, chooseList) {
//         if (chooseList.length === 0) {
//             res = path
//             return prevNum === 24
//         }
//         // 每次从chooseList选出两个数字做运算，运算优先级不能大于上一次的运算优先级
//         for (let i = 0; i < chooseList.length; i++) {
//             for (let key in op) {
//                 // 上一次是 +-运算，当前就不能再做乘除，因为没有括号存在
//                 if ((prevOp === '+' || prevOp === '-') && (key[0] === '*' || key[0] === '/')) {
//                     continue
//                 }

//                 if (dfs(
//                     opStr[key](path, chooseList[i]),
//                     key[0],
//                     op[key](prevNum, chooseList[i]),
//                     chooseList.filter((v, index) => index !== i)
//                 )) {
//                     return true
//                 }

//             }
//         }
//         return false
//     }

//     // 初始选两个数字进行运算
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             for (let key in op) {
//                 if (dfs(
//                     opStr[key](nums[i], nums[j]),
//                     key[0],
//                     op[key](nums[i], nums[j]),
//                     nums.filter((v, k) => k !== i && k !== j)
//                 )) {
//                     return res
//                 }
//             }
//         }
//     }

//     return 'NONE'
// }

console.log(game24(['1', '2', '3', '4']))