// 912. 排序数组
// https://leetcode.cn/problems/sort-an-array/

// 快排最好/最坏/平均时间复杂度推导：https://zhuanlan.zhihu.com/p/341201904
// 排序算法稳定性：https://baike.baidu.com/item/%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95%E7%A8%B3%E5%AE%9A%E6%80%A7/9763250

function sortArray(nums) {
    function quickSort(nums, left, right) {
        if (left >= right) return;
        let i = left, j = right;
        while (i < j) {
            while (i < j && nums[j] >= nums[left]) j--;
            while (i < j && nums[i] <= nums[left]) i++;
            ;[nums[i], nums[j]] = [nums[j], nums[i]];
        }
        ;[nums[i], nums[left]] = [nums[left], nums[i]];
        quickSort(nums, left, i - 1)
        quickSort(nums, i + 1, right)
    }
    quickSort(nums, 0, nums.length - 1)
    return nums
}

console.log(sortArray([3, 2]))

// 2倍快乐
// 第一次写堆排序
// https://aijishu.com/a/1060000000090217
function heapSort(nums) {
    // 自非叶子结点向上构造初始大顶堆
    for (let i = Math.floor(nums.length / 2 - 1); i >= 0; i--) {
        buildHeap(i, nums.length)
    }
    for (let i = nums.length - 1; i > 0; i--) {
        // 交换堆顶和最后一个元素
        ;[nums[0], nums[i]] = [nums[i], nums[0]];
        // 重新构建大顶堆
        buildHeap(0, i)
    }
    function buildHeap(i, size) {
        // 找到大的那个下标
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        let largeIndex = i;
        if (left < size && nums[left] > nums[largeIndex]) {
            largeIndex = left
        }
        if (right < size && nums[right] > nums[largeIndex]) {
            largeIndex = right
        }
        if (largeIndex !== i) {
            // 根不是最大的，把大的换到根上
            ;[nums[i], nums[largeIndex]] = [nums[largeIndex], nums[i]];
            // 递归处理
            buildHeap(largeIndex, size)
        }
    }
    return nums
}

// 3倍快乐
// 链表归并
function mergeSortList(head) {
    if (!head) return null
    if (!head.next) return head
    let slow = head, fast = head.next;
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }
    // slow 指向奇数长度中点，偶数长度找到中心左边点
    let left = head, right = slow.next
    slow.next = null
    left = mergeSortList(left)
    right = mergeSortList(right)

    // 合并
    let res = { next: null }, p = res
    while (left && right) {
        if (left.val > right.val) {
            p.next = right;
            right = right.next;
        } else {
            p.next = left;
            left = left.next;
        }
        p = p.next
    }
    p.next = left || right
    return res.next
}
console.log(mergeSortList({
    val: 4,
    next: {
        val: 2,
        next: {
            val: 1,
            next: {
                val: 3,
                next: null
            }
        }
    }
}))

// 4倍快乐
// 链表快排
function quickSortList(head) {
    function quickSort(head, tail) {
        if (head === tail) return head;
        let leftHead = { next: null }, rightHead = { next: null }
        let p = head, l = leftHead, r = rightHead
        while (p) {
            if (p.val < head.val) {
                l.next = p;
                l = l.next;
            } else {
                r.next = p;
                r = r.next;
            }
            p = p.next
        }
        r.next = null
        l.next = head;
        head.next = rightHead.next;
        quickSort(leftHead.next, head)
        quickSort(head.next, r)
        return leftHead.next;
    }
}
