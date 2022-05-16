// 15. 三数之和

// 转化成twoSum问题
// O(n^2)
function threeSum(nums) {
    const res = []
    // 排序 O(nlogn)
    nums.sort((a, b) => a - b)
    // 转换为twoSum O(n^2)
    for (let i = 0; i < nums.length;) {
        const firstNum = nums[i]
        const target = 0 - firstNum
        twoSum(nums, i + 1, firstNum, target)
        while (i < nums.length && nums[i] === firstNum) i++
    }
    function twoSum(nums, start, firstNum, target) {
        let left = start, right = nums.length - 1;
        while (left < right) {
            const leftNum = nums[left], rightNum = nums[right];
            const sum = leftNum + rightNum
            if (sum > target) {
                while (left < right && nums[right] === rightNum) right--
            } else if (sum < target) {
                while (left < right && nums[left] === leftNum) left++
            } else {
                res.push([firstNum, leftNum, rightNum])
                while (left < right && nums[right] === rightNum) right--
                while (left < right && nums[left] === leftNum) left++
            }
        }
    }
    return res
}

// 转换为nSum
// O(n^(n-1))
function threeSum(nums) {
    return nSum(nums, 3, 0, 0)
}
function nSum(nums, n, start, target) {
    const res = []
    // 排序 O(nlogn)
    nums.sort((a, b) => a - b)
    if (n < 2 || nums.length - start < n) {
        // error
        return res
    } else if (n === 2) {
        let left = start, right = nums.length - 1;
        while (left < right) {
            const leftNum = nums[left], rightNum = nums[right];
            const sum = leftNum + rightNum
            if (sum > target) {
                while (left < right && nums[right] === rightNum) right--
            } else if (sum < target) {
                while (left < right && nums[left] === leftNum) left++
            } else {
                res.push([leftNum, rightNum])
                while (left < right && nums[right] === rightNum) right--
                while (left < right && nums[left] === leftNum) left++
            }
        }
        return res
    } else {
        for (let i = start; i < nums.length;) {
            const curNum = nums[i]
            const tuples = nSum(nums, n - 1, i + 1, target - curNum)
            tuples.forEach(tuple => {
                tuple.push(curNum)
                res.push(tuple)
            })
            while (i < nums.length && nums[i] === curNum) i++
        }
    }
    return res
}


// 暴力穷举
// t: O(n^3)
function threeSum(nums) {
    const res = [], set = new Set()
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    const tuple = [nums[i], nums[j], nums[k]]
                    const key = tuple.sort().join(',')
                    if (!set.has(key)) {
                        set.add(key)
                        res.push(tuple)
                    }
                }
            }
        }
    }
    return res
}