// https://www.nowcoder.com/practice/9af744a3517440508dbeb297020aca86

// 这样不知道为啥不行的咧😒
function groupArray(nums) {
    const a = [] // 3的倍数(不包括5的倍数)
    const b = [] // 5的倍数
    const c1 = [] // 其他的倍数
    const c2 = [] // 其他的倍数
    let sum1 = 0 // a的和
    let sum2 = 0 // b的和
    nums.forEach(num => {
        if (num % 5 === 0) { // 5的倍数或者15的倍数
            b.push(num)
            sum2 += num
        } else if (num % 3 === 0) { // 仅3的倍数
            a.push(num)
            sum1 += num
        } else {
            if (num > 0) {
                c1.push(num)
            } else {
                c2.push(num)
            }
        }
    })

    c1.sort((a, b) => b - a)
    while (c1.length > 0) {
        const min = c1.pop()

        if (sum1 >= sum2) {
            b.push(min)
            sum2 += min
        } else if (sum1 < sum2) {
            a.push(min)
            sum1 += min
        }
    }

    c2.sort((a, b) => a - b)
    while (c2.length > 0) {
        const min = c2.pop()

        if (sum1 >= sum2) {
            a.push(min)
            sum1 += min
        } else if (sum1 < sum2) {
            b.push(min)
            sum2 += min
        }
    }

    return sum1 === sum2
}


function groupArray(nums) {
    const a = [] // 3的倍数(不包括5的倍数)
    const b = [] // 5的倍数
    const c = [] // 其他的倍数
    let sum1 = 0 // a的和
    let sum2 = 0 // b的和
    let sum3 = 0 // c的和
    nums.forEach(num => {
        if (num % 5 === 0) { // 5的倍数或者15的倍数
            b.push(num)
            sum2 += num
        } else if (num % 3 === 0) { // 仅3的倍数
            a.push(num)
            sum1 += num
        } else {
            c.push(num)
            sum3 += num
        }
    })

    function dfs(sum, start) {
        if (sum + sum1 === sum3 - sum + sum2 || sum + sum2 === sum3 - sum + sum1) {
            return true
        }
        for (let i = start; i < c.length; i++) {
            if (dfs(sum + c[i], i + 1)) {
                return true
            }
        }
        return false
    }

    return dfs(0, 0)
}

console.log(groupArray('2 -3 5 5 -4 -4 5'.split(' ').map(item => +item)))