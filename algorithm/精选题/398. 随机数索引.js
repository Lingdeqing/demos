// 398. 随机数索引
// https://leetcode.cn/problems/random-pick-index/

// https://leetcode.cn/problems/random-pick-index/solution/sui-ji-shu-suo-yin-by-leetcode-solution-ofsq/


// 1.哈希
/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    this.map = new Map()
    nums.forEach((num, i) => {
        if (!this.map.has(num)) {
            this.map.set(num, [])
        }
        this.map.get(num).push(i)
    })
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
    const indices = this.map.get(target)
    return indices[Math.floor(Math.random() * indices.length)]
};


// 2. 水塘抽样，数组无穷大的情况

/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    this.nums = nums
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
    let res = 0, cnt = 0
    this.nums.forEach((num, i) => {
        if (num === target) {
            cnt++
            const r = Math.floor(Math.random() * cnt)//[0, i)
            if (r === 0) {
                res = i
            }
        }
    })
    return res
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */