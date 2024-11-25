var findDisappearedNumbers = function (nums) {
    const set = new Set(Array.from({ length: nums.length }, (k, i) => i + 1))
    for (let n of nums) {
        set.delete(n)
    }
    return [...set.values()]
};
var findDisappearedNumbers = function (nums) {
    for (let num of nums) {
        const index = Math.abs(num) - 1
        if (nums[index] > 0) {
            nums[index] *= -1 // -1*nums[index] 标记index+1存在
        }
    }
    let res = []
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] > 0) {
            res.push(index + 1)
        }
    }
    return res;
};
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]))