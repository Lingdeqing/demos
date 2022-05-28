// https://www.nowcoder.com/practice/3245215fffb84b7b81285493eae92ff0

// 考虑到数据大小满足1～500，只需要用长度为500的数组过滤即可
function sort2(nums) {
    const arr = new Array(501)
    for (let n of nums) {
        arr[n] = 1
    }
    const res = []
    arr.forEach((i, index) => {
        res.push(index)
    })
    return res
}


// Set+排序
function insertSort(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                ;[nums[i], nums[j]] = [nums[j], nums[i]];
            }
        }
    }
}