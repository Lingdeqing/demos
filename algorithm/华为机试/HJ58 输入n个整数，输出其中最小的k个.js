// https://www.nowcoder.com/practice/69ef2267aafd4d52b250a272fd27052c

function getKNum(nums, k) {
    function mergeSort(nums, left, right) {
        if (left >= right) {
            return;
        }

        // 分解
        const middle = left + Math.floor((right - left) / 2)
        mergeSort(nums, left, middle)
        mergeSort(nums, middle + 1, right)

        // 合并
        const temp = []
        let i = left, j = middle + 1;
        while (i <= middle && j <= right) {
            if (nums[i] <= nums[j]) {
                temp.push(nums[i])
                i++
            } else {
                temp.push(nums[j])
                j++
            }
        }
        while (i <= middle) {
            temp.push(nums[i])
            i++
        }
        while (j <= right) {
            temp.push(nums[j])
            j++
        }
        for (let i = left; i <= right; i++) {
            nums[i] = temp[i - left]
        }
    }

    mergeSort(nums, 0, nums.length - 1)

    return nums.slice(0, k)
}