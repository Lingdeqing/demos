// https://www.nowcoder.com/practice/f9c6f980eeec43ef85be20755ddbeaf4


// 匈牙利算法：https://blog.csdn.net/CoomCon/article/details/108004625
// 题解：https://blog.nowcoder.net/n/b5fe5727959f4c2ab3d954a81af07922?f=comment
// 增广路径解释：https://blog.csdn.net/u013384984/article/details/90718287
function maxPrime1(nums) {
    const odds = [], evens = [] // 奇数+奇数=偶数，偶数+偶数=偶数，偶数肯定不是素数
    for (let n of nums) {
        if (n % 2 === 0) {
            evens.push(n)
        } else {
            odds.push(n)
        }
    }

    const match = new Array(evens.length).fill(0)
    let res = 0
    for (let odd of odds) {
        const visited = new Array(evens.length).fill(false)
        if (find(odd, visited)) {
            res++
        }
    }
    function find(odd, visited) {
        for (let i = 0; i < evens.length; i++) {
            const even = evens[i]
            if (isPrime(even + odd) && visited[i] === false) {
                visited[i] = true
                if (match[i] === 0 || find(match[i], visited)) {
                    match[i] = odd
                    return true
                }
            }
        }
        return false
    }
    return res
}

console.log(maxPrime1([2, 5, 6, 13]))


// 无脑穷举-超时了
function maxPrime(nums) {
    function recur(nums) {
        if (nums.length === 2) {
            return isPrime(nums[0] + nums[1]) ? 1 : 0
        }
        let res = 0
        for (let i = 1; i < nums.length; i++) {
            let n = isPrime(nums[0] + nums[i]) ? 1 : 0
            res = Math.max(res, n + recur(nums.slice(1, i).concat(nums.slice(i + 1))))
        }
        return res
    }
    return recur(nums)
}
function isPrime(n) {
    const sqrt = Math.sqrt(n)
    for (let i = 2; i <= sqrt; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}

console.log(maxPrime('4 5 6 7'.split(' ').map(item => +item)))
console.log(isPrime(11))